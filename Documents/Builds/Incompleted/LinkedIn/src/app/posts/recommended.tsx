import { ScrollView, Text } from "react-native";
import posts from "../../assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

export default function PostDetailsScreen() {
  const post = posts[0];
  return (
    <ScrollView>
      <PostListItem post={post} />;
    </ScrollView>
  );
}
