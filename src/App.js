// src/App.jsx

import React, { useMemo, useState } from "react";
import List from "./components/List";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const data = useMemo(() => {
    return [
      {
        id: 1,
        title: "react",
      },
    ];
  }, []);

  return (
    <div>
      <input type="text" value={value} onChange={onChangeHandler} />
      <List data={data} />
    </div>
  );
};

export default App;
