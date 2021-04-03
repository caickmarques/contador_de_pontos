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
  box-shadow: 0px -4px 17px 0px rgba(50, 50, 50, 0.2);
`;

export const AddPlayer = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 35px;
    border: 2px solid ${(props) => props.theme.colors.primary};
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
