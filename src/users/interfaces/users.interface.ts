import { Document } from 'mongoose';

export interface Users extends Document {
    readonly username: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    readonly password: string;
    readonly updated_at: Date;
    readonly created_at: Date;
}