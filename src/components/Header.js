import  './css/header.css'

function Header(){
    return(
        <nav className="navbar">
        <div className="left">
            <h2 className="heading">RT-Blogs</h2>
        </div>
        <div className="right">
            <a href="#" className="link">Home</a>
            <a href="Post/index.html" class="link">Post</a>
            <a href="ContactUs/index.html" class="link">Contact Us</a>
        </div>
    </nav>
    )
}
export default Header;