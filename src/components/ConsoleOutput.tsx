import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-family: monospace;
  color: white;
  background-color: #222;
`;

const Line = styled.p``;

interface Props {
  lines: Array<string>;
}

const ConsoleOutput: React.FC<Props> = ({ lines }: Props) => {
  return (
    <Container>
      {lines.map((line, index) => (
        <Line key={index}>{line}</Line>
      ))}
    </Container>
  );
};

export default ConsoleOutput;
