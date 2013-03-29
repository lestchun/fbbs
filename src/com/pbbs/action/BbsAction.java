package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Bbs;
import com.pbbs.service.BbsService;

@Controller("BbsAction")
@Scope("prototype")
public class BbsAction extends BaseAction<Bbs> {
	
	private static final long serialVersionUID = -5057452173171138135L;
	@Autowired BbsService service;
}
