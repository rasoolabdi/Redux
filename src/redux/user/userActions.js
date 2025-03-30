import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

function fetchUsersRequest() {
    return {
        type: FETCH_USERS_REQUEST
    }
};

function fetchUsersSuccess(users) {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};

function fetchUsersFailure(error) {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
};

export function fetchUsers() {
    return async (dispatch) => {
        // dispatch({ type: FETCH_USERS_REQUEST })
        dispatch(fetchUsersRequest());
        await axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            // dispatch({ type: FETCH_USERS_SUCCESS , payload: res.data})
            dispatch(fetchUsersSuccess(res.data))
            console.log("res" , res.data)
        })
        .catch((error) => 
            // dispatch({ type: FETCH_USERS_FAILURE , payload: error.response.data.message ?? error.message})
            dispatch(fetchUsersFailure(error.message))
        )
    }
};
