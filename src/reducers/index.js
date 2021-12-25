import { YAZIDETAY_GETIR, YAZIDETAY_GETIR_HATA, YAZI_DUZENLE, YAZI_EKLE, YAZI_LISTESI_GETIR, YAZI_LISTESI_GETIR_HATA, YAZI_SIL, YORUM_DUZENLE, YORUM_EKLE, YORUM_SIL } from '../actions/actionTypes'
const INIIT_STATE = {
    yaziListesi: [],
    yaziDetayi: { id: "", title: "", content: "", created_at: "", yorumlar: [] },
    yaziListesiHata: '',
    yaziDetayHata: ''
}
export const reducer = (state = INIIT_STATE, action) => {
    switch (action.type) {
        case YAZI_LISTESI_GETIR:
            return { ...state, yaziListesi: action.payload }
        case YAZI_LISTESI_GETIR_HATA:
            return { ...state, yaziListesiHata: action.payload }
        case YAZIDETAY_GETIR:
            return { ...state, yaziDetayi: action.payload }
        case YAZIDETAY_GETIR_HATA:
            return { ...state, yaziDetayHata: action.payload }
        case YAZI_EKLE:
            return { ...state, yaziListesi: [...state.yaziListesi, action.payload] }
        case YAZI_DUZENLE:
            return { ...state, yaziDetayi: { ...state.yaziDetayi, ...action.payload } }
        case YAZI_SIL:
            return {
                ...state,
                yaziListesi: state.yaziListesi.filter(yazi => yazi.id !== action.payload)
            }
        case YORUM_EKLE:
            return {
                ...state,
                yaziDetayi: { ...state.yaziDetayi, yorumlar: [...state.yaziDetayi.yorumlar, action.payload] }
            }
        case YORUM_DUZENLE:
            return {...state,yaziDetayi:{...state.yaziDetayi,yorumlar:state.yaziDetayi.yorumlar
            .map(yorum=>yorum.id===action.payload.id?{...yorum,body:action.payload.body}:yorum)}}
        case YORUM_SIL:
            return {
                ...state, yaziDetayi: { ...state.yaziDetayi, yorumlar: state.yaziDetayi.yorumlar.filter((yorum) => yorum.id !== action.payload) }

            }
        default:
            return state
    }
}