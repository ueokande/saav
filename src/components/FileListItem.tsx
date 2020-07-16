import React from "react";
import styled from "styled-components";

const Item = styled.li`
  list-style: none;
`;

interface Props {
  name: string;
  type: string;
}

const FileListItem: React.FC<Props> = ({ name, type }: Props) => (
  <Item>
    {name} ({type})
  </Item>
);

export default FileListItem;
