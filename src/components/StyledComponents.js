import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  margin: 0.5rem;
  padding: 1rem;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(230, 230, 230, 0.2) 75%,
    rgba(191, 191, 191, 0.4) 100%
  );
  border-radius: 1rem;
  color: white;
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.25) inset,
    0px 0px 2px 2px rgba(255, 255, 255, 0.2) inset;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 15px 10px rgba(255, 255, 255, 0.25) inset,
      0px 0px 2px 2px rgba(255, 255, 255, 0.4) inset;
  }
  p {
    font-size: 2rem;
    margin-bottom: 0;
  }
  .c-body {
    font-weight: 200;
    font-style: italic;
    display: flex;
    justify-content: space-around;
    font-size: 1.1rem;
    div {
      display: flex;
      flex-direction: column;
      margin: auto 1rem;
      text-align: center;
      span {
        font-size: 1.5rem;
        font-weight: 800;
        font-style: normal;
      }
    }
  }
`;
export const StyledWeatherPage = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  margin: 0.5rem auto;
  padding: 1rem 2rem;
  border-radius: 1rem;
  color: white;
  align-items: center;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(230, 230, 230, 0.2) 75%,
    rgba(191, 191, 191, 0.4) 100%
  );
  box-shadow: 0px 0px 10px 5px rgba(255, 255, 255, 0.25) inset,
    0px 0px 2px 2px rgba(255, 255, 255, 0.2) inset;
  a {
    text-decoration: none;
    padding-top: 1rem;
    font-size: 2rem;
    transition: transform 0.5s ease-in-out, filter 0.5s ease-in-out;
    transform: perspective(2em);
    &:hover {
      transform: perspective(2em) rotateY(-10deg);
      filter: brightness(1.2);
    }
  }
`;

export const StyledCards = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BtnClose = styled.button`
  color: white;
  margin: 0 auto;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 0.8rem;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: rotate(45deg);
    cursor: pointer;
  }
  &:active,
  selected,
  focus {
    outline: none;
    border: none;
  }
`;

export const StyledNav = styled.nav`
  background-color: transparent;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  a {
    font-weight: 800;
    font-size: 2rem;
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
    color: white;
    text-decoration: none;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2),
      -1px -1px 1px rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    transition: text-shadow 0.2s ease-in-out;
    &:hover {
      text-shadow: 3px 3px 4px rgba(0, 0, 0, 0.5),
        -1px -1px 1px rgba(255, 255, 255, 0.8);
    }
  }
  form {
    text-align: center;
    margin: 0.5rem auto;
  }
`;

export const StyledSearch = styled.form`
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: 2px solid rgba(255, 255, 255, 0.5);
  &:hover {
    box-shadow: 0px 1px 5px 5px rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
  &:active {
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
  input {
    color: white;
    font-size: 1rem;
    background-color: transparent;
    padding: 0.25rem 0.5rem;
    height: 100%;
    border: none;
    &:focus {
      outline: none;
    }
  }
  .input {
    transition: background-color 0.1s ease-in-out;
    border-radius: 0.5rem;
    &::placeholder {
      color: white;
      opacity: 0.5;
    }
    &:focus {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
  .send {
    border-radius: 0.5rem;

    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 2.5rem;
  color: black;
  background-color: white;
  margin-top: auto;
  text-align: center;
  border-radius: 2rem 2rem 0 0;
  box-shadow: 0px 0px 15px 8px rgba(0, 0, 0, 0.3);
  transition: height 0.2s ease-in-out;
  &:hover {
    height: 3rem;
  }
  a {
    font-weight: 800;
    padding: auto 1rem;
    color: rgb(80, 80, 80);
    text-decoration: none;
    margin: auto;
    border-radius: 1rem;
    padding: 0.25rem .5rem;
    &:hover {
      text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.5),
        -1px -1px 1px rgba(255, 255, 255, 0.8);
      border: 2px solid rgba(100, 100, 100, 0.5);
    }
  }
`;
