import ReactDOM from "react-dom";
// import datalist from "./data";
import React from "react";
export default function Container() {
  // let memes_list = datalist["data"]["memes"];
  // sourcery skip: avoid-function-declarations-in-blocks
  let [meme, setmeme] = React.useState({
    "top text": "",
    "bottom text": "",
    image: "https://i.imgflip.com/1bil.jpg",
  });
  let [allmemes, setallmemes] = React.useState();
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setallmemes(data.data.memes);
      });
    // function setdata() {
    //   fetch("https://api.imgflip.com/get_memes")
    //   .then((data) => {
    //     return data.json();
    //   })
    //   .then((data) => {
    //     setallmemes(data.data.memes);
    //   });
    // }
    // document.addEventListener('resize',setdata())
    // return () => {
    //   document.removeEventListener('resize',setdata())
    // }
  });
  function edit() {
    let image = allmemes[Math.floor(Math.random() * allmemes.length)].url;
    setmeme((prev) => ({ ...prev, image: image }));
  }
  function handle(e) {
    let { name, value } = e.target;
    setmeme((prev) => {
      return { ...prev, [name]: value };
    });
  }



  
  return (
    <div className="container">
      <div className="inputs">
        <input placeholder="top text" onChange={handle} name="top text"></input>
        <input
          placeholder="bottom text"
          onChange={handle}
          name="bottom text"
        ></input>
      </div>

      <button type="submit" onClick={edit}>
        Get a new meme image <img src="../pictures/image.png"></img>
      </button>

      <div className="result">
        <img src={meme.image} className="meme--image" />
        <h2 className="meme--text top">{meme["top text"]}</h2>
        <h2 className="meme--text bottom">{meme["bottom text"]}</h2>
      </div>
    </div>
  );
}
