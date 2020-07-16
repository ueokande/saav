import React from "react";
import styled from "styled-components";
import PageListItem from "./PageListItem";

type OnDropEvent = {
  name: string;
  type: string;
  content: ArrayBuffer;
};

type OnDropEventHandler = (e: OnDropEvent) => void;

type Page = {
  name: string;
  type: string;
};

interface Props {
  pages: Array<Page>;
  onDropped: OnDropEventHandler;
}

const ListContainer = styled.ol`
  min-height: 250px;
  box-shadow: 0 0 4px gray inset;
`;

const PageList: React.SFC<Props> = ({ pages, onDropped }: Props) => {
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    Array.from(e.dataTransfer.files)
      .filter((file) => file !== null)
      .filter((file) => ["image/png", "image/jpeg"].includes(file.type))
      .forEach((file) => {
        file.arrayBuffer().then((content) => {
          onDropped({ name: file.name, type: file.type, content: content });
        });
      });
  };

  return (
    <div onDragEnter={handleDrop} onDragOver={handleDrop} onDrop={handleDrop}>
      <ListContainer>
        {pages.map((file, index) => (
          <PageListItem key={index} name={file.name} type={file.type} />
        ))}
      </ListContainer>
    </div>
  );
};

export default PageList;
