import { useState } from "react"


function Randomnumber()
{
    var [num,Setnum]= useState(0)
    function Rannumber()
    {
        Setnum(Math.floor(Math.random() *100))
    }

    return(
        <div className="number">
            <p>Get random number between 0 and 100</p>
            <h1>{num}</h1>
            <button onClick={Rannumber}>Generate</button>
        </div>
    )
}
export default Randomnumber