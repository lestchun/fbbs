package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Mass;
import com.pbbs.service.MassService;
import com.pbbs.tool.Result;
@Controller("MassAction")
@Scope("prototype")
public class MassAction extends BaseAction<Mass> {
	
	public MassAction() {
		model=new Mass();
	}

	private static final long serialVersionUID = -932903908572266190L;
	@Autowired MassService service;
	
	public String listShortMass(){
		lists=service.ListMass(null,null, new PageRequest(0, 30));
		return SUCCESS;
	}
	
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
	
}
