import { ScrollView, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import posts from "../../assets/data/posts.json";
import PostListItem from "@/src/components/PostListItem";

const PostDetailsScreen = () => {
  const { id } = useLocalSearchParams(); // this parameter will contain dynamic fields part of URL - {id} comes from this file itself.
  const post = posts.find((postFound) => postFound.id === id);

  if (!post) {
    return <Text style={{ backgroundColor: "gray" }}>Post not found!</Text>;
  }
  return (
    <ScrollView style={{ backgroundColor: "gray" }}>
      <PostListItem post={post} />
    </ScrollView>
  );
};

export default PostDetailsScreen;
