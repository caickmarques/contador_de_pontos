import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(
    137deg,
    rgba(195, 34, 153, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  height: 15%;
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  color: #ffffff;
  box-shadow: 3px 3px 5px 0px rgba(50, 50, 50, 0.5);

  > h3 {
  }

  > div {
    > button {
      background-color: transparent;
      font-size: 26px;
      color: #ffffff;
      margin-right: 15px;
      border-radius: 50%;
    }
  }
`;
