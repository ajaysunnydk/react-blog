import ContactUs from "../../ContactUs";
import Footer from "../../Footer";
import Header from "../../Header";
import default_image from "../../../App";
import repeat from "../../../App";
import Card from "../../Card";
import axios from "axios";
import { useState } from "react";

function Blog(props) {

       
    var img_src = props.imageid;;
    
    const [title,setTitle] = useState('');
    axios.get('https://jsonplaceholder.typicode.com/posts/'+props.num)
    .then(res=>{
        setTitle(res.data.title);
    });

    return (
        <>
            <Header></Header>
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
            <Footer></Footer>
        </>
    )
}
export default Blog;