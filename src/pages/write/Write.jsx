import React from 'react'
import "./write.css"
export default function Write() {
    return (
        <div className='write'>
            <img className='writeImg'
                src="https://c4.wallpaperflare.com/wallpaper/291/819/697/illustration-city-anime-painting-wallpaper-preview.jpg"
                alt=""
            />
            <form className='writeForm'>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your stroy...' type='text' className='writeText writeInput'></textarea>
                    <button className="writeSubmit">Publish</button>
                </div>
            </form>
        </div>
    )
}
