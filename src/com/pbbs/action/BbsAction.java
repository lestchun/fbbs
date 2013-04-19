package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.model.Modul;
import com.pbbs.model.Reply;
import com.pbbs.model.User;
import com.pbbs.service.BbsService;
import com.pbbs.service.ModulService;
import com.pbbs.service.ReplyService;
import com.pbbs.service.UserService;
import com.pbbs.service.VisiablelyService;
import com.pbbs.tool.Result;

@Controller("BbsAction")
@Scope("prototype")
public class BbsAction extends BaseAction<Bbs> {
	
	private static final long serialVersionUID = -5057452173171138135L;
	@Autowired BbsService service;
	@Autowired VisiablelyService vservice;
	@Autowired ReplyService rservice;
	@Autowired UserService uservice;
	@Autowired ModulService mservice;
	public BbsAction() {
		model= new Bbs();
	}
	
	public String addBBs(){
		result=new Result();
		result.setResultCode(ERROR_CODE);
		if(null==model){
			result.setMsg("你没有要发表的帖子");
		}else{
			Modul modul= mservice.findModulById(model.getModul().getId());
			if(null==modul){
				result.setMsg("你要发表的部门不存在");
			}else{
				User user=getLoginUser(uservice);
				if(null==user||!vservice.judgePower(modul.getVisiablely().getId(),user.getId()	, 1, modul.getId())){//判断部门
					result.setMsg("对不起你没有权限在该部门发表帖子");
				}else{
					
					model.setUser(user);
					
					service.saveBbs(model);
					
					result.setResultCode(SUCCESS_CODE);
				}
			}
		}
		try {
			if(ERROR_CODE.equals(result.getResultCode())){
				result.setMsg(URLEncoder.encode(result.getMsg(),"utf-8"));
			}
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		return SUCCESS;
	}
	
	public String goAddBBs(){
		result=new Result();
		result.setResultCode(ERROR_CODE);
		if(null==pid){
			result.setMsg("你没有选择帖子");
		}else{
			model=service.findBbsById(pid);
			if(null==model){
				result.setMsg("你找的帖子不存在");
			}else{
				User user=getLoginUser(uservice);
				
				if(!vservice.judgePower(model.getModul().getVisiablely().getId(), null==user?null:user.getId()	, 1, model.getModul().getId())  //判断模块权限
						||!vservice.judgePower(model.getVisiablely().getId(), null==user?null:user.getId()	, 2, model.getId())){				//判断帖子权限
					result.setMsg("对不起你没有权限访问该帖子");
					model=null;
				}else{
					Integer v=model.getViewNum();
					v=null==v?0:v;
					if(page==1){
						model.setViewNum(v+1);
						service.updateBbs(model);
					}
					Reply r= new Reply();
					r.setBbs(model);
					model=service.findBbsById(pid);
					list=rservice.findReply(r, getPages());
					result.setResultCode(SUCCESS_CODE);
				}
			}
		}
		if(result.getResultCode().equals(ERROR_CODE)){
			return ERROR;
		}
		return SUCCESS;
	}
	
	/**
	 * 列出用户发表的帖子
	 * @return
	 */
	public String listUserBBs(){
		
		result=new Result();
		result.setResultCode(ERROR_CODE);
		User user=getLoginUser(uservice);
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
		if(null==model){
			model= new Bbs();
		}
		model.setVeify("0");
		lists=service.findBbsByUser(model,new PageRequest(page,size, Direction.DESC, "replayNum"));
		return SUCCESS;
	}
	/**
	 * 最新更新
	 * @return
	 */
	public String getLastUpdate(){
		if(null==model){
			model= new Bbs();
		}
		model.setVeify("0");
		lists=service.findBbsByUser(model,new PageRequest(page, size, Direction.DESC, "updateTime"));
		return SUCCESS;
	}
	
	/**
	 * 获得最新置顶帖子
	 * @return
	 */
 
	public String getPostHead(){
		if(null==model){
			model= new Bbs();
		}
		model.setVeify("0");
		model.setStatus(1);
		lists=service.findBbsByUser(model,new PageRequest(page, size, Direction.DESC, "updateTime"));
		return SUCCESS;
	}
	/**
	 * 获得推荐
	 * @return
	 */
	public String getRecommend(){
		if(null==model){
			model= new Bbs();
		}
		model.setVeify("0");
		model.setStatus(2);
		lists=service.findBbsByUser(model,new PageRequest(page, size, Direction.DESC, "updateTime"));
		return SUCCESS;
	}
	/**
	 * 加精
	 * @return
	 */
	public String getDigest(){
		if(null==model){
			model= new Bbs();
		}
		model.setVeify("0");
		model.setStatus(3);
		lists=service.findBbsByUser(model,new PageRequest(page, size, Direction.DESC, "updateTime"));
		return SUCCESS;
	}
	
	
	private Page<Reply> list ;
	private Integer mid;
	private Integer pid;
	private String fowardURL;
	public Integer getMid() {
		return mid;
	}

	public void setMid(Integer mid) {
		this.mid = mid;
	}

	public Integer getPid() {
		return pid;
	}

	public void setPid(Integer pid) {
		this.pid = pid;
	}

	public Page<Reply> getList() {
		return list;
	}

	public void setList(Page<Reply> list) {
		this.list = list;
	}

	public String getFowardURL() {
		return fowardURL;
	}

	public void setFowardURL(String fowardURL) {
		this.fowardURL = fowardURL;
	}
	
}
