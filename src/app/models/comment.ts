import { User } from './user';

export class Comment {
    public user: User;
    public message: string;
    public postId: string;
}