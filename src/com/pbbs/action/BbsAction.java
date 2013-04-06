package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.model.User;
import com.pbbs.service.BbsService;
import com.pbbs.tool.Result;

@Controller("BbsAction")
@Scope("prototype")
public class BbsAction extends BaseAction<Bbs> {
	
	private static final long serialVersionUID = -5057452173171138135L;
	@Autowired BbsService service;
	
	public BbsAction() {
		model= new Bbs();
	}
	
	
	public String goAddBBs(){
		
		
		
		return SUCCESS;
	}
	
	/**
	 * 列出用户发表的帖子
	 * @return
	 */
	public String listUserBBs(){
		
		result=new Result();
		result.setResultCode(ERROR_CODE);
		User user=getLoginUser();
		if(null==user){
			result.setMsg("你没有登录");
		}else{
			if(null==model){
				model= new Bbs();
			}
			model.setUser(user);
			lists=service.findBbsByUser(model, getPages());
		}
		result.setResultCode(SUCCESS_CODE);
		
		return SUCCESS;
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
	/**
	 * 获得热帖
	 * @return
	 */
	public String getHotBbs(){
		lists=service.find(new PageRequest(1, 50, Direction.DESC, "replayNum"));
		return SUCCESS;
	}
	/**
	 * 获得最新更新帖子
	 * @return
	 */
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
