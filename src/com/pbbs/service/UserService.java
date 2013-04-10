package com.pbbs.service;

import java.util.List;

import com.pbbs.model.User;

/**
 * 用户业务接口
 */
public interface UserService {
    
    /**
     * 保存User
     * @param User
     */
  public  void saveUser(User model);
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
 
  public boolean judgeUserExtis(String userName);
}