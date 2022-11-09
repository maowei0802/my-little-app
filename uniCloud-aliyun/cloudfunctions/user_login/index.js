'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	const { loginName, password, phone, type } = event;
	const { affectedDocs, data } = await db.collection('user')
	.aggregate()
	.match(type === 'account' ? { loginName, password } : { phone })
	.end();
	let sendData = {},
		msg = '';
	if (affectedDocs) {
		sendData = {
			code: 0,
			msg: '登录成功',
			data: data[0],
		}
	} else {
		sendData = {
			code: 1,
			msg: type === 'account' ? '获取用户信息失败，请检查用户名或密码' : '验证码或手机号码错误'
		}
	}
	//返回数据给客户端
	return sendData;
};
