let counter = 2;
document.getElementById('radio1').checked = true
setInterval(function(){
    document.getElementById('radio' + counter).checked = true
    console.log('radio'+counter);
    counter++
    if(counter > 3){
        counter = 1
    }   
}, 4000)