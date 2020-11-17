
function check_item_is_a_prime(num)
{
    if (num === 2)
    {
        return true;
    }
    else if (num > 1)
    {
        var limit = Math.sqrt(num)
        for (var i = 2; i < limit; i++)
        {
            if (num % i !== 0)
            {
                return true;
            }
            else if (num === i * i)
            {
                return false
            }
            else
            {
                return false;
            }
        }
    }
    else 
    {
        return false;
    }
}
( function extract_prime_numbers_from_array()
{
    let input_arr = ['rajmal',2,5,7,120,30,51]
    let output_arr = input_arr.filter(function(item)
    {
        if(typeof(item)==='number')
        {
            if (check_item_is_a_prime(item))
            {
                return item
            }
        }
        else
        {
           console.log(item,"is not a number excluding it and checking the array")
        }
    })
    console.log(output_arr,"are the prime numbers in the given array")
})()
