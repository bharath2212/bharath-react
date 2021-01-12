import React from "react"
function Time() {
    const date= new Date();
    var hours=date.getHours;
    var Regards;
    if(hours >=12 && hours <=17)
        {
            Regards="Good AfterNoon"
        }
    else if (hours <12 && hours >=0)
        {
            Regards="Good Mornig"
        }
    else
        {
            Regards="Good Night"
        } 
    return (
        <div>
            {Regards}
        </div>
    );
}

export default Time;