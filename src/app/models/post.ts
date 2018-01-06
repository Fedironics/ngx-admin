import { Comment } from './comment';
import { User } from './user';
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
}
