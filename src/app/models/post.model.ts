import { Comment } from './comment.model';
import { User } from './user.model';
export class Post {
    public key?: string;
    public title: string;
    public featuredImage?: string;
    public body: string;
    public views?: number;
    public description?: string;
    public comments?: Comment[];
    public commentCount?: number;
    public user?: User;
    constructor(user: User) {
        this.user = user;
    }
}
