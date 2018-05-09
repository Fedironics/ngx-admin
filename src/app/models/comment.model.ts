import { User } from './user.model';

export class Comment {
    public user: User;
    public message: string;
    public postId: string;
    constructor(user: User, message: string, postId: string){
        this.user = user;
        this.message = message;
        this.postId = postId;
    }
}
