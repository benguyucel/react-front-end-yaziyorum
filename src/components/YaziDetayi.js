import axios from "axios";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { YaziYorumlar } from "./YaziYorumlar";
import { SilModal } from '../components/SilModal'
import { useDispatch, useSelector } from "react-redux";
import { yaziDetayiGetir } from "../actions";

export const YaziDetayi = () => {
  const useRef = React.useRef(null)
  const yaziDetayi = useSelector((state) => state.yaziDetayi)
    
  const dispatch = useDispatch()

  const { id } = useParams();
  useEffect(() => {
    dispatch(yaziDetayiGetir(id))
  }, [])

  return (
    <React.Fragment>
      {<div className="ui sizer vertical segment">
        <div className="ui huge header">{yaziDetayi.title}</div>
        <p>{yaziDetayi.content}</p>
        <Link to={`/editpost/${id}`} className="ui button orange">Düzenle</Link>
        <SilModal  post_id={id} />
      </div>
      }
      <YaziYorumlar yorumlar={yaziDetayi.yorumlar}/>
    </React.Fragment>
  )
}