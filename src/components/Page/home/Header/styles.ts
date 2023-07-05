import px2vw from "@/utils/size";
import { styled } from "styled-components";

export const Header = styled.header`
  background-color: ${(props) => props.theme.color.secondary_60};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${px2vw(16, 1244)} ${px2vw(110, 1244)} ${px2vw(10, 1244)};
  box-shadow: 0 ${px2vw(6)} ${px2vw(6)} rgba(0, 0, 0, 0.3);

  img {
    width: ${px2vw(150, 1244)};
    height: auto;
  }
  @media (min-width: 768px) {
    img {
      width: ${px2vw(80, 1244)};
    }
  }

  nav {
    display: flex;
    align-items: center;
    gap: ${px2vw(70, 1244)};
    a {
      font-size: 1.5rem;
      font-weight: bold;
      text-decoration: none;
      color: white;

      &:last-child {
        background-color: ${(props) => props.theme.color.primary_100};
        color: #292336;
        padding: ${px2vw(14, 1244)} ${px2vw(11, 1244)};
        &:hover {
          scale: 1.03;
        }
        &:active {
          scale: 0.97;
        }
      }
    }

    @media(min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;
