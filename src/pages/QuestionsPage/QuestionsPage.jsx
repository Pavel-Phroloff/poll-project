import React from 'react';
import Pt from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Radio from '../../components/ui/Radio/Radio';
import Checkbox from '../../components/ui/Checkbox/Checkbox';
import Button from '../../components/ui/Button/Button';

import history from '../../containers/App/history';

import { Content, CategoryTitle, QuestionText, DifficultyTitle } from './QuestionsPage.styled';

import pollActions from '../../redux/modules/poll/actions';

class QuestionsPage extends React.Component {
  constructor(props) {
    super(props);

    const { pollData } = props;
    const currentQuestion = pollData && pollData.find(item => item.id === '0');

    this.state = {
      checkboxResult: [],
      radioResult: '',
      currentQuestion,
    };
  }

  handleRadioChange = (e) => {
    const { name } = e.target;

    this.setState({
      radioResult: name,
    });
  };

  handleCheckboxChange = (e) => {
    const { checkboxResult } = this.state;
    const { name: value } = e.target;

    if (checkboxResult.includes(value)) {
      this.setState({
        checkboxResult: checkboxResult.filter(item => item !== value),
      });
    } else {
      this.setState({
        checkboxResult: checkboxResult.concat(value),
      });
    }
  };

  handleSubmit = () => {
    const { currentQuestion, checkboxResult, radioResult } = this.state;
    const { setAnswer, pollData } = this.props;

    const { id } = currentQuestion;
    const isLastQuestion = +id === pollData.length - 1;

    setAnswer({
      id,
      correct: currentQuestion.correct_answer,
      difficulty: currentQuestion.difficulty,
      question: currentQuestion.question,
      result: currentQuestion.type === 'checkbox'
        ? checkboxResult
        : radioResult,
    });

    if (isLastQuestion) {
      history.push('/results');
    } else {
      const newId = `${+id + 1}`;
      const nextQuestion = pollData.find(item => item.id === newId);
      this.setState({
        checkboxResult: [],
        radioResult: '',
        currentQuestion: nextQuestion,
      });
    }
  }

  render() {
    const { pollData } = this.props;
    const { radioResult, checkboxResult, currentQuestion } = this.state;

    const isSubmitDisabled = !radioResult && !checkboxResult.length;

    if (!currentQuestion) {
      return <Redirect to='/' />;
    }

    const isLastQuestion = currentQuestion.id === pollData.length - 1;
    const questionId = +currentQuestion.id + 1;
    return (<React.Fragment>
      <Header title={`Question №${questionId}`} />
      <Content>
        <QuestionText>
          {currentQuestion.question}
        </QuestionText>
        <CategoryTitle>
          Category: {currentQuestion.category}
        </CategoryTitle>
        <DifficultyTitle type={currentQuestion.difficulty}>
          Difficulty: {currentQuestion.difficulty}
        </DifficultyTitle>
        {
          currentQuestion.type === 'checkbox'
            ? (
              <Checkbox
                options={currentQuestion.variants}
                checked={checkboxResult}
                onChange={this.handleCheckboxChange}
              />
            )
            : (
              <Radio
                options={currentQuestion.variants}
                checked={radioResult}
                onChange={this.handleRadioChange}
              />
            )
        }
        <Button
          onClick={this.handleSubmit}
          disabled={isSubmitDisabled}
        >
          {
            !isLastQuestion
              ? 'Next question'
              : 'Show results'
          }
        </Button>
      </Content>
    </React.Fragment>);
  }
}

QuestionsPage.propTypes = {
  pollData: Pt.array.isRequired,
  setAnswer: Pt.func.isRequired,
};

const mapStateToProps = state => ({
  pollData: state.poll.pollData,
});

const mapDispatchToProps = {
  setAnswer: pollActions.setPollAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage);
