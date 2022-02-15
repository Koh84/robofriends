export const CHANGE_SEARCH_FIELD = 'CHANGE_SEARCH_FIELD';

//this will be a promise, promise will have 3 states
//pending - which is the very first time we send the request, waiting for the promise to return
//success
//fail
export const REQUEST_ROBOTS_PENDING = 'REQUEST_ROBOTS_PENDING';
export const REQUEST_ROBOTS_SUCCESS = 'REQUEST_ROBOTS_SUCCESS';
export const REQUEST_ROBOTS_FAILED = 'REQUEST_ROBOTS_FAILED';