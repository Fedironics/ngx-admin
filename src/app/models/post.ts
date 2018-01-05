import { Comment } from './comment';
import { User } from './user';
export class Post {
    public id: string;
    public title: string;
    public featuredImage: string;
    public body: string;
    public views: number;
    public comments: Comment[];
    public user: User;
}
