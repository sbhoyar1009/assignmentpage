import React,{Component} from "react";
import classes from "./App.module.css";

class LeftSide extends Component{
    render(){
        return(
            <div className = {classes.Left}>
                <p>
                   <a href="http://cxxtest.com/guide.html" > About framework</a> <br></br>
                   <a href="./Guidelines.html" >Submission Guidelines </a><br></br>
                    Last time submitted at : 13/07/2021 11:36 am<br></br> 
                    
                </p>
            </div>
        );
    }
}
export default LeftSide;