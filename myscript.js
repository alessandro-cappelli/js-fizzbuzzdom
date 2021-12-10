let scatola = document.getElementById("container");

for(let i = 1; i <= 100; i++){
    console.log('iterazione: ', i);
    scatola.innerHTML += '<div class=box' + i + '</div>';
}