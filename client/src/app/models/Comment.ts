export class Comment {
  _id?: string;
  productId: string;
  userId: string;
  text: string;
  username: string;
  email: string;
  date?: string;
  likesCounter?: number;
  dislikesCounter?: number;
  rating: number;
  responds?: Array<any>;
}
