import React from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useState } from "react/cjs/react.development"
import { Button,  Modal } from 'semantic-ui-react'
import { yaziSil } from "../actions"


export const SilModal = ({ post_id }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false)
    const show = () => setOpen(true)
    const close = () => setOpen(false)
    
    const deletePost = (post_id) => {
       dispatch(yaziSil(post_id,close))
       navigate("/")
       
    }

    return (
        <>
            <Button onClick={show} className="ui button red">Sil</Button>
            <Modal size="mini" open={open} onClose={close}>
                <Modal.Header>
                    Yaziyi Sil
                </Modal.Header>
                <Modal.Content>
                    Silmek İstediğinizden Emin misiniz ?
                </Modal.Content>
                <Modal.Actions>
                    <Button onClick={close} negative>
                        İptal
                    </Button>
                    <Button onClick={() => deletePost(post_id)} positive icon="delete" labelPosition="right" content="Evet,Sil" />
                </Modal.Actions>
            </Modal>
        </>
    );
}
