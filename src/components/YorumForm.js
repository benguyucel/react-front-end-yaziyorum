import axios from "axios";
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { yorumDuzenle, yorumEkle } from "../actions";

const YorumBaslangic = {
  display_name: "",
  body: ""
}

export const YorumForm = (props) => {
  const [yorumForm, setYorumForm] = useState(YorumBaslangic)

  const [disable, setDisable] = useState(false);

  const dispatch = useDispatch()
  const { id } = useParams()

  const handleOnChange = (event) => {
    setYorumForm({ ...yorumForm, [event.target.name]: event.target.value })
  }
  const handleSubmit = (yorumForm) => {
    if (props.yorum?.display_name && props.yorum!=null) {
      console.log("props",props.yorum)
      dispatch(yorumDuzenle(yorumForm))
    } else {
      console.log("props",props.yorum)
      dispatch(yorumEkle(id, yorumForm))
    }
  }
  useEffect(() => {
    if (props.yorum?.body && props.yorum.display_name) {
        setDisable(true)
      setYorumForm({
        post_id: props.yorum.post_id, id: props.yorum.id,
        display_name: props.yorum.display_name, body: props.yorum.body
      })
    }
  }, [props.yorum.body])
  return (
    <form className="ui form" onSubmit={(e) => {
      e.preventDefault()
      handleSubmit(yorumForm)
      setYorumForm(YorumBaslangic)
    }}>
      <div className="field">
        <label>Adınız</label>
        <input name="display_name" placeholder="adınız"
          onChange={handleOnChange} value={yorumForm.display_name} />
      </div>
      <div className="field"><label>
        Yorumunuz</label>
        <textarea name="body" placeholder="Yorumunuz" rows="3" value={yorumForm.body}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button type="submit" className="ui button">{disable ? `Düzenle` : `Yorum Ekle`}</button>
      {disable && (
        <button onClick={() => {
          setDisable(false)
          props.yorum.display_name=null
        }} type="submit" className="ui button">İptal Et</button>
      )}

    </form>
  )
}