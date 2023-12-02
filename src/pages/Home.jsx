import { useEffect, useState } from "react";
import React from "react";
import Memecard from "../components/Card";
import { getAllMemes } from "../api/memes";

const Homepage = () => {
 
  const [data, setDate] = useState([]);

  useEffect(() => {
    getAllMemes().then((memes) =>setDate(memes.data.memes));
  }, []);
  return (
    <div className="row">
      {
        data.map(el => <Memecard img={el.url} title ={el.name}/>)
      }
    </div>
  );
};

export default Homepage;
