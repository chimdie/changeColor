var btn = document.querySelector('.click');
var body = document.querySelector('body');
var colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', 'goldenrod']

btn.addEventListener('click', function(){
    var colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    // for(var i = 0; i < colors.length; i++){
    //     var col = colors[i]
    //     body.style.backgroundColor = col
    // }
})

