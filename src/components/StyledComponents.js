import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  margin: 0.5rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2rem;
  border: 3px solid rgba(255, 255, 255, 0.4);
  color: white;
  box-shadow: 0px 0px 18px 8px rgba(255, 255, 255, 0.25) inset,
    0px 0px 2px 2px rgba(255, 255, 255, 0.25) inset;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 3px solid rgba(255, 255, 255, 0.65);
    box-shadow: 0px 0px 18px 8px rgba(255, 255, 255, 0.5) inset,
      0px 0px 2px 2px rgba(255, 255, 255, 0.5) inset;
  }
  p {
    font-size: 2rem;
    margin-bottom: 0;
  }
  .c-body {
    display: flex;
    justify-content: space-around;

    div {
      display: flex;
      flex-direction: column;
      margin: auto 0.25rem;
      text-align: center;
      font-size: 1.5rem;
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
  background-color: #b54747;
  padding: 0 0.5rem;
  margin: 0 auto;
  border: none;
  text-decoration: none;
  border-radius: 0.2rem;
  margin: 0.5rem 1rem 0 auto;
  &:hover {
    background-color: #bf1111;
  }
  &:active,
  selected,
  focus {
    outline: none;
    border: none;
  }
`;

export const StyledNav = styled.nav`
  background-color: gray;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.05rem 2rem;
  a {
    margin: 0.5rem auto;
    color: white;
    img {
      width: 3rem;
      height: 3rem;
    }
  }
  form {
    text-align: center;
    margin: 0.5rem auto;
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  color: white;
  background-color: gray;
  margin-top: auto;
  text-align: center;
  a {
    display: block;
    padding: 0.5rem 1rem;
    color: white;
  }
`;
