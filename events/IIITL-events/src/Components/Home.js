import React, { useState } from "react";
import axios from "axios";
import Feed from "./Feed";
import "../CSS/home.css";

export default function Home() {
  const [other, setOther] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const onChangeValue = (e) => {
    setValue(e.target.value);
    if (e.target.value === "Other") {
      setOther(true);
    } else {
      setOther(false);
    }
  };
  
  return (
    <>   
      <Feed />
    </>
  );
}
