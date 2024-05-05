import styled from "styled-components";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <StyledNavBar>
          <Stack direction="row" spacing={2}>
            <Link
              to="#about"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="contained"> About</StyledButton>
            </Link>
            <Link
              to="#skills"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="contained"> Skills</StyledButton>
            </Link>

            <Link
              to="#projects"
              scroll={(el) =>
                el.scrollIntoView({ behavior: "smooth", block: "center" })
              }
            >
              <StyledButton variant="contained"> Projects</StyledButton>
            </Link>
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
        </StyledNavBar>
      </Nav>
    </>
  );
};

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0.5rem 3em 0.5rem 0;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 1;
  background-color: #1e1c1c;
`;

const StyledNavBar = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 1rem;
`;

const StyledButton = styled(Button)`
  && {
    &.MuiButton-colorPrimary {
      color: #747bff;
      border: 1px solid #747bff;
      background-color: #1e1c1c;
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
