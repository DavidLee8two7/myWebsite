import styled from "styled-components";

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 2rem;
  a,
  button {
    text-shadow: 0.5px 0.5px 0.5px ${props => props.theme.orange};
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: ${props => props.theme.black};
    font-weight: 800;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:after {
      height: 2px;
      background: ${props => props.theme.lightBlue};
      content: "";
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    border-top: 1.5px solid ${props => props.theme.orange};
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;

export default NavStyles;
