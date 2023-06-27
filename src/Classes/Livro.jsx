import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import ModalInfo from "../components/Modal/ModalInfo";

import "./Livro.css";

export default class Livro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
        };
    }
    obterInformacoes() {
        this.setState({ modalShow: true });
    }
    render() {
        return (
            <>
                <Col>
                    <Card style={{ width: "18rem", marginBottom: "15px" }}>
                        <Card.Body>
                            <Card.Title>{this.props.titulo}</Card.Title>
                            <Card.Text className="card-text">
                                Autor:
                                {this.props.autor}
                            </Card.Text>
                            <Card.Text>
                                Ano Publicação: {this.props.anopublicacao}
                            </Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => this.obterInformacoes()}
                            >
                                Mais informações
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <ModalInfo
                    titulo={this.props.titulo}
                    autor={this.props.autor}
                    anopublicacao={this.props.anopublicacao}
                    show={this.state.modalShow}
                    onHide={() => this.setState({ modalShow: false })}
                />
            </>
        );
    }
}
