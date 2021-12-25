import React from "react"
import { useDispatch } from "react-redux"
import { yorumSil } from "../actions";
export const YorumListesi = (props) => {
    const dispatch = useDispatch();

    const deleteYorumItem = (item) => {
        dispatch(yorumSil(item))
    }
    return (
        <React.Fragment>
            <h5>Yorumlar</h5>
            <div className="ui list">
                {props.yorumlar.map((item) => (
                    <div className="item" key={item.id}>
                        <img className="ui avatar image" src="https://semantic-ui.com/images/avatar2/small/rachel.png" />
                        <div className="content">
                            <a className="header">{item.display_name}</a>
                            <div className="description">
                                {item.body}
                            </div>
                        </div>
                        <button onClick={() => props.editYorumItem(item)} className="ui inverted button green">Düzenle</button>
                        <button onClick={(e) => deleteYorumItem(item)} className="ui inverted button red">Sil</button>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}