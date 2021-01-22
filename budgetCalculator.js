  
  function budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop) // 3 value is passed to the function as argument
    {
     if(numberOfWatch<0 ||numberOfPhone<0 || numberOfLaptop<0)
     {
       return -1;                                         //invalid value passed to the function
     }
        var totalBudget;//variable declaration

        totalBudget=numberOfWatch*50+numberOfPhone*100+numberOfLaptop*500;

        return totalBudget; //return budget
    }

    //variable declaration
        var numberOfWatch=-1;   //Number of watch 
        var numberOfPhone=2;     //Number of phone
        var numberOfLaptop=1;   //Number of laptop

    var result=budgetCalculator(numberOfWatch,numberOfPhone,numberOfLaptop); //function is called

    if(result==-1)
    {
      console.log("invalid input")
    }
    else
    {
      console.log( result); //display result;
    }

    
