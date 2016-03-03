class Point {
  float x;
  float y;
 
  Point(float xp, float yp){
    x = xp;
    y = yp;
  } 
   
  void draw(int weight, int r, int g, int b){
    strokeWeight(weight);
    stroke(r, g, b);
    point(x,y);
  }  
}

void drawSnowFlake(int order, Point p1, Point p2, int weight, int r, int g, int b) {
  
  if (order == 0) {
    strokeWeight(weight);
    stroke(r,g,b);
    line(p1.x, p1.y, p2.x, p2.y);
  } else {
    float deltaX = p2.x - p1.x;
    float deltaY = p2.y - p1.y;
    
    double cosConst = Math.cos(Math.toRadians(30.0));
    int zx = (int)((p1.x + p2.x)/2 + cosConst * (p1.y - p2.y)/3.0);
    int zy = (int)((p1.y + p2.y)/2 + cosConst * (p2.x - p1.x)/3.0);
    
    Point x = new Point(p1.x + deltaX / 3, p1.y + deltaY / 3);
    Point y = new Point(p1.x + deltaX * 2 / 3, p1.y + deltaY * 2 / 3);
    Point z = new Point(zx, zy);
    
    drawSnowFlake(order - 1, p1, x, 1 , r, g, b);
    drawSnowFlake(order - 1, x, z, 1 , r, g, b);
    drawSnowFlake(order - 1, z, y, 1 , r, g, b);
    drawSnowFlake(order - 1, y, p2, 1 , r, g, b);
  }
  
}
