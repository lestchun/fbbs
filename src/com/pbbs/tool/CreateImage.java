package com.pbbs.tool;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;

import javax.imageio.ImageIO;

public class CreateImage {
	private final int WIDTH=140;
	private final int HEIGHT=55;
	
	public static void paint(Graphics g,String name){
		Font f=new Font("宋体",Font.BOLD,20);
		g.setColor(Color.RED);
		g.setFont(f);
		g.drawString(name, 10, 40);
		g.setColor(Color.BLUE);
	}
	
	
	
	public static void main(String[] args) {
		     int width = 140;   
	        int height = 55;   
	        String s = "你好";   
	           
	        File file = new File("F:/ty/image.jpg");   
	           
			String name=s;
			BufferedImage bi = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);   
			Graphics g=bi.getGraphics();
			g.setColor(Color.WHITE);
			for(int i=0;i<height;i++){
				g.drawLine(0, i, width, i);
			}
			g.setFont(new Font("宋体",Font.BOLD,20));
			g.setColor(Color.BLACK);
			g.drawString(name, 10, 40);
	          
	        try {
				ImageIO.write(bi, "jpg", file);
			} catch (IOException e) {
				e.printStackTrace();
			}    
	}
}
