import { click } from "@testing-library/user-event/dist/click";
import { useEffect, useState } from "react";
import "./button.css"

function Click() {

    const [clicks, Setclicks] = useState(0);

    function clickchange(){
        let click = clicks + 1;
        Setclicks(click);
    }
    function resetclick(){
        click = 0;
        Setclicks(click);
    }
    
    useEffect(console_print,[click]);

    function console_print(){
        console.log("Button changed");
        console.log(" ");
    }

    return (

        <div>
            <span class="value">{clicks}<i> clicks</i></span>
            <br></br>
            <input class="click-button" value="Click me" type="button" onClick={clickchange}></input>
            <input class="click-button" value="Reset" type="button" onClick={resetclick}></input>
        </div>
        
    
    );

}

export default Click;