// this type relates to the array of object received from the posts.json file under assets
export type Post = {
  id: string;
  content: string;
  //   declaring as optional string
  image?: string;
  likes: number;
  author: User;
};

// this type relates to the array of object received under the author's object of data
export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
};
