import axios from "axios"
import { useNavigate } from "react-router-dom"
import { api } from "../api/api"
import { YAZIDETAY_GETIR, YAZIDETAY_GETIR_HATA, YAZI_DUZENLE, YAZI_EKLE, YAZI_LISTESI_GETIR, YAZI_LISTESI_GETIR_HATA, YAZI_SIL, YORUM_DUZENLE, YORUM_EKLE, YORUM_SIL } from './actionTypes'
export const yaziListesiGetir = () => dispatch => {
    api().get("/posts")
        .then(response => {
            dispatch({ type: YAZI_LISTESI_GETIR, payload: response.data })
        }).catch(() => {
            dispatch({ type: YAZI_LISTESI_GETIR_HATA, payload: "Yazı yüklenirken bir hata oluştu" })
        })
}

export const yaziDetayiGetir = (id) => dispatch => {
    axios.all([api().get(`/posts/${id}`), api().get(`/posts/${id}/comments`)])
        .then(responses => {
            const payload = {
                ...responses[0].data,
                yorumlar: responses[1].data
            }
            dispatch({ type: YAZIDETAY_GETIR, payload })

        }).catch((error) => {
            dispatch({ type: YAZIDETAY_GETIR_HATA, payload: "HATA" })

        })


}
export const yaziEkle = (yazi) => dispatch => {
    api().post("/posts", yazi).then(repsonse => {
        dispatch({ type: YAZI_EKLE, payload: repsonse.data })
    })
}

export const yaziDuzenle = (id, yazi) => dispatch => {
    api().put(`/posts/${id}`, yazi).then(
        response => {
            dispatch({ type: YAZI_DUZENLE, payload: response.data })
        }
    )
}
export const yaziSil = (id) => dispatch => {
    api().delete(`/posts/${id}`).then(response => {
        dispatch({ type: YAZI_SIL, payload: parseInt(id) })
    })
}

export const yorumEkle = (id, item) => dispatch => {
    api().post(`/posts/${id}/comments/`, item).then(
        response => {
            dispatch({ type: YORUM_EKLE, payload: response.data })
        }
    )
}
export const yorumDuzenle =(item)=>dispatch=>{
    api().put(`/posts/${item.post_id}/comments/${item.id}`, {body:item.body}).then(
        response=>{
            dispatch({ type: YORUM_DUZENLE, payload: response.data })
            
        }
    )
}

export const yorumSil = (item) => dispatch => {
    api().delete(`/posts/${item.post_id}/comments/${item.id}`).then(
        response => {
            dispatch({ type: YORUM_SIL, payload: parseInt(item.id) })
        }
    )
}