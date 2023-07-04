import { styled } from "styled-components";
import px2vw from "@/utils/size";

interface ContainerProps {
  type: boolean;
}

export const Container = styled.div`
  overflow: hidden;
  h1 {
    background-color: red;
  }
`;

export const Main = styled.main`
  position: relative;
`;

export const VideoSection = styled.section`
  height: ${px2vw(1027, 1244)};
  padding-bottom: 6.47%;
  @media (min-width: 768px) {
    padding-bottom: 7.11%;
  }

  .line1 {
    overflow: hidden;
    width: 100%;
    background-color: ${(props) => props.theme.color.primary_80};
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    img {
      width: ${px2vw(1244, 1244)};
      height: auto;
    }
  }

  .form-container {
    margin-top: ${px2vw(180, 1244)};
  }
`;

export const ResponsiveIframe = styled.div`
  position: relative;
  top: ${px2vw(117, 1244)};
  height: 0;
  padding-top: 47.3%;
  margin: 0 auto ${px2vw(116, 1244)} auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    width: ${px2vw(880)};
    margin: 0 auto;
    /* padding-top: ${px2vw(578, 1244)};  */
    iframe {
      height: ${px2vw(560)};
    }
  }
`;

export const Section2 = styled.section`
  height: ${px2vw(700, 1244)};
  .line2 {
    overflow: hidden;
    width: 100%;
    background-color: ${(props) => props.theme.color.blue_100};
    position: absolute;
    top: ${px2vw(1028, 1244)};
    z-index: -1;
    img {
      width: ${px2vw(750, 1244)};
      margin-left: ${px2vw(243, 1244)};
      height: auto;
    }
  }
  @media (min-width: 768px) {
    padding-bottom: ${px2vw(141, 1244.3)};
  }

  .section-2-content {
    padding: ${px2vw(111, 1244)} ${px2vw(111, 1244)} 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sectionImg {
    width: ${px2vw(333, 1244)};
    height: ${px2vw(444, 1244)};
    object-fit: cover;
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);
  }
`;

export const TextWithImg = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2vw(43, 1244)};
  align-items: flex-end;

  .title {
    position: relative;
    background-color: ${(props) => props.theme.color.primary_100};
    width: ${px2vw(360, 1244)};
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);

    h2 {
      font-size: ${px2vw(33, 1244)};
      font-weight: bold;
      text-align: center;
      padding: ${px2vw(14, 1244)} 0 ${px2vw(17, 1244)} 0;
    }
  }

  .content {
    position: relative;
    width: ${px2vw(577, 1244)};
    display: grid;
    grid-template-areas:
      "image title"
      "image text";

    color: white;
    background-color: ${(props) => props.theme.color.secondary_60};
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);

    h3 {
      font-weight: bold;
      grid-area: title;
      margin: ${px2vw(32, 1244)} 0 ${px2vw(21, 1244)} ${px2vw(20, 1244)};
      font-size: ${px2vw(33, 1244)};
    }
    img {
      grid-area: image;
      width: ${px2vw(111, 1244)};
      height: ${px2vw(138, 1244)};
      align-self: center;
      margin: 0 ${px2vw(40, 1244)} 0 ${px2vw(55, 1244)};
    }
    .text {
      text-align: end;
      margin-right: ${px2vw(50, 1244)};
      strong {
        margin-top: ${px2vw(21, 1244)};
      }
      p {
        font-weight: normal;
        font-size: ${px2vw(14, 1244)};
        margin-top: ${px2vw(24, 1244)};
        &:last-child {
          margin-bottom: ${px2vw(43, 1244)};
        }
      }
    }
  }
`;

export const Section3 = styled.section`
  height: ${px2vw(500, 1244)};
  .line3 {
    overflow: hidden;
    width: 100%;
    background-color: ${(props) => props.theme.color.primary_80};
    position: absolute;
    top: ${px2vw(1724, 1244)};
    z-index: -1;
    img {
      width: ${px2vw(1244, 1244)};
      height: auto;
    }
  }
  @media (min-width: 768px) {
    padding-bottom: ${px2vw(67, 1244)};
  }

  .title {
    position: relative;
    display: flex;
    margin: auto;
    width: ${px2vw(256, 1244)};
    justify-content: center;
    margin-bottom: ${px2vw(55, 1244)};
    background-color: ${(props) => props.theme.color.blue_100};
    h2 {
      color: white;
      font-size: 2.5rem;
      font-weight: bold;
      padding: ${px2vw(16, 1244)} ${px2vw(72, 1244)};
    }
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  margin: ${px2vw(-55, 1244)} 0 ${px2vw(54, 1244)};
  /* position: relative; */
  /* bottom: ${px2vw(55, 1244)}; */

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${px2vw(20)};

    width: ${px2vw(255)};
    height: ${px2vw(110, 1244)};
    background-color: ${(props) => props.theme.color.secondary_20};
    border: 1px solid black;
    box-shadow: inset -3px 0 5px rgba(0, 0, 0, 0.4);

    text-decoration: none;
    color: black;
    font-size: 2.1rem;
    font-weight: bold;
    img {
      width: ${px2vw(55, 1244)};
      height: auto;
    }
  }
`;

export const Section4 = styled.section`
  height: ${px2vw(696, 1244)};
  .line4 {
    overflow: hidden;
    width: 100%;
    background-color: white;
    position: absolute;
    top: ${px2vw(2222, 1244)};
    z-index: -1;
    img {
      width: ${px2vw(1244, 1244)};
      height: auto;
    }
  }
  .section-4-content {
    padding: ${px2vw(111, 1244)} ${px2vw(111, 1244)} 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .sectionImg {
    width: ${px2vw(333, 1244)};
    height: ${px2vw(444, 1244)};
    object-fit: cover;
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);
  }
`;

export const TextWithImg2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${px2vw(43, 1244)};
  align-items: flex-start;

  .title {
    position: relative;
    background-color: ${(props) => props.theme.color.blue_100};
    color: white;
    width: ${px2vw(360, 1244)};
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);

    h2 {
      font-size: 2.5rem;
      font-weight: bold;
      text-align: center;
      padding: ${px2vw(14, 1244)} 0 ${px2vw(17, 1244)} 0;
    }
  }

  .content {
    position: relative;
    width: ${px2vw(577, 1244)};
    display: grid;
    grid-template-areas:
      "title image"
      "text image";

    color: white;
    background-color: ${(props) => props.theme.color.secondary_60};
    box-shadow: 6px 6px 3px rgba(0, 0, 0, 0.4);

    h3 {
      font-weight: bold;
      grid-area: title;
      margin: ${px2vw(32, 1244)} ${px2vw(40, 1244)} ${px2vw(21, 1244)} 0;
      font-size: 2rem;
      text-align: right;
    }
    img {
      grid-area: image;
      width: ${px2vw(111, 1244)};
      height: ${px2vw(138, 1244)};
      align-self: center;
      margin: 0 ${px2vw(55, 1244)} 0 ${px2vw(55, 1244)};
    }
    .text {
      margin-left: ${px2vw(50, 1244)};
      strong {
        margin-top: ${px2vw(21, 1244)};
      }
      p {
        font-weight: normal;
        margin-top: ${px2vw(24, 1244)};
        &:last-child {
          margin-bottom: ${px2vw(43, 1244)};
        }
      }
    }
  }
`;
