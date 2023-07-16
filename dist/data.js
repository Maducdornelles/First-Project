const comments = [
    {
        id: 0,
        postId: 0,
        username: "user1",
        email: "user1@example.com",
        body: "This post is spot on!"
    },
    {
        id: 1,
        postId: 0,
        username: "user2",
        email: "user2@example.com",
        body: " Keep up the excellent work!"
    },
    {
        id: 2,
        postId: 0,
        username: "user3",
        email: "user3@example.com",
        body: "I couldn't agree more, excellent! "
    },
    //mais comentarios
    {
        id: 3,
        postId: 1,
        username: "user1",
        email: "user1@example.com",
        body: "Wow,  you nailed it with this post!"
    },
    {
        id: 4,
        postId: 1,
        username: "user2",
        email: "user2@example.com",
        body: "Your insights are always enlightening and valuable."
    },
    {
        id: 5,
        postId: 1,
        username: "user3",
        email: "user3@example.com",
        body: "Looking forward to more content like this. "
    },
    //mais comentarios
    {
        id: 6,
        postId: 2,
        username: "user1",
        email: "user1@example.com",
        body: "Excellent read!"
    },
    {
        id: 7,
        postId: 2,
        username: "user2",
        email: "user2@example.com",
        body: "Your posts never disappoint! "
    },
    {
        id: 8,
        postId: 2,
        username: "user3",
        email: "user3@example.com",
        body: " Your ability to explain complex topics in a simple manner is truly commendable. Thank you!"
    },
    {
        id: 9,
        postId: 3,
        username: "user1",
        email: "user1@example.com",
        body: "Great post! I love the valuable insights you shared."
    },
    {
        id: 10,
        postId: 3,
        username: "user2",
        email: "user2@example.com",
        body: "Wow, this is fantastic! Your writing style is captivating."
    },
    {
        id: 11,
        postId: 3,
        username: "user3",
        email: "user3@example.com",
        body: "Impressive content! You really know how to engage your audience."
    },
    {
        id: 12,
        postId: 4,
        username: "user1",
        email: "user1@example.com",
        body: "Excellent work! Your post is both informative and enjoyable."
    },
    {
        id: 13,
        postId: 4,
        username: "user2",
        email: "user2@example.com",
        body: "Brilliant post! I appreciate the effort you put into this."
    },
    {
        id: 14,
        postId: 4,
        username: "user3",
        email: "user3@example.com",
        body: " Amazing job! Your post is a breath of fresh air."
    },
    {
        id: 15,
        postId: 5,
        username: "user1",
        email: "user1@example.com",
        body: "Well done! Your ideas are well-articulated and thought-provoking."
    },
    {
        id: 16,
        postId: 5,
        username: "user2",
        email: "user2@example.com",
        body: "Outstanding content! I can't wait to read more from you."
    },
    {
        id: 17,
        postId: 5,
        username: "user3",
        email: "user3@example.com",
        body: "Amazing job!"
    },
];
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
    },
    {
        id: 2,
        title: 'Post 3',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    // Restante dos objetos de postagem
    {
        id: 3,
        title: 'Post 4',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 4,
        title: 'Post 5',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
    {
        id: 5,
        title: 'Post 6',
        imageUrl: 'https://i.pinimg.com/564x/81/f6/6f/81f66f185a8994dfa83470e75ea68d18.jpg',
        body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took...'
    },
];
export { comments, posts };
