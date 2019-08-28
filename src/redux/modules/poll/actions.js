import pollConstants from './constants';

const setPollUrl = (url) => ({
  type: pollConstants.SET_POLL_URL,
  payload: url,
});

const getPollStart = () => ({
  type: pollConstants.GET_POLL_START,
});

const getPollSuccess = (data) => ({
  type: pollConstants.GET_POLL_SUCCESS,
  payload: data,
});

const getPollFail = () => ({
  type: pollConstants.GET_POLL_FAIL,
});

const setResult = (answer) => ({
  type: pollConstants.SET_POLL_ANSWER,
});

export default {
  setPollUrl,
  getPollStart,
  getPollSuccess,
  getPollFail,
  setResult,
};
