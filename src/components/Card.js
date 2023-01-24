import './css/Card.css'

function Card(props){
    const title = props.title;
   
    var img_src = props.imageid;;
    
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