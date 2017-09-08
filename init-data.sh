#!/bin/sh

# 注册lomot@xx.com lomot0@xx.com lomot1@xx.com
curl -X POST \
  http://127.0.0.1:3000/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 3826cefd-7663-e462-a179-ec6770df50bb' \
  -d '{
	"signupData" : {
		"email": "lomot@xx.com",
	    "phone": 12344556677,
	    "passwd": "123456",
	    "name": "lomot",
	    "gender": false
	}
}'
curl -X POST \
  http://127.0.0.1:3000/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: ce14af64-2105-6073-a14b-b66206c03510' \
  -d '{
	"signupData" : {
		"email": "lomot0@xx.com",
	    "phone": 12344556677,
	    "passwd": "123456",
	    "name": "lomot",
	    "gender": false
	}
}'
curl -X POST \
  http://127.0.0.1:3000/signup \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 0fd85472-4263-e720-3926-143245bd4cea' \
  -d '{
	"signupData" : {
		"email": "lomot1@xx.com",
	    "phone": 12344556677,
	    "passwd": "123456",
	    "name": "lomot",
	    "gender": false
	}
}'

# 登录 lomot@xx.com
curl -X POST \
  http://127.0.0.1:3000/signin \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 5d20a18e-afb9-6ffd-a4d4-08abd0e06045' \
  -d '{
	"signinData" : {
	  "logName": "lomot@xx.com",
	  "passwd": "123456"
	}
}'

