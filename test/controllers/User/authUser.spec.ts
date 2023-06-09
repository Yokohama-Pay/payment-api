import * as dotenv from 'dotenv';
import request from 'supertest';
import {cryptToken} from '../../../src/utils';
import {defaultUser} from '../utils';

dotenv.config();

const userData = {
	email: defaultUser.email,
	password: defaultUser.password,
	verifyToken: cryptToken,
	tokenCaptcha: defaultUser.tokenCaptcha,
};

describe('authUserController', () => {
	it('should register a new user', async () => {
		const response = await request(`${process.env.BaseUrl!}`)
			.post('/login')
			.send(userData);

		expect(response.status).toBe(200);
		expect(response.body).toHaveProperty('token');
	});
});
