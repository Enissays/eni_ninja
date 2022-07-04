var proceed = true;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }


function initTime()
{
    var time = document.getElementById('time');
    var t_interval = setInterval(() => {
            time.textContent = parseInt(time.textContent) - 1;
            if (time.textContent == '0') 
            {
                clearInterval(t_interval);
                time.textContent = 'Fini!';
                proceed = false;
            }
        }, 1000);

}
function score(bonus)
{
    var el = document.getElementById("counter");
    el.textContent = parseInt(el.textContent) + 1 + bonus;
}
var sources = ['images/taupe_sb.png', 'images/taupe.png'];
function taupeHehe(init) {
    if (proceed) {

        var type = rand(0,1);
        var img = document.createElement("img");
        img.src = sources[type];
        img.width = 50;
        img.height = 50;
        img.alt = type;
        
        // set the position
        img.style.position = 'absolute';
        img.style.top = document.body.clientHeight * Math.random() + 'px';
        img.style.left = document.body.clientWidth * Math.random() + 'px';
        img.addEventListener('click', () => {
            img.remove();
            taupeHehe(1);
            score(type);
            if (init == 0) initTime();
        });
        document.body.appendChild(img);
    }
  }
