import { CreatCommentDto } from "./create-comment";

export class UpdateCommentDto {
  user: any;
  comment: string;
  listingId?: string;
  parentId?: string;
}
