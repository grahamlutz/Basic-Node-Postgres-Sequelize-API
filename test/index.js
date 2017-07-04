import http from 'http';
import assert from 'assert';
import axios from 'axios';
import request from 'request';

import '../lib/index.js';

describe('GET all users route - /users', () => {
  it('should return 200', done => {
    http.get('http://localhost:1701/users', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('POST new user route - /users', () => {
	let userID;
	let url = 'http://localhost:1701/users'
	it('should return 200', done => {
		let options = { json: {
		    username: 'TestUser',
		    email: 'test@example.com',
		    password: 'TestPassword'
		  } 
		}
		request.post(url, options, (err, res, body) => {
	        if (!err && res.statusCode == 200) {
	            userID = body.id
	            assert.equal(200, res.statusCode);
	            request.delete(url + '/' + userID, (err, res, body) => {
				        console.log(res);
				});
	  			done();
	        }
	    });
	});
});