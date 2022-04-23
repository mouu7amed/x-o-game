import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .square {
    background-color: var(--main-color);
    width: 5rem;
    height: 5rem;
    border-radius: 0.8rem;
    cursor: pointer;
    transition: 0.3s;
    outline: none;
    border: none;
    color: #fff;
    font-size: 2rem;
    font-weight: bold;
  }

  .square:hover {
    transform: scale(1.03);
  }
`;
