import React from 'react';
import { useState } from 'react';



export default function Form() {
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "/Images/illustration-meme-famous-rap-singer-260nw-2131541083.webp"
    });

    const [memesImage, setMemesImage] = useState(memesData)

    function getMemeImage() {
        const memesArray = memesImage.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const src = memesArray[randomNumber].src
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: src
        }))
    }

    return (
        <>
         <div className='my-form'>
            <input
                type="text"
                placeholder="Top text"
                className='form-inputs' />
            <input
                type="text"
                placeholder="Bottom text"
                className='form-inputs'
            />
            <button onClick={getMemeImage} className='form-button'>Get a new meme image <i className="fa fa-picture-o" /></button>
            
         </div>
         <img src={`/Images/${meme.randomImage}`} alt="an_image"className='memes-image' style={{width: '100%'}}/>
        </>
       
    )
}