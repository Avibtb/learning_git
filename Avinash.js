function findNthPrime(n)
{
    var num = 1;

    // to keep the track of prime numbers found
    var count = 0;

    // loop will run until count == n i.e nth prime is found
    while (count < n)
    { 
        num = num+1;

        // to  check whether the num is prime or not and if it is prime the loop will break and increment the count.
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
    }
    //num will be the nth prime number.
   console.log(num);
}

//calling of function 
findNthPrime(5);