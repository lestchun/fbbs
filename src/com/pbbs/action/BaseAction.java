package com.pbbs.action;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.opensymphony.xwork2.ActionSupport;
import com.pbbs.model.User;
import com.pbbs.tool.Result;

@SuppressWarnings("serial")
public class BaseAction<T> extends ActionSupport implements SessionAware{
	public final static int DEFAULT_PAGE_SIZE=20;
	public final static Map<String, Object> cache= new HashMap<String, Object>();
	protected Integer page=1;
	protected Integer size=DEFAULT_PAGE_SIZE;
	
	protected Page<T> lists;
	protected List<Map<String,String>> pageParam;
	
	protected Result result; 
	
	protected T model;
	
	protected String id;
	
	protected Map<String, Object> session ;
	
	public void setSession(Map<String, Object> session) {
		this.session=session;
	}
	
	public void add2Cache(String key,Object value){
		cache.put(key, value);
	}
	
	public Object getFromCache(String key){
		return cache.get(key);
	}
	
	public User getLoginUser(){
		Object obj=session.get("user");
		if(null==obj){
			return null;
		}
		return (User)obj;
	}
	
	public void setLoginUser(User user){
		session.put("user", user);
	}
	
	public Pageable getPages() {
		return new PageRequest(page, size);
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

	public T getModel() {
		return model;
	}

	public void setModel(T model) {
		this.model = model;
	}

	public List<Map<String, String>> getPageParam() {
		return pageParam;
	}

	public void setPageParam(List<Map<String, String>> pageParam) {
		this.pageParam = pageParam;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getPage() {
		return page;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
}
