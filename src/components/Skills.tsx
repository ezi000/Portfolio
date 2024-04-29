import styled from "styled-components";
import {
  IconBxlCss3,
  IconBxlGit,
  IconBxlHtml5,
  IconBxlJavascript,
  IconBxlNodejs,
  IconBxlReact,
  IconBxlRedux,
  IconConsoleSql,
  IconLanguageCsharp,
  IconTypescript,
} from "../assets/images/LogosSVG";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import { Typography } from "@mui/material";

export const Skills = () => {
  return (
    <>
      <StyledHr textAlign="left">
        <Typography variant="h4">My Skills</Typography>
      </StyledHr>
      <StyledContainer id="skills">
        {SkillsArray.map((skill) => {
          return (
            <Paper
              elevation={5}
              sx={{
                bgcolor: `#adadad1c`,
                padding: "0.5rem",
                color: `#e6e5e5`,
              }}
            >
              <StyledSkill id={skill.id}>
                {skill.logo}
                {skill.name}
                <Rating
                  name="read-only"
                  value={Number(skill.level)}
                  precision={0.5}
                  readOnly
                />
              </StyledSkill>
            </Paper>
          );
        })}
      </StyledContainer>
    </>
  );
};

const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  width: 50vw;
  margin: 2em 0 2em 0;
  @media (max-width: 768px) {
    font-size: 1rem;
    gap: 1rem;
    width: 70vw;
  }
`;

const StyledHr = styled(Divider)`
  && {
    width: 70vw;
    margin: 4rem 0 1rem 0;
    font-size: 2rem;
    color: #e6e5e5;
  }
`;

const SkillsArray = [
  {
    id: "1",
    name: "HTML",
    level: "3.5",
    logo: <IconBxlHtml5 />,
  },
  {
    id: "2",
    name: "CSS",
    level: "3.5",
    logo: <IconBxlCss3 />,
  },
  {
    id: "3",
    name: "JavaScript",
    level: "3",
    logo: <IconBxlJavascript />,
  },
  {
    id: "4",
    name: "React",
    level: "3",
    logo: <IconBxlReact />,
  },
  {
    id: "5",
    name: "TypeScript",
    level: "2.5",
    logo: <IconTypescript />,
  },
  {
    id: "6",
    name: "Redux",
    level: "2",
    logo: <IconBxlRedux />,
  },
  {
    id: "7",
    name: "SQL",
    level: "3",
    logo: <IconConsoleSql />,
  },
  {
    id: "8",
    name: "Node.js",
    level: "2",
    logo: <IconBxlNodejs />,
  },

  {
    id: "9",
    name: "Git",
    level: "2",
    logo: <IconBxlGit />,
  },
  {
    id: "10",
    name: "C#",
    level: "1.5",
    logo: <IconLanguageCsharp />,
  },
];
