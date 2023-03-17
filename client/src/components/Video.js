import React,{useState, createRef} from 'react';
// import VideoPlayer from 'react-video-js-player';
// import Car from "../assets/img/car.mp4";
import Learn from '../assets/img/Learn.png';
import img1 from '../assets/img/Learn.png';
import video1 from '../assets/videos/car.mp4';
import {DefaultPlayer as Video} from 'react-html5video';
import 'react-html5video/dist/styles.css';
import './video.css'
const Videos = () => {
    const [model, setModel] = useState(false);
    let data=[
        {
            id:1,
            poster:img1,
            videoUri:video1,
        },
        {
            id:2,
            poster:img1,
            videoUri:video1,
        },
        {
            id:3,
            poster:img1,
            videoUri:video1,
        },
    ]
  return (
    <div>
        
        <h1>Learning Skills</h1>
        <div className="gallery">
            {data.map((item, index)=>{
                let divRef = createRef(null);
                const openModel=()=>{
                    divRef.current.classList.remove('video');
                    divRef.current.classList.add('model');
                    setModel(true);
                }
                const closeModel =()=>{
                    divRef.current.classList.add('video');
                    divRef.current.classList.remove('model');
                    setModel(false);
                }
                return(
                    <div ref={divRef} className="video" key={index}>
                        {model && <button className='model-close-btn' onClick={()=>closeModel()}>X</button>}
                        <div className="video-container" onClick={()=>openModel()}>
                            <Video
                                style={{width:'100%'}}
                                autoPlay={model}
                                controls={['PlayPause','Seek','Time','Volume','Fullscreen']}
                                poster={item.poster}
                                src={item.videoUri}
                            >
                                <source src={item.videoUri} type="video/webm"/>
                            </Video>
                        </div>
                    </div>
                )
            })}
        </div>

    </div>
  )
}

export default Videos