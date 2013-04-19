package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.model.Modul;
import com.pbbs.model.User;
import com.pbbs.service.BbsService;
import com.pbbs.service.ModulService;
import com.pbbs.service.UserService;
import com.pbbs.service.VisiablelyService;
import com.pbbs.tool.Result;
@Controller("ModulAction")
@Scope("prototype")
public class ModulAction extends BaseAction<Modul> {
	private static final long serialVersionUID = -6679016546191331237L;
	@Autowired ModulService service;
	@Autowired VisiablelyService vservice;
	@Autowired BbsService bservice;
	@Autowired UserService uservice;
	private Integer pid;
	
	public ModulAction() {
		model= new Modul();
	}
	public String goPostBBs(){
		result=new Result();
		result.setResultCode(ERROR_CODE);
		if(null==pid){
			result.setMsg("你没有选择发帖的部门");
		}else{
			model= service.findModulById(pid);
			if(null==model){
				result.setMsg("你要发表的部门不存在");
			}else{
				User user=getLoginUser(uservice);
				if(null==user){
					model=null;
					result.setMsg("你没有登录");
					
				}else if(
					!vservice.judgePower(model.getVisiablely().getId(),user.getId()	, 1, model.getId())){//判断部门
					model=null;
					result.setMsg("对不起你没有权限在该部门发表帖子");
				}else{
					result.setResultCode(SUCCESS_CODE);
				}
			}
		}
		return SUCCESS;
	}
	/**
	 * 进入部门
	 * @return
	 */
	public String loadModul(){
		result= new Result();
		result.setResultCode(ERROR_CODE);
		if(StringUtils.isBlank(id)){
			result.setMsg("你没有部门");
		}else{
			model=service.findModulById(NumberUtils.toInt(id));
			if(null==model){
				result.setMsg("你找的部门不存在");
			}else{
				User user=getLoginUser(uservice);
				if(!vservice.judgePower(model.getVisiablely().getId(), null==user?null:user.getId()	, 1, model.getId())){
					model=null;
					result.setMsg("对不起您没有权限访问该部门");
				}else{
					result.setResultCode(SUCCESS_CODE);
					Bbs bbs= new Bbs();
					bbs.setVeify("0");
					bbs.setId(2);
					bbs.setViewNum(model.getId());
					list=bservice.findBbsByUser(bbs, new PageRequest(page, size, Direction.DESC, "status","updateTime"));
				}
			}
		}
		return SUCCESS;
	}
	/**
	 * 部门排行
	 * @return
	 */
	public String modulRank(){
		if(StringUtils.isNotBlank(id)){
			lists=service.modulRank(id, getPages());
		}
		return SUCCESS;
	}
	/**
	 * 进入发帖界面
	 * @return
	 */
	public String goPostBbs(){
		result= new Result();
		result.setResultCode(ERROR_CODE);
		if(StringUtils.isBlank(id)){
			result.setMsg("你没有选择发帖子的部门");
		}else{
			model=service.findModulById(NumberUtils.toInt(id));
			if(null==model){
				result.setMsg("你选择发帖子的部门不存在");
			}else{
				User user=getLoginUser(uservice);
				if(!vservice.judgePower(model.getVisiablely().getId(), null==user?null:user.getId()	, 1, model.getId())){
					model=null;
					result.setMsg("对不起您没有权限访问该部门");
				}else{
					result.setResultCode(SUCCESS_CODE);
				}
			}
		}
		return SUCCESS;
	}
	
	public String listModulUser(){
		result= new Result();
		result.setResultCode(ERROR_CODE);
		User u=getLoginUser(uservice);
		if(null==u){
			result.setMsg("你还没有登录");
		}else if(null==pid){
			result.setMsg("你没有输入请求的社团");
		}else{
			result.setData(service.listModulByUser(pid, u.getId()));
			result.setResultCode(SUCCESS_CODE);
		}
		return SUCCESS;
	}
	
	private Page<Bbs> list ;
	public Page<Bbs> getList() {
		return list;
	}

	public void setList(Page<Bbs> list) {
		this.list = list;
	}
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	
}
