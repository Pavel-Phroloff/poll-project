import styled from 'styled-components';

export const Layout = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  background-color: rgb(103, 58, 183);
`;

export const Content = styled.article`
  width: 770px;
  margin: 140px 0 0 0;
  max-height: calc(100% - 280px);
  background-color: white;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.1);
  overflow: auto;
`;
