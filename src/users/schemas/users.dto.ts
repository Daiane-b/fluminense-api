import * as mongoose from 'mongoose';
import * as mongooseDelete from 'mongoose-delete';

export const UsersSchema = new mongoose.Schema({
    username: String,
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    updated_at: { type: Date },
    created_at: { type: Date, default: Date.now }
})

UsersSchema.plugin(mongooseDelete, { deleted_at: true, overrideMethods: true })