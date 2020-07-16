import React from "react";
import styled from "styled-components";
import FileListItem from "./FileListItem";

type File = {
  name: string;
  type: string;
};

interface Props {
  files: Array<File>;
}

const ListContainer = styled.ol``;

const FileList: React.SFC<Props> = ({ files }: Props) => (
  <ListContainer>
    {files.map((file, index) => (
      <FileListItem key={index} name={file.name} type={file.type} />
    ))}
  </ListContainer>
);

export default FileList;
