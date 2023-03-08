import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
    const [memeImage, setMemeIamge] = React.useState("");
    function getMemeImage() {
        const memes = memesData.map((meme) => {
            const memesArray = meme.data.memes;
            const randomIndex = Math.floor(Math.random() * memesArray.length);
            setMemeIamge(memesArray[randomIndex].url);
           
        })

    }
  
    return (
      <main className="meme">
          <div className="form">
              <input 
                  type="text" 
                  className="form--input"
                  placeholder="Top text"
              />
              <input 
                  type="text" 
                  className="form--input"
                  placeholder="Bottom text"
              />
              <button className="form--button" onClick={getMemeImage}>
                  Get a new meme image
              </button>
              <img src={memeImage} alt="meme" className="meme--image"/>
          </div>
       
      </main>
    );
  }