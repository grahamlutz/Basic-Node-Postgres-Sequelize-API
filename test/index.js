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
  it('should return 200', done => {
  	request.post(
	    'http://localhost:1701/users',
	    { json: {
		    username: 'Test',
		    email: 'test@example.com',
		    password: 'testing'
		  } 
		},
	    function (err, res, body) {
	        if (!err && res.statusCode == 200) {
	            console.log(body)
	            assert.equal(200, res.statusCode);
      			done();
	        }
	    }
	);
  });
});