package com.pbbs.service;

import com.pbbs.model.UserMass;

/**
 * 用户业务接口
 */
public interface UserMassService {
    
    /**
     * 保存UserMass
     * @param UserMass
     */
  public  void saveUserMass(UserMass model);
    
    /**
     * 根据id查找UserMass
     * @param id
     * @return
     */
   public UserMass findUserMassById(Integer id);
    
    /**
     * 更新UserMass
     * @param UserMass
     */
  public  void updateUserMass(UserMass model);
    
    /**
     * 根据ID删除UserMass
     * @param id
     */
  public  void deleteUserMassById(Integer id);
    
}