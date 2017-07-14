import http from 'http';
import assert from 'assert';
import axios from 'axios';
import request from 'request';

let url = 'http://localhost:1701/users'
let userPromise;
let options =   { json: {
				    username: 'TestUser',
				    email: 'test@example.com',
				    password: 'TestPassword'
				  } 
				}

describe('GET all users route - /users', () => {
  it('should return 200', done => {
    http.get(url, res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('GET individual users route - /users/:userid', () => {
  it('should return 200', done => {
    http.get(url + '/5', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});

describe('POST new user route - /users', () => {
	it('should create new user', done => {
		userPromise = new Promise( (resolve, reject) => {
			request.post(url, options, (err, res, body) => {
		        if (!err && res.statusCode == 200) {
		            let userID = body.id
		            assert.equal(200, res.statusCode);
		  			resolve(userID)
		  			done()
		        }
		    });
		})
	});
});

describe('PUT update individual user = /users/:userid', () => {
	it('should update user info', done => {
		request.put(url + '/5', options, (err, res, body) => {
			assert.equal(1, res.body);
			done();
		})
	})
})

describe('DELETE individual user - /users/:userid', () => {
	it('should successfully delete Test User', done => {
		userPromise.then((userID) => {
			request.delete(url + '/' + userID, (err, res, body) => {
			        assert.equal(1, res.body);
			        done()
				});
		})
	})
})
