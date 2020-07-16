import React from "react";
import Screen from "./components/Screen";
import FileList from "./components/FileList";
import ConsoleOutput from "./components/ConsoleOutput";

const App = () => (
  <>
    <Screen />
    <FileList
      files={[
        { name: "hello.png", type: "image/png" },
        { name: "world.png", type: "image/png" },
      ]}
    />
    <ConsoleOutput lines={["Hello, world", "Goodble"]} />
  </>
);

export default App;
