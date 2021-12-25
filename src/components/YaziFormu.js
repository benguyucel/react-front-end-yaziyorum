import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import { yaziDuzenle, yaziEkle } from "../actions";

const YaziFormu = (props) => {
    const navigate = useNavigate();
    const [yazi, setYazi] = useState("")
    const dispatch = useDispatch()
    const handleOnChange = (event) => {
        event.preventDefault()
        setYazi({ ...yazi, [event.target.name]: event.target.value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (props.yazi?.title) {
            dispatch(yaziDuzenle(props.yazi.id, { title: yazi.title, content: yazi.content }))
             navigate(`/posts/${props.yazi.id}`)
        } else {
            dispatch(yaziEkle(yazi))
            navigate("/")
        }
    }
    useEffect(() => {
        if (props.yazi?.title && props.yazi.content) setYazi(props.yazi)
    }, [props.yazi])
    return (
        <React.Fragment>
            <form className="ui form" onSubmit={(event) => handleSubmit(event)}>
                <div className="field">
                    <label>Başlık</label>
                    <input name="title" placeholder="adınız" onChange={handleOnChange} value={yazi.title} />
                </div>
                <div className="field"><label>
                    Yazınız</label>
                    <textarea name="content" placeholder="Yazınız" rows="3" value={yazi.content}
                        onChange={handleOnChange}
                    ></textarea>
                </div>
                <button type="submit" className="ui button">Submit</button>
            </form>
        </React.Fragment>
    )
}
export default YaziFormu;