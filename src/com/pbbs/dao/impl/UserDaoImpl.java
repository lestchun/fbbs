package com.pbbs.dao.impl;

import java.util.List;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import com.pbbs.dao.UserDao;
import com.pbbs.model.User;
import com.pbbs.tool.PageModel;

@Repository
public class UserDaoImpl extends BaseDao<User> implements UserDao {
	
	@Autowired
	public UserDaoImpl( EntityManagerFactory emf) {
		super(User.class, emf.createEntityManager());
	}

	public User findByUsernameAndPassword(User user) {
		List<User> list= findList("from User u where u.username=? and password=? ", new Object[]{user.getUsername(),user.getPassword()});
		if(null==list||0==list.size()){
			return null;
		}else{
			return list.get(0);
		}
	}

	public List<User> findByUserName(String userName) {
		return findList("from User u where u.username=? ", new Object[]{userName});
	}
	
	@SuppressWarnings("unchecked")
	public Page<User> listWelUser(Pageable page) {
		String hql="select u.* from User u left join (select b.uid , SUM(b.replayNum) as rn from Bbs b group by b.uid ) as c on (c.uid=u.id) order by c.rn desc ";
		Query query=em.createNativeQuery(hql,User.class);
		Page<User> pa= new PageModel<User>(query.setFirstResult(page.getOffset()-page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),100,1);
		return pa;
	}
 

	public User findByUserIdAndUsername(User user) {
		List<User> list= findList("from User u where u.username=? and password=? ", new Object[]{user.getUsername(),user.getPassword()});
		if(null==list||0==list.size()){
			return null;
		}else{
			return list.get(0);
		}
	}
	
}
