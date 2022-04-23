import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  .next-player {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .next-player span {
    font-size: 1.5rem;
    color: var(--main-color);
  }

  .reset {
    background-color: var(--main-color);
    color: #fff;
    border: 1px solid transparent;
    outline: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin-bottom: 3rem;
    border-radius: 0.5rem;
    transition: 0.3s;
  }

  .reset:hover {
    transform: scale(1.1);
    background-color: #fff;
    color: var(--main-color);
    border: 1px solid var(--main-color);
  }
`;
