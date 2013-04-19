package com.pbbs.tool;

 import java.security.MessageDigest;

import javax.crypto.KeyGenerator;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;
   
 /** 
  * 基础加密组件 
  *  
  */  
 public abstract class Encrypter {  
     public static final String KEY_SHA = "SHA";  
     public static final String KEY_MD5 = "MD5";  
   
     /** 
      * MAC 算法可选以下多种算法 
      *  
      * <pre> 
      * HmacMD5  
      * HmacSHA1  
      * HmacSHA256  
      * HmacSHA384  
      * HmacSHA512 
      * </pre> 
      */  
     public static final String KEY_MAC = "HmacMD5";  
   
     /** 
      * BASE64 解密 
      *  
      * @param key 
      * @return 
      * @throws Exception 
      */  
     public static byte[] decryptBASE64(String key) throws Exception {  
         return (new BASE64Decoder()).decodeBuffer(key);  
     }  
   
     /** 
      * BASE64 加密 
      *  
      * @param key 
      * @return 
      * @throws Exception 
      */  
     public static String encryptBASE64(byte[] key) throws Exception {  
         return (new BASE64Encoder()).encodeBuffer(key);  
     }  
   
     /** 
      * MD5 加密 
      *  
      * @param data 
      * @return 
      * @throws Exception 
      */  
     public static byte[] encryptMD5(byte[] data) throws Exception {  
   
         MessageDigest md5 = MessageDigest.getInstance(KEY_MD5);  
         md5.update(data);  
   
         return md5.digest();  
   
     }  
   
     /** 
      * SHA 加密 
      *  
      * @param data 
      * @return 
      * @throws Exception 
      */  
     public static byte[] encryptSHA(byte[] data) throws Exception {  
   
         MessageDigest sha = MessageDigest.getInstance(KEY_SHA);  
         sha.update(data);  
   
         return sha.digest();  
   
     }  
   
     /** 
      * 初始化HMAC密钥 
      *  
      * @return 
      * @throws Exception 
      */  
     public static String initMacKey() throws Exception {  
         KeyGenerator keyGenerator = KeyGenerator.getInstance(KEY_MAC);  
   
         SecretKey secretKey = keyGenerator.generateKey();  
         return encryptBASE64(secretKey.getEncoded());  
     }  
   
     /** 
      * HMAC 加密 
      *  
      * @param data 
      * @param key 
      * @return 
      * @throws Exception 
      */  
     public static byte[] encryptHMAC(byte[] data, String key) throws Exception {  
   
         SecretKey secretKey = new SecretKeySpec(decryptBASE64(key), KEY_MAC);  
         Mac mac = Mac.getInstance(secretKey.getAlgorithm());  
         mac.init(secretKey);  
   
         return mac.doFinal(data);  
   
     }  
     
     /**
      * md5加密方法
      * @param plainText
      * @return
      */
	public static String md5s(String plainText) {
		try {
			MessageDigest md = MessageDigest.getInstance(KEY_MD5);
			md.update(plainText.getBytes());
			byte b[] = md.digest();
			int i;
			StringBuffer buf = new StringBuffer("");
			for (int offset = 0; offset < b.length; offset++) {
				i = b[offset];
				if (i < 0)
					i += 256;
				if (i < 16)
					buf.append("0");
				buf.append(Integer.toHexString(i));
			}
			return buf.toString();// 32位的加密
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
     
     /**
      * md5加密方法,utf-8
      * @param plainText
      * @return
      */
	public static String encoderMd5(String plainText) {
		try {
			MessageDigest md = MessageDigest.getInstance(KEY_MD5);
			md.update(plainText.getBytes("utf-8"));
			byte b[] = md.digest();
			int i;
			StringBuffer buf = new StringBuffer("");
			for (int offset = 0; offset < b.length; offset++) {
				i = b[offset];
				if (i < 0)
					i += 256;
				if (i < 16)
					buf.append("0");
				buf.append(Integer.toHexString(i));
			}
			return buf.toString();// 32位的加密
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}
	}
     
 }