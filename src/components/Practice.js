import './css/practice.css'
function Practice(props){

    const item = props.ite;
    if(item=="veg"){
        return(
            <div className="veg">
            </div>
        )
    }
    else{
        return(
            <div className="nonVeg">
                
            </div>
        )
    }
    
}
export default Practice;