import React, { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { api } from "../api/api";
import { YorumForm } from "./YorumForm";
const YaziBaslangic = {
    title: "",
    content: ""
}
const YorumEditFormu = () => {
    const [yazi, setYazi] = useState(YaziBaslangic);
    const { id } = useParams();
    useEffect(() => {
        api().get(`posts/${id}/comments`).then(reponse => {
            setYazi(reponse.data)
        })
    },[])
    return (
        <React.Fragment>
            <h1>Yazı Düzenleme</h1>
            <YorumForm yazi={yazi} />
        </React.Fragment>
    )
}
export default YorumEditFormu;