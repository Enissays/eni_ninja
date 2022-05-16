function anyaHehe() 
{
    var el = document.getElementById("counter");
    el.textContent = parseInt(el.textContent) + 1;
}

function blueIfy(id, on) 
{
    var el = document.getElementById(id);
    if (on) el.style.backgroundColor = '#090979';
    else el.style.backgroundColor = '#4287f5';
}