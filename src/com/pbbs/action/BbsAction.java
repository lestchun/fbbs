package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.service.BbsService;

@Controller("BbsAction")
@Scope("prototype")
public class BbsAction extends BaseAction<Bbs> {
	
	private static final long serialVersionUID = -5057452173171138135L;
	@Autowired BbsService service;
	
	public BbsAction() {
		model= new Bbs();
	}

	public String test_01(){
		System.out.println(model.getClass());
		
		return SUCCESS;
	}
	
	public static void main(String[] args) {
		
		 
		
	}
	
	/**
	 * 根据部门列的帖子
	 * @return
	 */
	public String listModulBbs(){
		if(null!=mid){
			lists=service.findBbsByModul(mid, 0, getPages());
		}
		return SUCCESS;
	}
	
	public String getHotBbs(){
		lists=service.find(new PageRequest(1, 50, Direction.DESC, "replayNum"));
		return SUCCESS;
	}
	
	public String getLastUpdate(){
		lists=service.find(new PageRequest(1, 50, Direction.DESC, "updateTime"));
		return SUCCESS;
	}
	
	private Integer mid;

	public Integer getMid() {
		return mid;
	}

	public void setMid(Integer mid) {
		this.mid = mid;
	}

}
