import './css/Card.css'
import blog_image from './images/blog_image.jpeg'

function Card(){
    return(
        <div className="card">
                <div className="card-top">
                    <img src={blog_image} alt="" className="blog-img"></img>
                </div>
                <div className="card-bottom">
                    <div className="bottom-top">
                        <h2 className="title">Know ChatGpt</h2>
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