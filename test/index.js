import assert from 'assert';
import request from 'request';

let userID, userEmail;
let url = 'http://localhost:1701/users'
let options =   { json: {
				    username: 'TestUser',
				    email: 'test@example.com',
				    password: 'TestPassword'
				  } 
				}

describe('GET all users route - /users', () => {
	it('should return 200', done => {
		request.get(url, (err, res, body) => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});


describe('POST new user route - /users', () => {
	it('should create new user', done => {
		request.post(url, options, (err, res, body) => {
            userID    = body.id
            userEmail = body.email
            assert.equal(200, res.statusCode);
  			done()
	    });
	});
});

describe('POST login user route - /users/login', () => {
	it('should return success message', done => {
		let options   = {};
		options.id    = userID;
		options.email = userEmail;
		request.post(url + '/login', options, (err, res, body) => {
            assert.equal('successful login!', res.body.message);
  			done()
	    });
	})
})

describe('GET individual users route - /users/:userid', () => {
	it('should return 200', done => {
		request.get(url + '/' + userID, (err, res, body) => {
			assert.equal(200, res.statusCode);
			done();
		});
	});
});

describe('PUT update individual user = /users/:userid', () => {
	it('should update user info', done => {
		request.put(url + '/' + userID, options, (err, res, body) => {
			assert.equal(1, res.body);
			done();
		})
	})
})

describe('DELETE individual user - /users/:userid', () => {
	it('should successfully delete Test User', done => {
		request.delete(url + '/' + userID, (err, res, body) => {
		        assert.equal(1, res.body);
		        done()
			});
	})
})
