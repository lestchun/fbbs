package com.pbbs.action;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.opensymphony.xwork2.ActionSupport;
import com.pbbs.tool.Result;

@SuppressWarnings("serial")
public class BaseAction<T> extends ActionSupport implements SessionAware{
	
	protected PageRequest page;
	
	protected Page<T> lists;
	
	protected Result result;
	
	protected Map<String, Object> session ;
	
	public void setSession(Map<String, Object> session) {
		this.session=session;
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
	public Result getResult() {
		return result;
	}

	public void setResult(Result result) {
		this.result = result;
	}
}
