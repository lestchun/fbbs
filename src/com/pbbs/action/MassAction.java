package com.pbbs.action;

 
import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Mass;
import com.pbbs.model.Modul;
import com.pbbs.model.User;
import com.pbbs.model.UserMass;
import com.pbbs.service.MassService;
import com.pbbs.service.UserMassService;
import com.pbbs.service.UserService;
import com.pbbs.tool.Result;
@Controller("MassAction")
@Scope("prototype")
public class MassAction extends BaseAction<Mass> {
	
	public MassAction() {
		model=new Mass();
	}

	private static final long serialVersionUID = -932903908572266190L;
	
	@Autowired MassService service;
	@Autowired UserService uservice;
	@Autowired UserMassService umservice;
	
	public String  joinMass(){
		
		User u=getLoginUser(uservice);
		result= new Result();
		result.setResultCode(ERROR_CODE);
		if(null==u){
			result.setMsg("额 你没有登录");
		}else if(!NumberUtils.isNumber(mids)){
			result.setMsg("你没有输入要加入的部门");
		}else{
			UserMass um= new UserMass();
			um.setUser(u);
			um.setModul(new Modul(new Integer(mids)));
			int v=umservice.saveUserMass(um);
			if(1==v){
				result.setMsg("你已经加入该社团");
			}else if(2==v){
				result.setMsg("系统已经提醒管理员，请耐心等待");
			}else{
				result.setMsg("加入成功");
				result.setResultCode(SUCCESS_CODE);
			}
		}
		return SUCCESS;
	}
	
	/**
	 * 社团列表
	 * @return
	 */
	public String listShortMass(){
		lists=service.ListMass(null,null, new PageRequest(0, 30));
		return SUCCESS;
	}
	
	/**
	 * 进入社团
	 * @return
	 */
	public String loadMass(){
		result= new Result();
 
		result.setResultCode(ERROR_CODE);
		if(StringUtils.isBlank(id)){
			result.setMsg("你没有选择社团");
		}else{
			model=service.findMassById(NumberUtils.toInt(id));
			if(null==model){
				result.setMsg("你找的社团不存在");
			}else{
				result.setResultCode(SUCCESS_CODE);
			}
		}
		return SUCCESS;
	}
	/**
	 * 社团排行
	 * @return
	 */
	public String massRank(){
		lists=service.ListMass(null,null, new PageRequest(0, 10,Direction.DESC,"num"));
		return SUCCESS;
				
	}
	private String mids;

	public String getMids() {
		return mids;
	}

	public void setMids(String mids) {
		this.mids = mids;
	}
	
}
