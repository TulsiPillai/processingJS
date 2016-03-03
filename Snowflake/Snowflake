MyController controller;
float hs;
int order = 3;
int distance = 500; // base of the triangle
float h; //height 
Point p1,p2,p3;
//PImage img;


void setup(){
  background(0);
  size(1024,700);
  frameRate(10);
  noStroke();  
  smooth();  
  controller = new MyController();
  //img = loadImage("city.jpg");
  int xPos = width/4;
  int yPos = height*2/3 + 100;
  hs = sq(distance) + sq(distance/2);
  h = sqrt(hs);
    //print(" "+ h );
    p2 = new Point(xPos,yPos);
    p1 = new Point(xPos+(distance/2),yPos-h);
    p3 = new Point(xPos+distance,yPos);  
  }

void draw() {
  
    background(0);  
    int r = 255;
    int g = 255;
    int b = 255; 
    order = controller.getSliderValue();
    drawSnowFlake(order, p1, p2, 1, r, g, b);
    drawSnowFlake(order, p2, p3, 1, r, g, b);
    drawSnowFlake(order, p3, p1, 1, r, g, b);
    line(p1.x,p1.y,p2.x,p2.y);
    line(p2.x,p2.y,p3.x,p3.y);
    line(p3.x,p3.y,p1.x,p1.y);
}


 
