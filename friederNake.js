MyPoint p;
PShape square;
PShape box;
float sWidth, sHeight;
void setup(){
    size(1000,700);
    p = new MyPoint(10.0f, 10.0f, 20.0f, 15.0f);
    println("x = " + p.x + " y = " + p.y);
    p.plot1();
    p.plot2();
    noFill();
    stroke(0,0,0);
    square = createShape(RECT, 0, 0, 100, 100); //the large squares
    stroke(180,100,180);
    sWidth = 20;
    sHeight =20;   
    box = createShape(RECT,0,0,sWidth,sHeight,5); //the smaller squares to be dragged with mouse
    drawSquare();
}
//generate random squares
void drawSquare() {
  for(int i=0; i<10; i++){
    float r = random(100,900);
    float s = random(100,600);
    shape(square, r, s);
  }
}
void draw() {
  if (mousePressed) {
    stroke(255);
  } else {
    stroke(0);
  }
  float zoom = map(mouseX, 0, width, 0.4, 5); //amount of scaling on the squares from left to right
  scale(zoom);
  shape(box, mouseX+10, mouseY+10) ;
}

//Class My Point
class MyPoint {
    float x, y,a,b; // member variables

    //Class Constructor
    MyPoint(float x, float y, float a, float b){
        this.x = x;
        this.y = y;
        this.a = a;
        this.b = b;
       
    }
    //Method
    //plot the background lines
    void plot1(){
      for(int i=10; i<=100; i++){
          float r = random(10,100);
          stroke(204, 102, 0);
          strokeWeight(2);
          line(x,y,r*x,y);
          line(r*x,y,r*x,y+i);
          line(r*x,y+i,x,y+i);
          line(x,y+i,x,y+(2*i));
          y= y +(2*i);
        }
     }
     
    //creating a zigzag line
    void plot2(){
         float newX = 0;
         float newY = 0;
         float range = 1280;
         for(int i=0; i<=24; i++){
         newX = a + 40;
         newY = b +(range/2 - (i%2)*range);
         stroke(204, 102, 0);
         line(a,b,newX,newY); 
         a = newX;
         b = newY;
        }
    }
}
