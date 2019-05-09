var diam1=150;
let y=0
function setup() {  createCanvas(700, 300) }
function draw() {
    y += 1
    if(y==250){
        y=1
    }
    diam1 <= 150
        if(diam1== 0){
            diam1= 150
        }
            
     background(204);  
    // 绘制一个太阳
    fill(255,0,0)
    stroke(255, 255, 0)
    strokeWeight(6)
    ellipse(500, y, 100, 100)
    // moon rise
    fill("#FFFF00");
    ellipse(250,diam1,100,100);
     // 开始绘制山的图形
    // 设置颜色为灰色
    fill(45,45,45)
    stroke(0, 0, 0)
    strokeWeight(1)
    beginShape()
    vertex(0,300)
    vertex(10, 40)
    vertex(40, 100)
    vertex(80, 20)
    vertex(200, 100)
    vertex(260, 50)
    vertex(370, 110)
    vertex(400, 10)
    vertex(500, 200)
    vertex(600, 30)
    vertex(700, 300)
    // 结束绘制图形
    endShape()
    fill("#FF0000");
    textSize(50);
    textFont("Helvetica");
    textStyle(BOLD);
    textAlign(CENTER);
    text("Sunset",350,150);
    fill("#FFFF00");
    text("moon rises",350,250);
    text("left click",350,200);
    
    // mouse following
    ellipse(mouseX,mouseY,50,50);
}
    function mousePressed(){
    diam1=diam1-10;
}