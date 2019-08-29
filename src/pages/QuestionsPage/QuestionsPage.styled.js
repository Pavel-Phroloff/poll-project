import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
`;

export const QuestionText = styled.h2`
`;

export const CategoryTitle = styled.h3`
`;

export const DifficultyTitle = styled.h3`
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