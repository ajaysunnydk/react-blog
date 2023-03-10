import { useState } from 'react';
import './css/Card.css'
import axios from 'axios';
function Card(props){

   
    var img_src = props.imageid;;
    
    const [title,setTitle] = useState('');
    axios.get('https://jsonplaceholder.typicode.com/posts/'+props.num)
    .then(res=>{
        setTitle(res.data.title);
    });

    return(
        <div className="card">
                <div className="card-top">
                    <img src={img_src} alt="" className="blog-img"></img>
                </div>
                <div className="card-bottom">
                    <div className="bottom-top">
                        <h2 className="title">{title}</h2>
                        <a  href="Blog/index.html" className="read-btn">Read more</a>
                    </div>
                    <div className="bottom-bottom">
                        <ul className="tag-list">
                            <li>#chatGpt</li>
                            <li>#AI</li>
                            <li>#Microsoft</li>
                            <li>#OpenAi</li>
                            <li>#RDL</li>
                            <li>#Pycharm</li>
                            <li>#Anaconda</li>
                            <li>#Tensorflow</li>
                        </ul>
                    </div>
                </div>
            </div>
    );
}

export default Card;