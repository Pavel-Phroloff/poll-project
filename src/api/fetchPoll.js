import axios from 'axios';
import { notification } from 'antd';

import history from '../containers/App/history';

import pollActions from '../redux/modules/poll/actions';

const shuffleArray = array => {
  const newArray = array.map(item => item);

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * newArray.length);
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }

  return newArray;
};

const normilizePoll = poll => {
  const mappedPoll = poll.map((question, key) => {
    const { incorrect_answers: icorrectAnswers, ...rest } = question;
    return ({
      ...rest,
      id: `${key}`,
      variants: shuffleArray(icorrectAnswers.concat(rest.correct_answer)),
    });
  });
  return mappedPoll;
};

export default pollUrl => dispatch => {
  dispatch(pollActions.setPollUrl(pollUrl));

  dispatch(pollActions.getPollStart());
  axios.get(pollUrl)
    .then(res => {
      const data = normilizePoll(res.data.results);
      dispatch(pollActions.getPollSuccess(data));
      history.push('/questions');
    })
    .catch(() => {
      dispatch(pollActions.getPollFail());
      notification.error({
        message: 'Request Error',
        description: 'Please re-enter poll adress',
      });
    });
};
