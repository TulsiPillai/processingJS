import java.awt.*;
import javax.swing.*;
import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JSlider;
import processing.core.PApplet;

class MyController{
    
    JSlider mySlider;
   
    JButton myButton;

    MyController(){
        myButton = new JButton("Push Me!");

        //Set up our slider
        mySlider = new JSlider(JSlider.HORIZONTAL, 1, 5, 5);
        
        JFrame frame = new JFrame("Title Goes Here!");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.getContentPane().add(mySlider);
        //frame.getContentPane().add(mySlider2);

        frame.setLayout(new BoxLayout(frame.getContentPane(), BoxLayout.Y_AXIS));

        //Pack automatically sizes and arranges things...
        frame.pack();
        frame.setVisible(true);

    }

    //We want to be able to get the value from our slider
    int getSliderValue(){
        return mySlider.getValue();
    }
   
}
