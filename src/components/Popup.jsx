import React, { useState } from "react"
import styled from "@emotion/styled"
import { RichText } from "prismic-reactjs"
import { Modal, Button } from "react-bootstrap"
import { usePrismicModalData } from "../hooks/use-prismic-modal-data"

const PopupContainer = styled("div")`
  display: block;
  .trs-modal-container p, .trs-modal-container  img {
      text-align: center;
      display: block;
      margin: 0 auto;
      max-width: 100%;
  }
`

function Popup(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const modalData = usePrismicModalData();

    if (typeof window !== 'undefined') {
        if (localStorage.getItem('popupShown') !== modalData._meta.lastPublicationDate &&
            modalData.modal_enabled) {
            setShow(true);
            localStorage.setItem('popupShown', modalData._meta.lastPublicationDate);
        }
    } else {
        console.log('Runing on server, localStorage not available');
    }

    return (
        <PopupContainer>
            <Modal 
                show={show} 
                onHide={handleClose}
                size="lg"
                centered
                contentClassName="trs-modal-container">
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal Heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>{RichText.render(modalData.modal_content)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </PopupContainer>
    )
}

export default Popup

Popup.propTypes = {}
