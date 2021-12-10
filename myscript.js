let scatola = document.getElementById("container");

for(let i = 1; i <= 100; i++){
    if(i%3 == 0){ //multipli di 3
        scatola.innerHTML += '<div class=box-3 square' + i + '</div>';
    }
    else{
        console.log('iterazione: ', i);
        scatola.innerHTML += '<div class=box square' + i + '</div>';
    }
}