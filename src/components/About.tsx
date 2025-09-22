import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const About = () => {
  return (
    <>
      <StyledHr textAlign="left">
        <Typography variant="h4">About Me</Typography>
      </StyledHr>
      <StyledContainer id="about">
        <Typography variant="body1">
          Hi there! My name is Damian and I am a graduate of{" "}
          <span style={{ color: "#f50057" }}>IT Applications in Business</span>{" "}
          at the University of Gdańsk. I have been programming for a few years
          now and have recently focused on learning more about{" "}
          <span style={{ color: "#f50057" }}>web development</span>. I am a very
          hard-working person who is always trying to improve my skills.{" "}
          <span style={{ color: "#4fad38" }}>
            Currently, I am looking for a job as a front-end/fullstack
            developer.
          </span>
        </Typography>
      </StyledContainer>
    </>
  );
};

const StyledHr = styled(Divider)`
  && {
    width: 70vw;
    margin: 4rem 0 1rem 0;
    font-size: 2rem;
    color: #ffffff;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  width: 40vw;
`;
