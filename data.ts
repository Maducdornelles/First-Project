const posts = [
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
    }
    // Restante dos objetos de postagem
  ];
  
  export { posts };

  const comments = [
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
    // Restante dos objetos de comentários
  ];
  
  export { comments,};