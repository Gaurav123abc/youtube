import { useEffect, useState } from "react";


function Boom_boom(){

    const [second, setSeconds] = useState(60);
    
    // useEffect(callback,[]);
    //Array change = callback fn call 

    const curr_time = new Date();
    let curr_timemilli = curr_time.getTime();
    let timeoutmilli = (curr_timemilli / 1000) + 60;

    function callback(){
        console.log("hello")
        let present_time = new Date();
        let present_timemilli = present_time.getTime();
        let diff = timeoutmilli - (present_timemilli/1000);
        let diff_ceil = Math.round(diff);

        if (diff_ceil > 0) {
            setSeconds(diff_ceil);
          }
        else if(diff_ceil <= 0){
            setSeconds("Boom");

        }

    }

    useEffect(run_function,[]);

    function run_function() {
        setInterval(callback,1000);
    }



    return (

        <div id='timer'>{second}</div>


    );


}
export default Boom_boom;