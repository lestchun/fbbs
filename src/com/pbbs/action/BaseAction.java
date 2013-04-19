package com.pbbs.action;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.Cookie;

import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang.math.NumberUtils;
import org.apache.struts2.ServletActionContext;
import org.apache.struts2.interceptor.SessionAware;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.opensymphony.xwork2.ActionSupport;
import com.pbbs.model.User;
import com.pbbs.service.UserService;
import com.pbbs.tool.Encrypter;
import com.pbbs.tool.Result;

@SuppressWarnings("serial")
public class BaseAction<T> extends ActionSupport implements SessionAware {
	private final String SIGN_KEY="k=701303923&s=&t=1366187809&b=";
	public final static int DEFAULT_PAGE_SIZE = 20;
	public final static Map<String, Object> cache = new HashMap<String, Object>();
	protected Integer page = 1;
	protected Integer size = DEFAULT_PAGE_SIZE;

	protected Page<T> lists;
	protected List<Map<String, String>> pageParam;

	protected Result result;

	protected T model;

	protected String id;

	protected Map<String, Object> session;

	public void setSession(Map<String, Object> session) {
		this.session = session;
	}

	public void add2Cache(String key, Object value) {
		cache.put(key, value);
	}

	public Object getFromCache(String key) {
		return cache.get(key);
	}

	public static void main(String[] args) {
		// System.out.println(Encrypter.md5s("admin"+"1234").length());
	}
	/**
	 * 从session中获得用户，
	 * 如果session 中不存在则从cookie 中读取
	 * @param uservice
	 * @return
	 */
	public User getLoginUser(UserService uservice) {
		Object obj = session.get("user");
		if (null == obj) {
			Cookie[] cookies = ServletActionContext.getRequest().getCookies();
			if (cookies != null) {
				String userId=null;
				String sign=null;
				for (Cookie cookie : cookies) {
					if ("userId".equals(cookie.getName())) {
						String value = cookie.getValue();
						if (StringUtils.isNotBlank(value)) {
							userId = value;
						}
					}
					if ("temp".equals(cookie.getName())) {
						String value = cookie.getValue();
						if (StringUtils.isNotBlank(value)) {
							sign = value;
						}
					}
				}
				if(StringUtils.isNotBlank(userId)&&StringUtils.isNotBlank(sign)&&NumberUtils.isNumber(userId)){
					User u=uservice.findUserById(new Integer(userId));
					try {
						
						if(sign.equals(URLEncoder.encode(SIGN_KEY+Encrypter.md5s(u.getUsername()+u.getPassword()),"utf-8"))){
							session.put("user", u);
							return u;
						}
					} catch (UnsupportedEncodingException e) {
						e.printStackTrace();
					}
				}
			}
			return null;
		}
		return (User) obj;
	}

	public void setLoginUser(User model) {
		if(null==model){
			addCookie("user", "");
			addCookie("userId", "");
			addCookie("temp", "");
			addCookie("sso", "");
			session.put("user", null);
		}else{
			String user="w="+model.getUsername()+"&id="+model.getId()+"&ac=1&f=1";
			String temp=SIGN_KEY+Encrypter.md5s(model.getUsername()+model.getPassword());
			String sso="r=895328131&sid=&wsid=582A2642CEDAC74D55325AA81C52E261";
			addCookie("user", user);
			addCookie("userId", ""+model.getId());
			addCookie("temp", temp);
			addCookie("sso", sso);
			session.put("user", model);
		}
	}
	public void addCookie(String name,String value){
        //创建Cookie
//		cookie.put(name, value);
        Cookie cookie;
		try {
			cookie = new Cookie(name, URLEncoder.encode(value,"utf-8"));
			cookie.setMaxAge(60*60*24*365);
			ServletActionContext.getResponse().addCookie(cookie);
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
    }
    
    public void removeCookie(String name){
        addCookie(name,"TEST");//“TEST”可以是任意非空字段
    }
	public Pageable getPages() {
		return new PageRequest(page, size);
	}

	public Page<T> getLists() {
		return lists;
	}

	public void setLists(Page<T> lists) {
		this.lists = lists;
	}

	public Result getResult() {
		return result;
	}

	public void setResult(Result result) {
		this.result = result;
	}

	public T getModel() {
		return model;
	}

	public void setModel(T model) {
		this.model = model;
	}

	public List<Map<String, String>> getPageParam() {
		return pageParam;
	}

	public void setPageParam(List<Map<String, String>> pageParam) {
		this.pageParam = pageParam;
	}

	public Integer getSize() {
		return size;
	}

	public void setSize(Integer size) {
		this.size = size;
	}

	public void setPage(Integer page) {
		this.page = page;
	}

	public Integer getPage() {
		return page;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
  
}
