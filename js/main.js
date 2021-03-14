let hyperLinks = document.querySelectorAll('a');

for(let i = 0; i < hyperLinks.length; i++) {
    if(hyperLinks[i].getAttribute('href') === '#') {
        hyperLinks[i].style.color = 'red';
    }   
}
