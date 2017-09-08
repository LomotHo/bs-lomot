const request = require("request");

// 注册
const signup = async (body) => {
	let options = { method: 'POST',
	  url: 'http://127.0.0.1:3000/signup',
	  headers: 
	   { 'postman-token': 'fbef27ac-40b2-e020-c8f7-db8817ee17d8',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json' },
	  body,
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});

}

// 登录
const signin = async () => {
	let options = { method: 'POST',
	  url: 'http://127.0.0.1:3000/signin',
	  headers: 
	   { 'postman-token': '1b2616fb-8dfc-cf9a-5873-f3db98b06a2f',
	     'cache-control': 'no-cache',
	     'content-type': 'application/json' },
	  body: { signinData: { logName: 'lomot@xx.com', passwd: '123456' } },
	  json: true };

	// let reqAction = function(options){
	// 	return new Promise((resolve, reject) => request(options, (error, response, body) => {
	// 		if (error) {
	// 			reject(error);
	// 		} else {
	// 			resolve(body);
	// 		}
	// 	}));
	// }
	// let result = await reqAction(options);

	let result = await new Promise((resolve, reject) => request(options, (error, response, body) => {
		if (error) {
			reject(error);
		} else {
			resolve(body);
		}
	}));

	console.log(result.token);
	return result.token;
}

// post文章
const postArticle = async (token) => {
	const authorization = "Bearer "+token;
	console.log(authorization);
	let options = { method: 'POST',
	  url: 'http://127.0.0.1:3000/api/article',
	  headers: 
	   { 'postman-token': '1dcb20c1-d605-ac02-732d-afcc4bbc42fa',
	     'cache-control': 'no-cache',
	     'authorization': authorization },
	  body: 
	   { article: 
	      { userId: '',
	        title: '标题',
	        title2: '副标题',
	        accessableGroup: '2015,2016',
	        content: '这是内容要长要长要长要长要长要长要长要长要长要长 eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dOYW1lIjoibG9tb3QwQHh4LmNvbSIsImlhdCI6MTUwNDg1NzUzOSwiZXhwIjoxNTA0ODYxMTM5fQ.oxmwMGNlWsnOfK7pA9bLolaGS4A0Lb7W4Y5lfkfTS2k ' } },
	  json: true };

	request(options, function (error, response, body) {
	  if (error) throw new Error(error);

	  console.log(body);
	});
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

const main = async () => {
	await signup ({ 
		signupData: { 
			email: 'lomot@xx.com',
		    phone: 12344556677,
		    passwd: '123456',
		    name: 'lomot',
		    gender: false 
		} 
	});
	await signup ({ 
		signupData: { 
			email: 'lomot0@xx.com',
		    phone: 12344556677,
		    passwd: '123456',
		    name: 'lomot',
		    gender: false 
		} 
	});
	await signup ({ 
		signupData: { 
			email: 'lomot1@xx.com',
		    phone: 12344556677,
		    passwd: '123456',
		    name: 'lomot',
		    gender: false 
		} 
	});
	await sleep(100);
	let token = await signin();

	await postArticle(token);

}

main();

