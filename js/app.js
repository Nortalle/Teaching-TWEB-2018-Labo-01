

document.getElementById('clickable').onclick = function() {
    
    let value     = parseInt(document.getElementById('1').innerText);

    document.getElementById('1').innerText = "" + (value+1);
}