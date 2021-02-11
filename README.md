## Learning Branches In Git making changes on Markdown

# Avinash's approach :point_down:
 > taken variable count to keep the track of prime numbers and the variable num with 1 ,to check primality of each number from 2 to n 
 ```javascrpit 
      var num = 1;
      var count = 0 ; 
 ```
 > run a while loop to count the prime number's found till n.
 ``` javascript
    while(count < n)
```
> run a for loop inside while loop to check whether each number till n is prime or not , if it is prime then loop will break and increase the count.
``` javascript
     for (var i = 2; i <= num; i++)
        {
            if (num % i == 0)
            {
                break;
            }
        }
        if (i == num)
        {
            count = count+1;
        }
```
> if while loop's condition get fail we will simply print the that num.
``` javascript
    console.log(num);
```


