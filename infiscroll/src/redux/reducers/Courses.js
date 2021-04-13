import {
    LOAD_COURSES,
    LOAD_COURSES_SUCCESS,
    LOAD_COURSES_FAIL
} from "../actions/types";

import _ from "lodash";

const initialState = {
    courses: [],
    paginatedCourses: [],
    isLoading: false,
    isLoaded: false,
    nextUrl: ""
};

const coursesStore = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_COURSES:
            return {
                ...state,
                courses: [],
                isLoaded: false,
                isLoading: true,
                nextUrl: ""
            };
        case LOAD_COURSES_SUCCESS:
            const newPaginatedCourse = _.union(
                state.paginatedCourses,
                action.payload.results
            );
            return {
                ...state,
                courses: [...action.payload.results],
                isLoading: false,
                // paginatedCourses: newPaginatedCourse,
                paginatedCourses: _.uniqBy(newPaginatedCourse, "id"),
                isLoaded: true,
                nextUrl: action.payload.next
            };
        case LOAD_COURSES_FAIL:
            return {
                ...state,
                isLoaded: true,
                isLoading: false,
                coures: []
            };
        default:
            return state;
    }
};

export default coursesStore;
