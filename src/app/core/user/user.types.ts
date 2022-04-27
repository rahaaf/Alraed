import { IUserType } from 'app/mock-api/common/user/IUserType';

export class User
{
    id: string;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    status?: string;
    type: IUserType;
}
