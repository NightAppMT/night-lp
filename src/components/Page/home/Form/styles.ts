import px2vw from "@/utils/size";
import { styled } from "styled-components";

export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: ${px2vw(64, 1244)};
  padding: ${px2vw(46, 1244)} ${px2vw(30, 1244)};
  background-color: ${(props) => props.theme.color.secondary_60};
  box-shadow: ${px2vw(10)} ${px2vw(10)} 2px rgba(0, 0, 0, 0.4);

  .label-and-input {
    display: flex;
    flex-direction: column;

    label {
      font-size: 1.1rem;
      color: white;
    }
    input {
      font-size: 1.3rem;
      width: ${px2vw(154, 1244)};
      border: 0;
      box-shadow: ${px2vw(5)} ${px2vw(5)} 5px rgba(0, 0, 0, 0.6);
      &:focus {
        outline: 0;
      }
    }
  }
  margin: 0 10vw 0;
  @media (min-width: 768px) {
    margin: 0 15vw 0;
  }

  .button-container {
    align-self: flex-end;
    button {
      font-size: ${px2vw(24, 1244)};
      font-weight: bold;
      color: white;
      background-color: ${(props) => props.theme.color.blue_100};
      padding: ${px2vw(16, 1244)} ${px2vw(40, 1244)};
      border: 0;
      box-shadow: ${px2vw(6)} ${px2vw(6)} 3px rgba(0, 0, 0, 0.6);
      &:hover {
        scale: 1.05;
      }
      &:active {
        scale: 0.95;
      }
    }
  }
`;
