//javascript function to  get an array and read the first element of an array.
//check whether it is prime or not


let arry1=[2,6,2,'prashi'];
let pr=true;
 pr=primecheck(arry1[0]);
    if (pr==true)
     {
        console.log('prime number');
     }
    else 
     {
        console.log('not a prime number');
     }


function primecheck(n)
    {
        if (n<=1) 
        {
          return false;  
        } 
        else 
        {
           for(let i=2;i<n;i++) 
           { 
            if(n%i==0)
            {
              return false;
              break ; 
            }
            
           } 
           return true;
        }

    
    }

