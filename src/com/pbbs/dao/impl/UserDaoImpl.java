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
import com.pbbs.vo.UserVO;

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
		String hql="select u.*,100 as reply  from User u left join (select b.uid , SUM(b.replayNum) as rn from Bbs b group by b.uid ) as c on (c.uid=u.id) order by c.rn desc ";
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

	@SuppressWarnings("unchecked")
	public Page<UserVO> listWelUserVO(int type,Integer id,Pageable page)  {
		String  sql="";
		switch (type) {
		case 1:		//社团活跃用户
			sql="SELECT us.*,h.rm reply FROM usermass um LEFT JOIN USER us ON(um.uid=us.id) LEFT JOIN modul mo ON(mo.id=um.mid) LEFT JOIN( SELECT b.uid uid,SUM(b.replayNum) rm FROM  bbs b LEFT JOIN modul m ON(b.mid=m.id)  WHERE m.mid="+id+" AND b.status=0 GROUP BY b.uid ) h ON(h.uid=us.id) WHERE  um.mid="+id+" AND  us.type=2 ORDER BY h.rm DESC";
			break;
		case 2:		//部门活跃用户
			sql="SELECT us.*,h.rm reply FROM usermass um LEFT JOIN USER us ON(um.uid=us.id) LEFT JOIN modul mo ON(mo.id=um.mid) LEFT JOIN( SELECT b.uid uid,SUM(b.replayNum) rm FROM  bbs b WHERE b.mid="+id+" AND b.status=0 GROUP BY b.uid ) h ON(h.uid=us.id) WHERE  um.mid="+id+" AND  us.type=2 ORDER BY h.rm DESC";
			break;
		default:
			sql="select u.*,c.rn as reply  from User u left join (select b.uid , SUM(b.replayNum) as rn from Bbs b group by b.uid ) as c on (c.uid=u.id) where u.type=2 order by c.rn desc ";
			break;
		}
		Query query=em.createNativeQuery(sql,UserVO.class);
		
		Page<UserVO> pa= new PageModel<UserVO>(query.setFirstResult(page.getOffset()-page.getPageSize()).setMaxResults(page.getPageSize()).getResultList(),100,1);
		return pa;
		
	}

	public void av(User user) {
		em.getTransaction().begin();
		em.persist(user);
		em.getTransaction().commit();
	}
	
}
