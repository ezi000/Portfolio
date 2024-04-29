import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <Stack direction="row" spacing={2}>
          <StyledButton variant="outlined"> About</StyledButton>
          <Link to="#skills">
            <StyledButton variant="outlined"> Skills</StyledButton>
          </Link>
          <StyledButton variant="outlined"> Projects</StyledButton>
        </Stack>
        <StyledAnchor
          href="https://www.linkedin.com/in/damian-szklarczyk-424529251/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon sx={{ fontSize: 40 }} />
        </StyledAnchor>
        <StyledAnchor
          href="https://github.com/ezi000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon sx={{ fontSize: 40 }} />
        </StyledAnchor>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-end;
  width: 100%;
  margin: 2rem 3rem 0 0;
`;

const StyledButton = styled(Button)`
  && {
    &.MuiButton-colorPrimary {
      color: #747bff;
      border-color: #747bff;
    }
    @media (max-width: 768px) {
      width: fit-content;
      font-size: 0.7rem;
    }
  }
`;

const StyledAnchor = styled.a`
  display: flex;
  align-items: center;
`;
