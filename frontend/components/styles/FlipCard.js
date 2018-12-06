import styled from "styled-components";

const Card = styled.div`
  margin: 1rem;
  perspective: 150rem;
  position: relative;
  height: 58rem;
  &:hover .front {
    transform: rotateY(-180deg);
  }
  &:hover .back {
    transform: rotateY(0);
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    border-radius: 3px;
    background-color: ${props => props.theme.white};
    box-shadow: 0 0 1.5rem rgba(126, 126, 126, 0.75);
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    &:hover .front {
      transform: rotateY(0deg);
    }
  }
`;

const CardFront = styled.div`
  height: 58rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 1.5rem rgba(126, 126, 126, 0.75);
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.black};
  font-weight: 400;
  h4 {
    font-size: 2.2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: right;
    color: ${props => props.theme.black};
    position: absolute;
    top: 6rem;
    right: 3rem;
    width: 75%;
  }
  span {
    border-radius: 3px;
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 216, 255, 0.85),
      rgba(255, 165, 0, 0.85)
    );
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
  }
`;

const PictureDiv = styled.div`
  background-size: cover;
  height: 30rem;
  background-blend-mode: screen;
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0 100%);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 216, 255, 0.85),
      rgba(255, 165, 0, 0.85)
    ),
    url(/static/img/working_pic.jpg);
`;

const FrontDesc = styled.div`
  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;
    li {
      text-align: center;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.lightgray};
      }
    }
  }
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    padding: 1rem 3rem;
  }
`;

const CardBack = styled.div`
  height: 58rem;
  transition: all 0.8s ease;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 1.5rem rgba(126, 126, 126, 0.75);
  transform: rotateY(180deg);
  background-image: linear-gradient(
    to right bottom,
    rgba(0, 216, 255, 0.85),
    rgba(255, 165, 0, 0.85)
  );
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    height: auto;
    position: relative;
    box-shadow: none;
    transform: rotateY(0);
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const BackDesc = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr min-content;
  align-items: start;
  justify-items: center;
  grid-gap: 2rem 0;
  @media only screen and (max-width: 900px), only screen and (hover: none) {
    position: relative;
    top: 0%;
    left: 0;
    transform: translate(0);
    width: 100%;
    padding: 7rem 4rem 4rem 4rem;
  }
`;

const ProjectInfo = styled.div`
  h4 {
    font-size: 2.2rem;
    font-weight: 600;
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.black};
    width: 100%;
  }
  span {
    border-radius: 3px;
    padding: 1rem 1.5rem;
    box-decoration-break: clone;
    background-image: linear-gradient(
      to right bottom,
      rgba(0, 216, 255, 0.85),
      rgba(255, 165, 0, 0.85)
    );
  }
  p {
    padding: 3rem;
    font-size: 1.8rem;
  }
  ul {
    list-style: none;
    width: 100%;
    margin: 0 auto;
    li {
      text-align: left;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 1rem;
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.lightgray};
      }
    }
  }
`;

const ProjectLink = styled.div`
  width: 80%;
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  transition: all 0.3s;
  .icon {
    width: 40%;
    transition: all 0.3s;
    transform: translateY(0px) scale(0.9);
    &:hover {
      transform: translateY(-5px) scale(1.04);
    }
  }
`;

export {
  Card,
  CardFront,
  PictureDiv,
  FrontDesc,
  CardBack,
  BackDesc,
  ProjectInfo,
  ProjectLink
};
