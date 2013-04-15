package com.pbbs.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.BbsDao;
import com.pbbs.dao.ModulDao;
import com.pbbs.dao.UserDao;
import com.pbbs.dao.UserMassDao;
import com.pbbs.dao.VisiablelyDao;
import com.pbbs.model.Bbs;
import com.pbbs.model.Modul;
import com.pbbs.model.User;
import com.pbbs.model.UserMass;
import com.pbbs.model.Visiablely;
import com.pbbs.service.VisiablelyService;

/**
 * Visiablely业务服务实现类
 */
@Service("VisiablelyService")
@Transactional
public class VisiablelyServiceImpl implements VisiablelyService{
    
    
    @Autowired VisiablelyDao dao;//注入VisiablelyDao
    @Autowired UserDao userdao;
    @Autowired UserMassDao umdao;
    @Autowired BbsDao bbsdao;
    @Autowired ModulDao mdao;
    @Transactional
    public void saveVisiablely(Visiablely model) {
        dao.save(model);
        
    }

    @Transactional(readOnly=true)
    public Visiablely findVisiablelyById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional
    public void updateVisiablely(Visiablely model) {
        dao.save(model);
    }

    @Transactional
    public void deleteVisiablelyById(Integer id) {
     
    	dao.delete(id);
    }
    
    /**
	 * 判断用户是否具有权限
	 * 可见性类型 1所有人可见 2.所有注册用户可见 3 所有可用团员 4 指定部门 5 指定人
     */
    public boolean judgePower(Integer id,Integer userId,Integer types ,Integer mbid) {
		//User user= user
		if(null!=id){
			Visiablely v= dao.findOne(id);		 
			if(null!=v){						//找到可见性 才能 有权限看到
				String type=v.getType();
				if("1".equals(type)){		//  所有人可见
					return true;
				}else{
					if(null!=userId){				
						User user= userdao.findOne(userId);
						if(null!=user){							
							if("0".equals(user.getType())){			//管理员可见
								return true;
							}
							if(!"1".equals(user.getStatus())){			//用户是否激活
								
								if("2".equals(type)){					//注册并激活用户可见
									return true;
								}
								
								if(new Integer(1).equals(types)){    //  判断部门权限
									
									Modul m= mdao.findOne(mbid);
									
									if(m.getUser().getId().equals(id)){   //模块管理员
										return true;
									}
									
									if(m.getMass().getUser().getId().equals(id)){  //社团管理员
										return true;
									}
									
									if("3".equals(type)){								//社团成员可见
										List<UserMass> ums= umdao.findByUserIdAndMassId(id, m.getMass().getId());
										if(null!=ums&&0!=ums.size()){
											return true;
										}
									}
									
								}else{   //判断帖子权限
									
									Bbs m= bbsdao.findOne(mbid);
									
									if(m.getUser().getId().equals(id)){   //帖子发表人
										return true;
									}
									
									if(m.getModul().getUser().getId().equals(id)){  //部门管理员
										return true;
									}
									
									if(m.getModul().getMass().getUser().getId().equals(id)){  //社团管理员
										return true;
									}
									
									if("3".equals(type)){								//社团成员可见
										List<UserMass> ums= umdao.findByUserIdAndMassId(id, m.getModul().getMass().getId());
										if(null!=ums&&0!=ums.size()){
											return true;
										}
									}
									
								}
								
								if("4".equals(type)){										//判断是否在指定部门
									List<UserMass> ums= umdao.findByUserIdAndMasss(id, v.getUserIds());
									if(null!=ums&&0!=ums.size()){
										return true;
									}
								}
								
								if("5".equals(type)){									//判断指定人是否可见
									return v.getUserIds().matches("("+id+",.*)|(.*,"+id+",.*)|(.*,"+id+")");
								}
							}
						}
					}
				}
			}
			
		}
		return false;
	}
    public static void main(String[] args) {
		
    	String ids="2,3,4,5,6,7,8,11,12,13,20";
    	String searchId="20";
    	System.out.println(ids.matches("("+searchId+",.*)|(.*,"+searchId+",.*)|(.*,"+searchId+")"));
    	
	}
}
