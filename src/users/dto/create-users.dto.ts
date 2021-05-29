export class CreateUsersDTO {
    readonly username: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly email: string;
    password: string;
    readonly updated_at: Date;
    readonly created_at: Date;
}