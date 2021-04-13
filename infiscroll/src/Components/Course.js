import React from "react";

import { Card, Row } from "react-bootstrap";

import _ from "lodash";

function Course(props) {
    return (
        <Row style={{ marginBottom: "0.3rem" }}>
            <Card bg="success" variant="light" text="dark">
                <Card.Body>
                    <Card.Title>{props.course_name}</Card.Title>
                    <hr />
                    <Card.Text style={{ fontWeight: "bold" }}>
                        Degree: {props.course_type}
                    </Card.Text>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis lacus leo, lacinia eget lectus vel, varius laoreet
                        mi. Integer vitae erat rutrum orci vehicula dictum nec
                        id sapien. Mauris dignissim tortor eget aliquam gravida.
                        Aliquam erat volutpat.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p style={{ fontWeight: "bold" }}>
                        University: {_.lowerCase(props.university)}
                    </p>
                </Card.Footer>
            </Card>
        </Row>
    );
}

export default Course;
