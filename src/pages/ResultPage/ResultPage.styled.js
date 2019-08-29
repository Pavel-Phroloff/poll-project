import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;

export const QuestionText = styled.h3`
  color: ${p => p.incorrect ? 'red' : 'green'};
`;

export const DifficultyTitle = styled.h1`
  color: ${p => {
    let color = 'green';
    if (p.type === 'medium') {
      color = 'orange';
    }
    if (p.type === 'hard') {
      color = 'red';
    }
    return color;
  }};
`;

export const DifficultyBlockWrapper = styled.div`
  width: 100%;
`;

export const UserAnswer = styled.div`
  color: ${p => p.incorrect ? 'red' : 'green'};
  font-size: 14px; 
`;

export const CorrectAnswer = styled.div`
  color: green;
  font-size: 14px; 
  margin-left: 10px;
`;

export const QuestionWrapper = styled.div`
  padding: 10px;
  margin-bottom: 10px;
`;

export const AnswersWrapper = styled.div`
  display: flex;
`;
