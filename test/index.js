import http from 'http';
import assert from 'assert';
import axios from 'axios';

import '../lib/index.js';

describe('GET all users route - /users', () => {
  it('should return 200', done => {
    http.get('http://localhost:1701/users', res => {
      assert.equal(200, res.statusCode);
      done();
    });
  });
});