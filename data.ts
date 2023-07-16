export interface Comment {
  id: number;
  postId: number;
  username: string;
  email: string;
  body: string;
}

export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  body: string;
}

const comments: Comment[] = [
  {
      id: 0,
      postId: 0,
      username: "user1",
      email: "user1@example.com",
      body: "Great post!",
  },
  {
      id: 1,
      postId: 1,
      username: "user2",
      email: "user2@example.com",
      body: "Great post!",
  },
  {
      id: 2, // Esse é o id do comentário
      postId: 2, // Esse é o id do post
      username: "user 3",
      email: "user3@example.com",
      body: "Great post!",
  },
  // Restante dos objetos de comentários
];

const posts: Post[] = [
  {
      id: 0,
      title: 'Post 1',
      imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
  },
  {
      id: 1,
      title: 'Post 2',
      imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
  },
  {
      id: 2,
      title: 'Post 3',
      imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
      body: 'fsdiafyhadoiusfhasdihadslfhasdf Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
  },
  // Restante dos objetos de postagem
];

export { comments, posts };
