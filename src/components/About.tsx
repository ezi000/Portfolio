import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

export const About = () => {
  return (
    <>
      <StyledHr textAlign="left">
        <Typography variant="h4">About</Typography>
      </StyledHr>
      <StyledContainer id="about">
        <Typography variant="body1">
          Hi there! My name is Damian and I am a student of{" "}
          <span style={{ color: "#f50057" }}>IT Applications in Business</span>{" "}
          at the University of Gdańsk. I have been programming for a few years
          now and I am currently focused on learning more about{" "}
          <span style={{ color: "#f50057" }}>TypeScript</span>,{" "}
          <span style={{ color: "#f50057" }}>React</span>, and{" "}
          <span style={{ color: "#f50057" }}>Redux</span>. I am a very
          hard-working person who is always trying to improve my skills.{" "}
          <span style={{ color: "#4fad38" }}>
            Currently, I am looking for an internship as a front-end developer.
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
