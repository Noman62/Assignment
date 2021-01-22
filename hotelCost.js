function hotelCost(days)  // days  is passed to the function as argument
{
    if(days<0)
    {
        return -1;  // if days value negative
    }

    var totalCost;
    if(days<=10)   //If he stays below ten days
    {
        totalCost=days*100; //all cost in those days
        return totalCost;  //return all cost in those days
    }
    else if(days>10 && days<=20) //If he stays below 20 days
    {
        totalCost=10*100+(days-10)*80; //all cost in those days
        return totalCost; //return all cost in those days
    }
    else if(days>20)  //If he stays above 20 days
    {
        
        totalCost=10*100+10*80+(days-20)*50; //all cost in those days
        return totalCost; //return all cost in those days
    }
}

var days=13; //variable declaration

var result=hotelCost(days); //function is called

if(result==-1)
{
    console.log("day can not be negative")
}
else
{
    console.log(result); //display result
}

