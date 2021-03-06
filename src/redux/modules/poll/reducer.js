import pollConstants from './constants';

const initialState = {
  pollUrl: '',
  fetching: false,
  pollData: [],
  pollResult: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case pollConstants.SET_POLL_URL:
      return {
        ...state,
        pollUrl: action.payload
      };
    case pollConstants.GET_POLL_START:
      return {
        ...state,
        fetching: true
      };
    case pollConstants.GET_POLL_SUCCESS:
      return {
        ...state,
        pollData: action.payload,
        fetching: false
      };
    case pollConstants.GET_POLL_FAIL:
      return {
        ...state,
        fetching: false,
        pollUrl: ''
      };
    case pollConstants.SET_POLL_ANSWER:
      return {
        ...state,
        pollResult: state.pollResult.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
