PImage img;
PImage img1;
float offsetx = 0;
float offsety = 0;
float easing = 0.05;
int num_ripples = 0; 
Ripple[] ripples = new Ripple[1000];        

void setup() {
  size(1440,1080);
  img = loadImage("water.jpg");  // Load an image into the program 
  img1 = loadImage("cat.png");
}

void draw() { 
  image(img, 0, 0);  // Display at full opacity
  //tint(255, 127);  
  //image(img1, mouseX-100, mouseY-50);
  fill(0, 6);                                 
  rect(0, 0, width, height);                  
  noStroke();                                 
  for( int i=0; i < num_ripples; i++){
     if ( ripples[i] == null) {
        // Do nothing if current object == null
     }
     else if (ripples[i].update() == false){
        // Update the current ripple, if return false than set the current object to null
        ripples[i] = null;
     }
     else{
        // When tear is not null, and update() wasn't false then draw() it
        ripples[i].draw();
     }
  }

  if(mousePressed){
     // Add a new tear to the tears array at the current mouse location
     ripples[num_ripples] = new Ripple(mouseX,mouseY);
     num_ripples +=1;
     
    }
}

//class that generates ripples
public class Ripple{
   int x,y, alpha;
   float size;
   
 
   Ripple(int xin, int yin){
      x = xin;    //x, y coordinates of the ripple                               
      y = yin;                                   
      alpha = 255;                                
      size = 100;                                 
   }
   

   boolean update(){
      size+= 5;                     //increase size of the ripple as long as the mouse is held       
      alpha -= 5;                 //decrease transparency for fade effect
      //size = 100;                        
      if( y > height || alpha < 0){      //if the mouse hovers outside the window
         return false; 
      }
      return true;                       
   }
   
   // draw this tear with its current properties
   void draw(){
      stroke(0,141,180+random(0,100), alpha); //rgb, alpha        
      ellipse(x,y, size,size);                //create circle
   }

}
