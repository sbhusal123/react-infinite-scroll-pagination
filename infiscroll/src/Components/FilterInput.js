import React from "react";

import { Card, Row, Col, Form, Button } from "react-bootstrap";

import { getNextPageNumber } from "../Heplers/utils";

function FilterForm(props) {
    const handleSubmit = e => {
        e.preventDefault();

        if (props.nextPageUrl) {
            props.loadCourse(getNextPageNumber(props.nextPageUrl));
        }
    };

    return (
        <Row style={{ marginBottom: "0.3rem" }}>
            <Card bg="" variant="dark" text="dark">
                <Card.Body style={{ width: "auto" }}>
                    <Card.Title style={{ textAlign: "center" }}>
                        Filter Courses
                    </Card.Title>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={4}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="University"
                                    />
                                </Form.Group>
                            </Col>

                            <Col sm={4}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control
                                        type="text"
                                        placeholder="Degree Type"
                                    />
                                </Form.Group>
                            </Col>
                            <Col sm={4}>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </Row>
    );
}

export default FilterForm;
