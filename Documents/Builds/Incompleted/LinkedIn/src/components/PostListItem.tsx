import { Text } from "react-native";
import { Post } from "../types";

type PostListItemProps = {
  post: Post;
};

function PostListItem({ post }: PostListItemProps) {
  return <Text>{post.content}</Text>;
}

export default PostListItem;
