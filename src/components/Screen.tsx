import React from "react";
import styled from "styled-components";

const Video = styled.video`
  background-color: #ff00ff;
`;

function Screen() {
  return <Video width="320" height="240"></Video>;
}

export default Screen;
