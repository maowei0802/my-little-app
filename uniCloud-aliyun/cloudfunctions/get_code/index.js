'use strict';
exports.main = async (event, context) => {
	return {
		code: 0,
		data: {
			msg: '验证码发送成功，验证码为：123456',
			data: 123456
		}
	}
};
