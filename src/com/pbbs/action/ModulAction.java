package com.pbbs.action;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;

import com.pbbs.model.Modul;
import com.pbbs.service.ModulService;
@Controller("ModulAction")
@Scope("prototype")
public class ModulAction extends BaseAction<Modul> {
	private static final long serialVersionUID = -6679016546191331237L;
	@Autowired ModulService service;
}
