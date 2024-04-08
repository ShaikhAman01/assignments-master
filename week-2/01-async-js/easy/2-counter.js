// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.



let counter=0;
function onDone(){
    counter+=1;
    console.log(counter);

}

for (let i = 0; i < 10; i++) {
    setTimeout(onDone,i*1000);
}




































































// (Hint: setTimeout)