package com.pbbs.tool;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.IOException;

import javax.imageio.ImageIO;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MassImage
 */
public class MassImage extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private final int WIDTH=140;
	private final int HEIGHT=55;
    public MassImage() {
        super();
    }
	 
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 doPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		 response.setContentType("image/jpeg");  
		String name=new String(request.getParameter("mass").getBytes("iso-8859-1"),"utf-8");
		
		BufferedImage bi = new BufferedImage(WIDTH, HEIGHT, BufferedImage.TYPE_INT_RGB);   
		Graphics g=bi.getGraphics();
		g.setColor(Color.WHITE);
		for(int i=0;i<HEIGHT;i++){
			g.drawLine(0, i, WIDTH, i);
		}
		g.setColor(Color.BLACK);
		g.setFont(new Font("宋体",Font.BOLD,20));
		g.drawString(name, 10, 40);
		ImageIO.write(bi, "jpg", response.getOutputStream());
	}
	
}
