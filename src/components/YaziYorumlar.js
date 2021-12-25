import React, { useState } from "react"
import { YorumForm } from "./YorumForm"
import { YorumListesi } from "./YorumListesi"
export const YaziYorumlar = (props) => {
    const [yorum, setYorum] = useState("")
    const editYorumItem = (item) => {
            setYorum(yorum => yorum = item)
    }

    return (
        <React.Fragment>
            <YorumListesi editYorumItem={editYorumItem} yorumlar={props.yorumlar} />
            <YorumForm  yorum={yorum} />
        </React.Fragment>
    )
}