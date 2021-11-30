const array = process.argv.slice(2);
let newArray = [];
for(let i of array){
    newArray.push(parseInt(i));
}
for(let i of newArray){
    if(typeof i !== "number" || i <= 0 || Number.isNaN(i)){
        continue;
    }
    setTimeout(() => {
        process.stdout.write('\x07');
        }, i);   
}


 
