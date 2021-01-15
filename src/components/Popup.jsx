import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { RichText } from "prismic-reactjs"
import { Modal, Button } from "react-bootstrap"
import { usePrismicModalData } from "../hooks/use-prismic-modal-data"

const PopupContainer = styled("div")`
  display: block;
  
  .trs-modal-container p, .trs-modal-container img {
      text-align: center;
      display: block;
      margin: 0 auto;
      max-width: 100%;
  }
`

const ModalStyles = styled(Modal)`
    img {
        width: 100%;
    }
`

function Popup() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    
    
    const modalData = usePrismicModalData();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.getItem('popupShown') !== modalData.last_publication_date &&
                modalData.data.modal_enabled) {
                setShow(true);
                localStorage.setItem('popupShown', modalData.last_publication_date);
            }
        } else {
            console.log('Running on server, localStorage not available');
        }
    }, [])

    return (
        <PopupContainer>
            <ModalStyles 
                show={show} 
                onHide={handleClose}
                size="lg"
                centered
                contentClassName="trs-modal-container">
                <Modal.Header closeButton>
                    {/* <Modal.Title>Modal Heading</Modal.Title> */}
                </Modal.Header>
                <Modal.Body>{RichText.render(modalData.data.modal_content.raw)}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </ModalStyles>
        </PopupContainer>
    )
}

export default Popup

Popup.propTypes = {}
