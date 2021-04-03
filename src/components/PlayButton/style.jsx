import styled from 'styled-components';

export const Play = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > div {
    font-size: 30px;
    border: 2px solid ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    width: auto;
    padding: 7px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  > small {
    font-size: 15px;
  }
`;
