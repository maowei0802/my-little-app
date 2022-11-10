import ajax from '../../http.js';
export const user_login = data => ajax({
	name: 'user_login',
	data
})
export const  get_code = data => ajax({
	name: 'get_code',
	data
})