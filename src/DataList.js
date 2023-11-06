import React from "react";
import data from "./data";

function DataList() {
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div>Имя: {item.name}</div>
          <div>Возраст: {item.age}</div>
          <div>Рост: {item.height}</div>
        </div>
      ))}
    </div>
  );
}

export default DataList;
