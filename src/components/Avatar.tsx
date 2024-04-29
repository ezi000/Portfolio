import { Typography } from "@mui/material";
import MuiAvatar from "@mui/material/Avatar";
import styled, { keyframes } from "styled-components";

export default function Avatar() {
  return (
    <MarginForAvatar>
      <MuiAvatar
        alt="Image of me"
        sx={{ width: 250, height: 250 }}
        src="\src\assets\images\image-of-me.jpg"
      />
      <MyFullnameDiv>
        <RotationContainerTop>
          <StyledTypography variant="h3">{"<"}</StyledTypography>
        </RotationContainerTop>

        <StyledTypography variant="h2">Damian_Szklarczyk</StyledTypography>

        <RotationContainerBottom>
          <StyledTypography variant="h3">{"/>"}</StyledTypography>
        </RotationContainerBottom>
      </MyFullnameDiv>
    </MarginForAvatar>
  );
}

const MyFullnameDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  width: 100vw;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;

const MarginForAvatar = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  height: fit-content;
  width: fit-content;
  justify-content: center;
  flex-flow: column wrap;
`;

const rotationAnimationBottom = keyframes`
  0% {
    transform: rotate(10deg) translate(0, 10px);
  }
  50% {
    transform: rotate(-10deg) translate(0, -10px);
  }
  100% {
    transform: rotate(10deg) translate(0, 10px);
  }
`;
const rotationAnimationTop = keyframes`
  0% {
    transform: rotate(10deg) translate(0, -10px);
  }
  50% {
    transform: rotate(-10deg) translate(0, 10px);
  }
  100% {
    transform: rotate(10deg) translate(0,-10px);
  }
`;

const RotationContainerBottom = styled.div`
  display: inline-block;
  color: #f50057;
  animation: ${rotationAnimationBottom} 10s infinite;
`;
const RotationContainerTop = styled.div`
  display: inline-block;
  color: #f50057;
  animation: ${rotationAnimationTop} 10s infinite;
`;

const StyledTypography = styled(Typography)`
  && {
    &.MuiTypography-h3 {
      font-size: 4rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 2.5rem;
      }
    }
    &.MuiTypography-h2 {
      font-size: 2.5rem;
      font-weight: 400;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;
