import * as crypto from 'crypto';
import { Component } from '@nestjs/common';

export class PasswordService {
	constructor() {}

	/**
	 * Authenticate - check if the password is correct
	 */
	public static check(
		plainText: string,
		hashed: string,
		salt: string
	): boolean {
		return PasswordService.encrypt(plainText, salt).hashedPassword === hashed;
	}

	public static encrypt(
		password: string,
		salt: string = PasswordService.makeSalt()
	) {
		const saltBuffer = new Buffer(salt, 'base64');
		return {
			salt,
			hashedPassword: crypto
				.pbkdf2Sync(password, saltBuffer, 10000, 64, 'sha1')
				.toString('base64')
		};
	}

	/**
	 * Generate a random byte salt.
	 * @return Base 64 encoded string of 16 random bytes
	 */
	public static makeSalt() {
		return crypto.randomBytes(24).toString('base64');
	}
}
