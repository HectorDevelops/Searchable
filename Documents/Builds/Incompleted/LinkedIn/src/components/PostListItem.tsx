import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import { Post } from "../types";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
};

type FooterButtonProp = {
  text: string;
  icon: React.ComponentProps<typeof FontAwesome>["name"];
};

function FooterButtons({ text, icon }: FooterButtonProp) {
  return (
    <View style={styles.footerData}>
      <FontAwesome name={icon} size={16} color="gray" />
      <Text style={{ marginLeft: 3, color: "gray", fontWeight: "600" }}>
        {text}
      </Text>
    </View>
  );
}

function PostListItem({ post }: PostListItemProps) {
  return (
    // This Link component renders a component that can navigate to a screen on press
    <Link href={`/posts/${post.id}`} style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.header}>
          <Image source={{ uri: post.author.image }} style={styles.userImage} />
          <View>
            <Text style={styles.userName}>{post.author.name}</Text>
            <Text>{post.author.position}</Text>
          </View>
        </View>

        {/* Text content */}
        <Text style={styles.content}>{post.content}</Text>

        {/* Image content */}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.contentImage} />
        )}
        {/* Footer content */}
        <View style={styles.footer}>
          <FooterButtons text={"Like"} icon="thumbs-o-up" />
          <FooterButtons text={"Comment"} icon="comment-o" />
          <FooterButtons text={"Share"} icon="share" />
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  //   Header section
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  userName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  //   Body section
  content: {
    margin: 10,
    marginTop: 0,
  },
  contentImage: {
    width: "100%",
    aspectRatio: 1,
  },
  //   Footer section
  footer: {
    // backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    borderTopWidth: 0.5,
    borderColor: "lightgray",
  },
  footerData: {
    flexDirection: "row",
  },
});

export default PostListItem;
