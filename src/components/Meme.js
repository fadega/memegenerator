import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
    //method 1 - fetching data from the api
    // const [memeImage, setMemeIamge] = React.useState("https://i.imgflip.com/30b1gx.jpg");
    
    //method 2 - fetching data from the local file 
      //passing a default image to the state - u can pass empty string as well
     // const [memeImage, setMemeIamge] = React.useState("https://i.imgflip.com/30b1gx.jpg");
  //  const [memeImage, setMemeIamge] = React.useState("https://i.imgflip.com/30b1gx.jpg");
  //  let topText=""
  //  let bottomText = ""
  //  function getMemeImage() {
  //       const memes = memesData.map((meme) => {
  //           const memesArray = meme.data.memes;
  //           const randomIndex = Math.floor(Math.random() * memesArray.length);

  //           topText = document.querySelector(".one").value;
  //           bottomText = document.querySelector(".two").value;
  //           console.log(` Top text: ${topText} Bottom text: ${bottomText}`);
  //           setMemeIamge(memesArray[randomIndex].url);    
            
  //       })
  //   }

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomIamge: "https://i.imgflip.com/30b1gx.jpg"
      })
    
    const [allMemes, setAllMemes] = React.useState(memesData);

    function getMemeImage() {
        const memes = allMemes.map((meme) => {
            const memesArray = meme.data.memes;
            const randomIndex = Math.floor(Math.random() * memesArray.length);
            setMeme({
                topText: document.querySelector(".one").value,
                bottomText: document.querySelector(".two").value,
                randomIamge: memesArray[randomIndex].url
            })
        })
        const topText = document.querySelector(".top--text").innerHTML;
        const bottomText = document.querySelector(".bottom--text").innerHTML;
        if(topText == "" || topText === "") {
          document.querySelector(".top--text").style.display = "none";
        }
        if(bottomText == null || bottomText == "") {
          document.querySelector(".bottom--text").style.display = "none";
        }
    }
    return (
      <main className="meme">
          <div className="form">
            <div className="form--inputs">
                <input 
                    type="text" 
                    className="form--input one"
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form--input two"
                    placeholder="Bottom text"
                />
            </div>
              
              <button className="form--button" onClick={getMemeImage}>
                  Get new meme image
              </button>
              <img src={meme.randomIamge} alt="meme" className="meme--image"/>
             <div className="meme--text">
                <p className="top--text">{meme.topText}</p>
                <p className="bottom--text">{meme.bottomText}</p>
            </div> 
           
          </div>
       
      </main>
    );
  }