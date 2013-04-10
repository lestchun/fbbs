package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Modul;
import com.pbbs.model.User;
import com.pbbs.service.ModulService;
import com.pbbs.service.VisiablelyService;
import com.pbbs.tool.Result;
@Controller("ModulAction")
@Scope("prototype")
public class ModulAction extends BaseAction<Modul> {
	private static final long serialVersionUID = -6679016546191331237L;
	@Autowired ModulService service;
	@Autowired VisiablelyService vservice;
	
	public ModulAction() {
		model= new Modul();
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
				User user=getLoginUser();
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
				User user=getLoginUser();
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
	
}
