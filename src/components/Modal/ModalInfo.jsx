import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalInfo = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {props.titulo}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>{props.autor}</h4>
                <p>{props.anopublicacao}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};
export default ModalInfo;
