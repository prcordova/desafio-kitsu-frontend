import styled from "styled-components";

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 12;

  display: flex;
  justify-content: center;
  align-items: center;

  .body {
    margin-top: 100px;
    background: white;
    width: 890px;
    height: 507px;
    background: rgba(245, 243, 250, 0.9);

    border-radius: 8.59px;
    max-width: 660px;
    min-height: 360px;
    padding: 2.5rem;
    border-radius: 12px;
    text-align: justify;
    position: relative;

    b,
    p,
    span {
      display: flex;
      color: #000;
      overflow: hidden;
    }

    h1 {
      font-weight: 700;
      font-size: 30px;
      color: #000;
    }

    b {
      font-size: 1.5rem;
      font-weight: 500;
      margin-top: 1rem;
      margin-top: 2rem;
    }

    p {
      font-size: 1.2rem;
      span {
        font-weight: 600;
        justify-content: flex-end;
        flex: 1;
      }
    }

    button {
      position: absolute;
      right: 1rem;
      top: 1.2rem;
      background: transparent;
      border: 0;
      font-size: 0;
      color: var(--text);
      filter: 0.2s;
      svg {
        font-size: 28px;
      }
      &:hover {
        filter: brightness(0.8);
      }
    }
  }
`;
