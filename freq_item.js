var arr1=[3, 'a', 'a', 'a', 3, 3, 'a', 3, 'a', 3, 3, 3, 3];
var mf = 1;
var count = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
        for (var j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 count++;
                if (mf<count)
                {
                  mf=count; 
                  item = arr1[i];
                }
        }
        count=0;
}
console.log(item+" ( " +mf +" times ) ") ;