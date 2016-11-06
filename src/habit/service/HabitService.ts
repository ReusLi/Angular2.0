import { Injectable } from '@angular/core';

//服务类 用于通信 正常开发中应该用于处理ajax等请求操作 或 其他逻辑操作
@Injectable()
export class HabitService {
	//左边nav的选项id和name
	id : number ; 
	name : string ;

	constructor() {
		
	}
	//模拟选择nav项后返回的数据 
	getContentList(id){
		let contentList = [];
		switch (id) {
			case 1:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，AAAA。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，AAAAAA。","resourceId":null},{"studentId":null,"contentId":"2012","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢观看“人与自然”、“智慧树”等科学类节目。","resourceId":null}];
			break;
			case 2:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，BBB。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，BBBBBB。","resourceId":null},{"studentId":null,"contentId":"2012","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢观看“人与自然”、“智慧树”等科学类节目。","resourceId":null},{"studentId":null,"contentId":"2013","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢制作小发明。","resourceId":null}];
			break;
			case 3:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，CCC。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，CCCCCC。","resourceId":null}];
			break;
			case 4:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，DDD。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，DDDDDD。","resourceId":null},{"studentId":null,"contentId":"2012","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢观看“人与自然”、“智慧树”等科学类节目。","resourceId":null},];
			break;
			case 5:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，EEE。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，EEEEEE。","resourceId":null},{"studentId":null,"contentId":"2012","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢观看“人与自然”、“智慧树”等科学类节目。","resourceId":null},{"studentId":null,"contentId":"2013","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢制作小发明。","resourceId":null}];
			break;
			
			default:
			contentList = [{"studentId":null,"contentId":"2010","subject":"","type":1,"subType":1,"time":"2016-11-02 13:50:09","week":0,"content":"对事物有好奇心，NNN。","resourceId":null},{"studentId":null,"contentId":"2011","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"遇到问题自己主动查找资料，NNNNNNN。","resourceId":null},{"studentId":null,"contentId":"2012","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢观看“人与自然”、“智慧树”等科学类节目。","resourceId":null},{"studentId":null,"contentId":"2013","subject":"","type":1,"subType":1,"time":"2016-11-04 22:01:13","week":0,"content":"喜欢制作小发明。","resourceId":null}];
			break;
		};
		return JSON.parse(JSON.stringify( contentList ));
	}
}