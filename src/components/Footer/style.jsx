import styled from 'styled-components';

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  padding: 12px;
  background: linear-gradient(
    137deg,
    rgba(195, 34, 153, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const AddPlayer = styled.button`
  background-color: transparent;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 35px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    width: 40%;
    padding: 7px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > small {
    font-size: 18px;
  }
`;

export const Play = styled(AddPlayer)`
  > div {
    font-size: 28px;
    width: 100%;
  }
  > small {
    font-size: 15px;
  }
`;

export const Clear = styled(AddPlayer)`
  > div {
    font-size: 28px;
    width: 100%;
  }
  > small {
    font-size: 15px;
  }
`;
