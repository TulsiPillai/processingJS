float theta;
float len;
boolean a = false;
int x,y;
int end;
float angle;
PImage img;
void setup(){
  size(1920,1080);
  theta =PI/6;
  len = 300;
  x = width;
  y = height;
  end = 200;
  smooth();  
  img = loadImage("grass.jpg");
  
}
void draw(){
      background(img);
      angle = (mouseX/float(width) - 0.5) * -PI;
      translate(width/2, height);
      stroke(0);  
      strokeWeight(5);      
      branch(len);         
}

 void branch(float len) {
    line(0, 0, 0, -len);
    translate(0, -len); 
    len *= 0.70;
    if (len > 1 && len < 50) {     
      rotate(angle);
      stroke(0);
      pushMatrix();
      rotate(theta);
      strokeWeight(1);
      branch(len);
      stroke(0);
      popMatrix();
      pushMatrix();
      rotate(-theta);
      branch(len);
      popMatrix();        
  }else if(len > 2 && len < 300){
      rotate(angle/4);
      stroke(0);
      pushMatrix();
      rotate(theta);
      strokeWeight(1);
      branch(len);
      stroke(0);
      popMatrix();
      pushMatrix();
      rotate(-theta);
      branch(len);
      popMatrix();     
  }
  else{
    int r = (int) map(mouseX, 0, 7, 0, 255);
    int g = (int) map(mouseX, 0, width, 0, 255);
    int b = (int) map(mouseY, 0, height, 0, 255);
    stroke(r,g,b);
    translate(0,10);
    ellipse(0,0,2,2);
  }

}
