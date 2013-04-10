package com.pbbs.test;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.io.Writer;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import javax.persistence.Entity;

import org.scannotation.AnnotationDB;
import org.scannotation.ClasspathUrlFinder;

import freemarker.template.Configuration;
import freemarker.template.DefaultObjectWrapper;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class CreateDao {
	public static void main(String[] args) {
	 
		AnnotationDB db;
		try {
			db = new AnnotationDB();
			db.scanArchives(ClasspathUrlFinder.findResourceBase("com/pbbs/model"));
			db.setScanClassAnnotations(true);
			Set<String> models=(db.getAnnotationIndex().get(Entity.class.getName()));
			Configuration cfg = new Configuration();
	        cfg.setDirectoryForTemplateLoading( new File("WebRoot/WEB-INF/temp"));
	        cfg.setObjectWrapper(new DefaultObjectWrapper());
	        Template temp = cfg.getTemplate("dao.ftl");
	        for(String table: models){
		        Map<String,String> root = new HashMap<String,String>();
		        root.put("sname", table.substring(table.lastIndexOf(".")+1));
		        String fileName="src/"+table.replaceAll("\\.", "/").replace("model", "dao/impl")+"DaoImpl.java";
		        System.out.println(fileName);
		        Writer out = new PrintWriter(new File(fileName));
		        temp.process(root, out);
		        out.flush();
	        }
			
		} catch (IOException e) {
			e.printStackTrace();
		} catch (TemplateException e) {
			e.printStackTrace();
		}
	}
 
}
