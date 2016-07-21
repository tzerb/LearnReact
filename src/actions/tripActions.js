import * as types from './actionTypes';
import tripApi from '../api/mockTripApi';

export function createTrip(trip)
{
    return {type: types.CREATE_COURSE, trip};
}
export function loadTripSuccess(trips)
{
    return {type: types.LOAD_TRIPS_SUCCESS, trips};
}

export function loadTrips() {
    return function (dispatch){
        return tripApi.getAllTrips().then(trips => {
            dispatch(loadTripSuccess(trips));
        }).catch (error => {
            throw(error);
        });
    };
}