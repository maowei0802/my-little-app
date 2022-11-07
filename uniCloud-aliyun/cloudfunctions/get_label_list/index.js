'use strict';
// 获取数据库的引用
const db = uniCloud.database();
exports.main = async (event, context) => {
	const colleacion = db.collection('label');
	const res = await colleacion.get();
	//返回数据给客户端
	return {
		code: 0,
		data: res.data
	}
};
