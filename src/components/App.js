import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {

    constructor(){
        super()
        this.relativeList = ["Lucy", "Jiji"]
    }

    
    render() {

        return(
            <div id="main">
               
               <ol>
                {
                    this.relativeList.map((relativeListItem,index)=>{
                    return <li key={`relativeListItem${index+1}`}>{relativeListItem}</li>})
                }
               </ol>
            </div>
        )
    }
}


export default App;
