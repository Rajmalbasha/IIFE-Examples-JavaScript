( function rotate_array_right()
{
    let input_arr = [1,2,3,4,5]
    let shallow_copy_input_arr = [...input_arr] // Shallow copy . Does not work if it is a nested array . For nested array perform deep copy
    let rotate_count = 2
    let count = rotate_count
    while (rotate_count>0)
    {
        shallow_copy_input_arr.unshift(shallow_copy_input_arr.pop())
        rotate_count--
    }
    console.log(" Input array after rotating",count,"times to the right :",shallow_copy_input_arr)
    console.log("Original input array is : ", input_arr)
})()

