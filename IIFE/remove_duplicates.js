
( function remove_duplicates_from_array()
{
    let input_arr = [1,1,1,2,2,3,4,5]
    let output_arr = input_arr.reduce(function(arr,item)
    {
       if(!arr.includes(item))
       {
          arr.push(item)
       }
       return arr
    },[])
    console.log(output_arr)
})()
