package com.pbbs.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.pbbs.model.Mass;
import com.pbbs.model.User;

/**
 * 用户业务接口
 */
public interface MassService {
    
    /**
     * 保存Mass
     * @param Mass
     */
  public  void saveMass(Mass model);
    
    /**
     * 根据id查找Mass
     * @param id
     * @return
     */
   public Mass findMassById(Integer id);
    
    /**
     * 更新Mass
     * @param Mass
     */
  public  void updateMass(Mass model);
    
    /**
     * 根据ID删除Mass
     * @param id
     */
  public  void deleteMassById(Integer id);
   
  public Page<Mass> ListMass(User user ,Integer vify, Pageable page);
}