import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 12px;
  background: ${(props) => props.theme.colors.tertiary};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0px 2px 15px 5px rgba(50, 50, 50, 0.2);
`;
