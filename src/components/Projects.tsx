import styled from "styled-components";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { IconFolder } from "../assets/images/LogosSVG";
export const Projects = () => {
  return (
    <>
      <StyledHr textAlign="left">
        <Typography variant="h4">My Projects</Typography>
      </StyledHr>
      <StyledContainer id="projects">
        {ProjectsArray.map((project) => {
          return (
            <StyledCard>
              <CardContent>
                <StyledSpan>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <StyledAnchor
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconFolder />
                  </StyledAnchor>
                </StyledSpan>
                <StyledTypography variant="body2" color="text.secondary">
                  {project.description}
                </StyledTypography>
              </CardContent>
            </StyledCard>
          );
        })}
      </StyledContainer>
    </>
  );
};

const StyledSpan = styled.span`
  display: flex;
  justify-content: space-between;
`;
const StyledAnchor = styled.a`
  display: flex;
  justify-content: flex-end;
`;
const StyledTypography = styled(Typography)`
  && {
    color: #b7b2b2;
  }
`;
const StyledCard = styled(Card)`
  && {
    width: 15rem;
    height: 15rem;
    background-color: #adadad1c;
    color: #e6e5e5;
    padding: "0.1rem";
    display: flex;
    justify-content: center;
    align-items: space-between;
    border-radius: 1rem;
    @media (max-width: 768px) {
      width: 12rem;
      height: 13rem;
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 70vw;
  margin: 2em 0 2em 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 1rem;
    width: 80vw;
  }
`;

const StyledHr = styled(Divider)`
  && {
    width: 70vw;
    margin: 4rem 0 1rem 0;
    font-size: 2rem;
    color: #ffffff;
  }
`;

type ProjectsArrayType = {
  id: string;
  name: string;
  description: string;
  link: string;
};

const ProjectsArray: ProjectsArrayType[] = [
  {
    id: "1",
    name: "Redux-TS",
    description:
      "My first steps with Redux and TypeScript. Simple counter and Blog where users can add posts. Made with React, Redux and TypeScript.",
    link: "https://github.com/ezi000/Redux-TS",
  },
  {
    id: "2",
    name: "Filmovo",
    description:
      "Web app for searching movies and series. Made with React and JavaScript.",
    link: "https://github.com/ezi000/Filmovo",
  },
  {
    id: "3",
    name: "Etch-a-Sketch",
    description:
      "Etch A Sketch with changeable grid size and rainbow bursh, made in JavaScript.",
    link: "https://github.com/ezi000/Etch-a-Sketch",
  },
  {
    id: "4",
    name: "Calculator",
    description: "Calculator made in JavaScript.",
    link: "https://github.com/ezi000/Calculator",
  },
  {
    id: "5",
    name: "Rock-Paper-Scissors",
    description:
      "Rock, Paper, Scissors game made in JavaScript, with authorization and MongoDB.",
    link: "https://github.com/ezi000/rock-paper-scissors.",
  },
];
