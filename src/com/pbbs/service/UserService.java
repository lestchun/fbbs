package com.pbbs.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.User;
import com.pbbs.vo.UserVO;

/**
 * 用户业务接口
 */

public interface UserService {
    
    /**
     * 保存User
     * @param User
     */
  public  void saveUser(User model);
  public void av(User u);
  /**
   * 批量保存用户
   * @param model
   */
  public  void saveUser(List<User> model);
    
    /**
     * 根据id查找User
     * @param id
     * @return
     * 
     */
   public User findUserById(Integer id);
    
    /**
     * 更新User
     * @param User
     */
  public  void updateUser(User model);
    
    /**
     * 根据ID删除User
     * @param id
     */
  public  void deleteUserById(Integer id);
    /**
     * 通过用户名密码查找用户
     * @param user
     * @return
     */
  public User findUserByUserNameAndPassword(User user);
 /**
  * 判断用户名是否存在
  * @param userName
  * @return
  */
  public boolean judgeUserExtis(String userName);
  /**
   * 找出受欢迎的用户
   * @param page
   * @return
   */
  public Page<User> listWelUser(Pageable page) ;
  /**
   * 找出受欢迎的用户
   * @param type  类别 0整站  1 社团  2 部门
   * @param id			id
   * @param page
   * @return
   */
  public Page<UserVO> listWelUserVO(int type,Integer id,Pageable page) ;
 
  
  public User findUserByUserNameAndUserName(User user);
 
  
}
