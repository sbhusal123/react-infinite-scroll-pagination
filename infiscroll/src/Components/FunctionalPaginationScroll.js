// Core
import React, { useEffect, Fragment } from "react";

// Components
import Course from "./Course";
import { Col, Container, Button } from "react-bootstrap";

// Redux Imports
import { useSelector, useDispatch } from "react-redux";
import { loadCourses } from "../redux/actions/Courses";
import Loader from "./Loader";

// Heplers
import { getNextPageNumber } from "../Heplers/utils";

const FunctionalPagination = () => {
    const dispatch = useDispatch();
    const { nextUrl, paginatedCourses, isLoading } = useSelector(
        state => state.coursesStore
    );

    useEffect(
        () => {
            dispatch(loadCourses());
        },

        // eslint-disable-next-line
        [null]
    );

    const fetchNewCourse = () => {
        dispatch(loadCourses(getNextPageNumber(nextUrl)));
    };

    return (
        <Fragment>
            <Container style={{ marginTop: "5%" }}>
                <Col>
                    <div id="courses_list">
                        {paginatedCourses.map(course => {
                            return (
                                <Course
                                    course_name={course.name}
                                    course_type={course.course_type}
                                    university={course.university_slug}
                                    key={course.id}
                                />
                            );
                        })}

                        {nextUrl && !isLoading ? (
                            <Col>
                                <Button
                                    onClick={fetchNewCourse}
                                    className="btn btn-lg btn-info"
                                    style={{
                                        width: "100%",
                                        marginBottom: "3%"
                                    }}
                                >
                                    Load More Courses
                                </Button>
                            </Col>
                        ) : null}

                        {isLoading === true ? <Loader /> : null}
                        {isLoading === true ? <Loader /> : null}
                        {isLoading === true ? <Loader /> : null}
                    </div>
                </Col>
            </Container>
        </Fragment>
    );
};

export default FunctionalPagination;
