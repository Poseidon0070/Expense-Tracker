let canvas = document.getElementById('canvas');
let c = canvas.getContext("2d");
canvas.style.backgroundColor = "rgba(0,0,0,1)";
canvas.height = 1.5*window.innerHeight;
canvas.width = window.innerWidth;

const particles = [];
const color = ["violet","indigo","blue","red","green","yellow","orange"];

window.addEventListener('resize',function(){
    canvas.height = 1.5*window.innerHeight;
    canvas.width = window.innerWidth;
    init();
})

function partice(x,y,radii,dx,dy){
    this.x = x,
    this.y = y,
    this.radii = radii,
    this.color = "white";
    this.velocity = {
        Xvel : dx,
        Yvel : dy
    }

    this.draw = function(){
        c.beginPath();
        c.arc(this.x,this.y,this.radii,0,Math.PI*2);
        c.fillStyle = "white";
        c.fillStyle = this.color;
        c.fill();
    }

    this.update = function(){
        if(this.x > innerWidth || this.y > 1.5*innerHeight){
            this.x = Math.random()*innerWidth;
            this.y = 0;
        }else{
            this.y += this.velocity.Yvel
            this.draw();
        }
    }
}

function init(){
    particle = [];
}

for(let i=0;i<200;i++){
    particles.push(new partice(Math.random()*innerWidth,Math.random()*1.5*innerHeight,Math.random()*(3-2)+1,0.5,0.4));
}

function animate(){
    c.fillStyle=`rgba(0,0,0,0.07)`;
    c.fillRect(0,0,innerWidth,1.5*innerHeight);   
    particles.forEach((particle)=>{
        particle.update();
    })
    requestAnimationFrame(animate);
}
init();
animate();




