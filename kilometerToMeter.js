    function kilometerToMeter(kilometer) //kilometer value is passed to the function as argument
    {
        if(kilometer<0)
        {
            return -1;   //if kilometer is negative 
        }
        var meter=kilometer*1000;//convert kilometer to meter
        return meter;
    }

    var kilometer=5;  // variable declaration

    var result=kilometerToMeter(kilometer);  //function is call

    if(result==-1)
    {
        console.log("distance can not be negative")
    }
    else
    {
        console.log(result); //display converted value
    }