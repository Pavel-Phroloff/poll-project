import React from 'react';
import Pt from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _ from 'lodash';

import Header from '../../components/Header/Header';
import Button from '../../components/ui/Button/Button';

import history from '../../containers/App/history';

import {
  Content,
  DifficultyBlockWrapper,
  DifficultyTitle,
  QuestionText,
  QuestionWrapper,
  AnswersWrapper,
  UserAnswer,
  CorrectAnswer,
} from './ResultPage.styled';

const difficultyTypes = [
  'easy',
  'medium',
  'hard',
];

class ResultPage extends React.Component {
  handleSubmit = () => {
    history.push('/');
  }

  renderResultsByDifficulty = (difficultyType) => {
    const { pollResult } = this.props;

    const filteredResults = pollResult.filter(item => item.difficulty === difficultyType);

    return filteredResults.length
      ? (
        <DifficultyBlockWrapper key={difficultyType}>
          <DifficultyTitle type={difficultyType}>
            Difficulty: {difficultyType}
          </DifficultyTitle>
          {
            filteredResults.map(item => {
              let inCorrect = false;
              if (item.type === 'checkbox') {
                inCorrect = item.result !== item.correct;
              } else {
                inCorrect = _.isEqual(_.sortBy(item.result), _.sortBy(item.correct));
              }
              return (
                <QuestionWrapper key={item.id}>
                  <QuestionText incorrect={inCorrect}>
                    {item.question}
                  </QuestionText>
                  <AnswersWrapper>
                    <UserAnswer incorrect={inCorrect}>
                      {item.result}
                    </UserAnswer>
                    {
                      inCorrect
                      && (
                        <CorrectAnswer>
                          {item.correct}
                        </CorrectAnswer>
                      )
                    }
                  </AnswersWrapper>
                </QuestionWrapper>
              );
            })
          }
        </DifficultyBlockWrapper>
      )
      : null;
  }

  render() {
    const { pollResult } = this.props;

    if (!pollResult.length) {
      return <Redirect to='/' />;
    }

    return (<React.Fragment>
      <Header title='Results' />
      <Content>
        {
          difficultyTypes.map(item => this.renderResultsByDifficulty(item))
        }
        <Button
          onClick={this.handleSubmit}
        >
          Take another poll
        </Button>
      </Content>
    </React.Fragment>);
  }
}

ResultPage.propTypes = {
  pollData: Pt.array.isRequired,
  pollResult: Pt.array.isRequired,
};

const mapStateToProps = state => ({
  pollData: state.poll.pollData,
  pollResult: state.poll.pollResult,
});

export default connect(mapStateToProps)(ResultPage);
