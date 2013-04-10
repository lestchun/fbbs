package com.pbbs.tool;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.commons.lang.StringUtils;

public class DateUtil {
	private static SimpleDateFormat smd= new SimpleDateFormat("yyyy-MM-dd");
	
	public static String formatter(Date date,String pattern){
		
		if(StringUtils.isBlank(pattern)){
			return smd.format(date);
		}else{
			return  (new SimpleDateFormat(pattern)).format(date);
		}
	}
	public static String formatter(Date date){
		return formatter(date, null);
	}
}
