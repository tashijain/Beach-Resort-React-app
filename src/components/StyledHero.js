import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

// incase img doesn't load then default image setup
const StyledHero = styled.header`
  min-height: 60vh;
  background: url(${(props) => (props.img ? props.img : defaultImg)})
    center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StyledHero;

// styled components and access value dynamically
