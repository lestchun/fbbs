package com.pbbs.service.impl;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pbbs.dao.MessageDao;
import com.pbbs.dao.ModulDao;
import com.pbbs.dao.UserMassDao;
import com.pbbs.model.Message;
import com.pbbs.model.Modul;
import com.pbbs.model.UserMass;
import com.pbbs.service.UserMassService;

/**
 * UserMass业务服务实现类
 */
@Service("UserMassService")
@Transactional
public class UserMassServiceImpl implements UserMassService{
    
    
    @Autowired UserMassDao dao;//注入UserMassDao
    @Autowired MessageDao mdao;
    @Autowired ModulDao  modao;
//    @Autowired MassDao madao;
    
    
    @Transactional(readOnly=false)
    public int saveUserMass(UserMass model) {
//    	Mass m= madao.findOne(model.getModul().getMass().getId());
//		 Integer num=m.getNum();
//		 num=null==num?1:num+1;
//		 m.setNum(num);
//		 madao.save(m);
    	//0.未通过。1已通过。2 申请中
         List<UserMass> um=dao.findByUserIdAndModul(model.getUser().getId(), model.getModul().getId());
         if(null!=um&&um.size()>0){
        	String v= um.get(0).getVerify();
        	if("1".equals(v)){
        		return 1;
        	}else if("2".equals(v)){
        		return 2;
        	}
         }
         model.setVerify("2");
         dao.save(model);
         Modul m=modao.findOne(model.getModul().getId());
         String rid="-1,"+m.getUser().getId()+","+m.getMass().getUser().getId();
         Message ms= new Message();
         
         ms.setSendTime(new Date());
         ms.setRevicesUser(rid);
         ms.setMsg("用户"+model.getUser().getUsername()+"在"+new Date()+"申请加入"+m.getMass().getName()+","+m.getName());
         
         mdao.saveMessage(ms);
         return 0;
    }

    @Transactional(readOnly=true)
    public UserMass findUserMassById(Integer id) {
        return dao.findOne(id);
    }

    
    @Transactional(readOnly=false)
    public void updateUserMass(UserMass model) {
        dao.save(model);
    }

    @Transactional(readOnly=false)
    public void deleteUserMassById(Integer id) {
        dao.delete(id);
    }
    @Transactional(readOnly=true)
	public Page<UserMass> findUserMassByUserAndVef(UserMass model, Pageable page) {
		return dao.findByUserAndStatuc(model, page);
	}
    
}