import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";
import { yaziDetayiGetir } from "../actions";
import YaziFormu from "../components/YaziFormu";

const YaziEditFormu = () => {
    const yazi = useSelector((state)=>state.yaziDetayi)
    const {id} = useParams()
    const dispatch = useDispatch()
    useEffect(()=>{
            dispatch(yaziDetayiGetir(id))
    },[])
    return (
        <React.Fragment>
            <h1>Yazı Düzenleme</h1>
            <YaziFormu yazi={yazi} />
        </React.Fragment>
    )
}
export default YaziEditFormu;