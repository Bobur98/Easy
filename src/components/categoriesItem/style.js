import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}
`;
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.p`
  color: white;
  margin-bottom: 20px;
  font-weight: 600;
`;
export const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  cursor: pointer;
  color: grey;
  font-weight: 600;
`;
