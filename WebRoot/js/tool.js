/**
 * 通过表单的Id获得表单里面不为空的键值对
 * @param formId
 * @returns 不为空的键值对
 */
function getObjForm(formId){
	var str = 	$("#"+formId).serialize()  ;
	
	str=str.split("&");
	
	var obj={};
	
	for(var i=0;i<str.length;i++){
		
		var os =  str[i].split("=");
		
		if(""!=os[1]){
			obj[os[0]]=decodeURI(os[1]);
		}
		
	}
	return obj;
}

function formReset(formId,data){
	var obj=getObjForm(formId);
	if(!data){
		data={};
	}
	for(var s in obj){
		if(!data[s]){
			data[s]="";
		}
	}
	$("#"+formId).form("load",data);
}


