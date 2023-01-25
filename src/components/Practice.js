import './css/practice.css'
import  {useState} from 'react'

function Practice(props){

    var a = 5;
    const fun = ()=>{
        console.log("Clicked - Veg");
        a=10;
    }

    

    const item = props.ite;
    if(item=="veg"){
        return(
            <div className="veg">
                <button onClick={fun} >Click Here</button>
                <div>
                    {a}
                </div>
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