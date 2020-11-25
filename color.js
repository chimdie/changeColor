var btn = document.querySelector('.click');
var body = document.querySelector('body');
var colors = ['blue', 'red', 'yellow', 'green', 'orange', 'purple', '#daa520', 'rgb(100, 290, 60)']
const color = document.getElementById('colorName')

btn.addEventListener('click', function(){
    var colorIndex = Math.floor(Math.random()*colors.length)   //can still use "PARSEINT" in place of 'Math.Floor'
//     var colorIndex = parseInt(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
    color.textContent = '"'+ colors[colorIndex] + '"'
})
