import styled from "styled-components";
import { Link } from "react-router-dom";
import { Field } from "formik";

export const GlassEffectUpperPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
  font-family: cursive;
  font-style: italic;
  transform: scale(1, 1.2);
  color: #ffffff;
  margin: 25px;
  background-color: black;
  border-radius: 50%;
  align-self: center;
  padding: 15px;
  cursor: pointer;
`;

export const Options = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: 600;
  font-family: cursive;
  letter-spacing: 0.5px;
  transform: scale(1, 1.1);
  margin-right: 20px;
  color: #ffffff;
`;

export const TotalGlassContainer = styled.div`
  margin-right: 50px;
  width: ${(props) => (props.reg ? "45%" : "35%")};
  margin-top: ${(props) => (props.reg ? "3%" : "10%")};
`;

export const GlassEffect = styled.div`
  width: 100%;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin-right: 10%;
  border-radius: 12px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
`;

export const SignInHead = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  font-family: cursive;
  letter-spacing: 0.8px;
  transform: scale(1, 1.2);
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: cursive;
  font-style: italic;
  color: #ffffff;
`;

export const Linked = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  background-color: #088f8f;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  border: none;
  &:hover {
    background-color: #5f9ea0;
    font-weight: 600;
  }
`;

export const Labels = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: #00688b;
`;

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(130deg, #4a148c, black, red);
  height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;
