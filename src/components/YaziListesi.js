import React, { useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { yaziListesiGetir } from "../actions"


export const YaziListesi = () => {

    const yaziListesi = useSelector(state => state.yaziListesi)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(yaziListesiGetir())

    }, [])

    return (
        <div className="ui relaxed divided list">
            <Link to="/addpost">Yazi Ekle</Link>
            {
                yaziListesi.map((yazi, index) => (
                    <div key={index} className="item">
                        <i className="large github middle aligned icon"></i>

                        <div className="content">
                            <Link to={`posts/${yazi.id}`} className="header">{yazi.title}</Link>
                            <div className="description">{yazi.created_at}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}