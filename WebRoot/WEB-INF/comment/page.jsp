<%@ page language="java" contentType="text/html; charset=UTF-8"  pageEncoding="UTF-8"%>
<%@ taglib uri="/struts-tags" prefix="s"%>
<html>
<body>
	<script type="text/javascript">
		function jumpPage(page){
			 document.getElementById("page-page").value=page;
			 document.getElementById("page-form").submit();
		}
	</script>
	${request.requestURI}
	<form action="${requestScope.requestURI}" id="page-form" method="post">
		<s:iterator var="para" value="pageParam">
			<input type="hidden" value="${para.value}" name="${para.name}">
		</s:iterator>
		
	<s:if test="page>1">
		<a href="javascript:void(0)"  onclick="jumpPage(1)">首页</a>
		<a href="javascript:void(0)"  onclick="jumpPage(${page-1})">上一页</a>
	</s:if><s:else>
		首页 
		上一页
	</s:else>
	<s:if test="page<lists.totalPages">
		<a href="javascript:void(0)" onclick="jumpPage(${page+1})">下一页</a>
		<a href="javascript:void(0)" onclick="jumpPage(${lists.totalPages})">尾页</a>
	</s:if><s:else>
		下一页
		尾页
	</s:else>

	   每页显示 ${size}
	 <select name="size">
	 	<option value="10" ${size==10?'selected="selected"':''} >10</option>
	 	<option value="20" ${size==20?'selected="selected"':''}>20</option>
	 	<option value="30" ${size==30?'selected="selected"':''}>30</option>
	 	<option value="40" ${size==40?'selected="selected"':''}>40</option>
	 </select>
	 快速跳转到
	 <input name="page" id="page-page" value="${page}" size=4 /> 
	 共${lists.totalPages}页
	 <input type="submit" value="跳转" />   
	</form>
</body>
</html>