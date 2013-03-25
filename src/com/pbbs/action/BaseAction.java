package com.pbbs.action;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class BaseAction<T> extends ActionSupport{
	protected PageRequest page;
	protected Page<T> lists;
	
	public static void main(String[] args) {
		
		 PageRequest page = new PageRequest(1, 20);
		 System.out.println(page.getOffset());
		 
		 //
		
	}
	
	
	public PageRequest getPage() {
		return page;
	}
	public void setPage(PageRequest page) {
		this.page = page;
	}
	public Page<T> getLists() {
		return lists;
	}
	public void setLists(Page<T> lists) {
		this.lists = lists;
	}
}
