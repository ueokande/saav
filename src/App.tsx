import React from "react";
import Screen from "./components/Screen";
import PageList from "./components/PageList";
import ConsoleOutput from "./components/ConsoleOutput";

type File = {
  name: string;
  type: string;
};

const App = () => {
  const [files, setFiles] = React.useState<Array<File>>([]);

  const addFile = (file: {
    name: string;
    type: string;
    content: ArrayBuffer;
  }) => {
    setFiles(files.concat([{ name: file.name, type: file.type }]));
  };

  return (
    <>
      <Screen />
      <PageList
        pages={files.map((file) => ({ name: file.name, type: file.type }))}
        onDropped={(file) => addFile(file)}
      />
      <ConsoleOutput lines={["Hello, world", "Goodble"]} />
    </>
  );
};

export default App;
