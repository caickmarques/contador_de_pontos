import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 15%;
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  color: ${(props) => props.theme.colors.primary};
  box-shadow: 1px 1px 10px 0px rgba(50, 50, 50, 0.3);

  > h3 {
  }

  > div {
    > button {
      background-color: transparent;
      font-size: 26px;
      color: ${(props) => props.theme.colors.primary};
      margin-right: 15px;
      border-radius: 50%;
    }
  }
`;
