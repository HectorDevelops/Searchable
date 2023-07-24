import { FlatList } from "react-native";
import PostListItem from "@/src/components/PostListItem";
import posts from "../../assets/data/posts.json";

export default function HomeFeedScreen() {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => <PostListItem post={item} />}
      showsVerticalScrollIndicator={false} // hiding right side scroll bar for infinite scrolling
      contentContainerStyle={{ gap: 10 }} // this is a new property to add gaps in between rendered items
    />
  );
}
