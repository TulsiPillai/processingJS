MyController controller;
float hs;
int order = 3; //no. of recursions
int quantity = 100; //no of snowflakes
float [] xPosition = new float[quantity]; //start position of p2
float [] yPosition = new float[quantity];
int [] distance = new int[quantity]; //base of triangle
int [] direction = new int[quantity];
int mindistance =1 ;
int maxdistance = 30;
float[] h = new float[quantity]; //height of the equilateral triangle
Point[] p1 = new Point[quantity];
Point[] p2 = new Point[quantity];
Point[] p3 = new Point[quantity];
PImage img;


void setup(){
  background(0);
  size(1024,700);
  frameRate(10);
  noStroke();  
  smooth();  
  controller = new MyController();
  img = loadImage("city.jpg");
  for(int i = 0; i < quantity; i++) {
    distance[i] = round(random(mindistance, maxdistance));
    xPosition[i] = (random(0, width));
    yPosition[i] = (random(0, height));
    direction[i] = round(random(0, 1));
    hs = sq(distance[i]) +sq(distance[i]/2);
    //print(" "+ hs);
    h[i] = sqrt(hs);
    //print(" "+ h[i] );
    // coordinates of the triangle (p1,p2,p3) (xpos,ypos),(xpos+base/2,ypos-height),(xpos+base,ypos)
    p2[i] = new Point(xPosition[i],yPosition[i]);
    p1[i] = new Point(xPosition[i]+(distance[i]/2),yPosition[i]-h[i]);
    p3[i] = new Point(xPosition[i]+distance[i],yPosition[i]);  

  }
  
}
void draw() {
  
  background(img);
  
  for(int i = 0; i < p1.length; i++) {
    int r = 255;
    int g =255;
    int b = 255; 
    order = controller.getSliderValue();
    drawSnowFlake(order, p1[i], p2[i], 1, r, g, b);
    drawSnowFlake(order, p2[i], p3[i], 1, r, g, b);
    drawSnowFlake(order, p3[i], p1[i], 1, r, g, b);
  
    if(direction[i] == 0) {
      p2[i].x += map(distance[i], mindistance, maxdistance, .1, .5);
      p2[i] = new Point(p2[i].x,p2[i].y);
      p1[i] = new Point(p2[i].x+(distance[i]/2),p2[i].y-h[i]);
      p3[i] = new Point(p2[i].x+distance[i],p2[i].y);  
      
    } else {
      p2[i].x  -= map(distance[i], mindistance, maxdistance, .1, .5);
      p2[i] = new Point(p2[i].x,p2[i].y);
      p1[i] = new Point(p2[i].x+(distance[i]/2),p2[i].y-h[i]);
      p3[i] = new Point(p2[i].x+distance[i],p2[i].y);        
    }
    
    p2[i].y += distance[i] + direction[i]; 
    p2[i] = new Point(p2[i].x,p2[i].y);
    p1[i] = new Point(p2[i].x+(distance[i]/2),p2[i].y-h[i]);
    p3[i] = new Point(p2[i].x+distance[i],p2[i].y);  
    
    if(p2[i].x > width + distance[i] || p2[i].x < -distance[i] || p2[i].y > height + distance[i]) {
      p2[i].x = random(0, width);
      p2[i].y = -distance[i];
      p2[i] = new Point(p2[i].x,p2[i].y);
      p1[i] = new Point(p2[i].x+(distance[i]/2),p2[i].y-h[i]);
      p3[i] = new Point(p2[i].x+distance[i],p2[i].y);  
    }
  }
  
}


 
