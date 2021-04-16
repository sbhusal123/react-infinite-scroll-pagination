import axios from "axios";

import { LOAD_COURSES, LOAD_COURSES_SUCCESS, LOAD_COURSES_FAIL } from "./types";

export const loadCourses = (page = "1") => {
    return dispatch => {
        dispatch({ type: LOAD_COURSES });

        axios
            .get(
                "https://semesterone.com/api/courses/?course_type=undergraduate&university_slug=macquarie-university&page_size=20&page=" +
                    page
            )
            .then(result => {
                dispatch({
                    payload: result.data,
                    type: LOAD_COURSES_SUCCESS
                });
            })
            .catch(err => {
                dispatch({
                    payload: err,
                    type: LOAD_COURSES_FAIL
                });
            });
    };
};
