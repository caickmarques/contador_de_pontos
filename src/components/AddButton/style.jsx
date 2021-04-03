import styled from 'styled-components';

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
