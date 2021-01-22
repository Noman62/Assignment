function megaFriend(names)  // string array  is passed to the function as argument
{
    if(names.length==0)
    {
        return -1;          //if string array is empty
    }
    var maxlength=names[0].length; // Initialize maximum string

    var maxName="";                 //initialize a empty string
    
    for(var i=1; i<names.length; i++)
    {
        if(names[i].length>maxlength) //travers string array and compare every index
        {
            maxName=names[i];       //assign maxValue in maxName string
        }
    }
    return maxName; // return maxValue
}

var names=["noman","asadullah","akib"]; //string array declaration

var result=megaFriend(names); //function is called

if(result==-1)
{
    console.log("string array is empty");
}
else
{
     console.log(result);
}
