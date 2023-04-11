// 


// function
function recursion(text,times,t=0) {
    if (times > 0) {
        t++
        console.log(text + " "+t);
        recursion(text,times - 1,t)
    }
}
recursion("assalam-u-alaikum",9)
// array

