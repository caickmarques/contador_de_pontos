import styled from 'styled-components';

export const Container = styled.div`
  height: 80%;
  padding: 30px 15px 15px 15px;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 40px 40px 0 0;
  box-shadow: 0px -4px 17px 0px rgba(50, 50, 50, 0.2);
`;
