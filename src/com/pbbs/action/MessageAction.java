package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Message;
import com.pbbs.service.MessageService;
@Controller("MessageAction")
@Scope("prototype")
public class MessageAction extends BaseAction<Message> {
	
	private static final long serialVersionUID = 4034372469534334460L;
	@Autowired MessageService service;
	public MessageAction() {
		model=new Message();
	}
	
	public String getSystemMessage(){
		lists=service.searchMessage(null, getPages());
		return SUCCESS;
	}
	
}
