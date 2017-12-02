import {
	Column,
	ObjectIdColumn,
	ObjectID,
	BeforeInsert,
	Entity,
	Index
} from 'typeorm';
import { PasswordService } from '../password-service/password.service';

@Entity()
export class AuthInfo {
	@ObjectIdColumn() _id: ObjectID;

	@Column()
	@Index({ unique: true })
	reference: string;

	@Column() hashedPassword: string;

	@Column() salt: string;

	constructor(hashedPassword: string, salt: string, reference: string) {
		this.hashedPassword = hashedPassword;
		this.salt = salt;
		this.reference = reference;
	}
}
