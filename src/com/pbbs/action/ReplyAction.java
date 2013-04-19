package com.pbbs.action;

import static com.pbbs.tool.Result.ERROR_CODE;
import static com.pbbs.tool.Result.SUCCESS_CODE;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.model.Reply;
import com.pbbs.model.User;
import com.pbbs.service.BbsService;
import com.pbbs.service.ReplyService;
import com.pbbs.service.UserService;
import com.pbbs.service.VisiablelyService;
import com.pbbs.tool.Result;

@Controller("ReplyAction")
@Scope("prototype")
public class ReplyAction extends BaseAction<Reply> {
	
	private static final long serialVersionUID = -5057452173171138135L;
	@Autowired BbsService service;
	@Autowired VisiablelyService vservice;
	@Autowired ReplyService rservice;
	@Autowired UserService uservice;
	public ReplyAction() {
		model= new Reply();
	}
	
	public String replyBbs(){
		result=new Result();
		result.setResultCode(ERROR_CODE);
		if(null==model||null==model.getBbs()||null==model.getBbs().getId()){
			result.setMsg("你没有选择帖子");
		}else{
			Bbs bbs=service.findBbsById(model.getBbs().getId());
			User user=getLoginUser(uservice);
			if(null==bbs){
				result.setMsg("你找的帖子不存在");
			}else if(null==user){
				result.setMsg("你没有登录");
			}else{
				
				if(!vservice.judgePower(bbs.getModul().getVisiablely().getId(), user.getId()	, 1, bbs.getModul().getId())  //判断模块权限
						||!vservice.judgePower(bbs.getVisiablely().getId(), null==user?null:user.getId()	, 2, bbs.getId())){				//判断帖子权限
					result.setMsg("对不起你没有权限访问该帖子");
					
				}else{
					model.setBbs(bbs);
					model.setUser(user);
					rservice.save(model, user); 
					Map<String, String> date= new HashMap<String, String>();
					date.put("message", "添加成功");
					date.put("content", model.getContent());
					result.setData(date);
					result.setResultCode(SUCCESS_CODE);
				}
			}
		}
		return SUCCESS;
	}
}
