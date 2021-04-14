// Core Imports
import React, { Component, Fragment } from "react";
import { Col, Container } from "react-bootstrap";

// Components
import Course from "./Course";
import Loader from "./Loader";

// Redux Imports
import { connect } from "react-redux";
import { loadCourses } from "../redux/actions/Courses";

// Heplers
import { getNextPageNumber, isBottomOfElementReached } from "../Heplers/utils";

class ClassBasedPaginationScroll extends Component {
    componentDidMount() {
        this.props.loadCourses();
        document.addEventListener("scroll", this.trackScrolling);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.trackScrolling);
    }

    trackScrolling = () => {
        // element of which to track the bottom scroll.
        const wrappedElement = document.getElementById("courses_list");

        // If bottom of that element is reached
        if (
            isBottomOfElementReached(wrappedElement) &&
            this.props.courseIsLoaded === true
        ) {
            // Fetch courses from next Endpoint if not Null
            if (this.props.nextPageUrl) {
                this.props.loadCourses(
                    getNextPageNumber(this.props.nextPageUrl)
                );
            }
        }
    };
    render() {
        const { courseIsLoaded } = this.props;

        return (
            <Fragment>
                <Container style={{ marginTop: "5%" }}>
                    <Col>
                        {/* <Loader /> */}

                        {/* Wrapper for Course Component */}
                        <div id="courses_list">
                            {this.props.paginatedCourses.map(course => {
                                return (
                                    <Course
                                        course_name={course.name}
                                        course_type={course.course_type}
                                        university={course.university_slug}
                                        key={course.id}
                                    />
                                );
                            })}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                            {courseIsLoaded ? null : <Loader />}
                        </div>
                    </Col>
                </Container>
            </Fragment>
        );
    }
}

const mapStateToProps = store => {
    return {
        courses: store.coursesStore.courses,
        paginatedCourses: store.coursesStore.paginatedCourses,
        nextPageUrl: store.coursesStore.nextUrl,
        courseIsLoaded: store.coursesStore.isLoaded
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadCourses: nextPage => dispatch(loadCourses(nextPage))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassBasedPaginationScroll);
