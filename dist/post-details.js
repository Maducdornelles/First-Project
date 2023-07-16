const postAsString = localStorage.getItem('post-data');
if (!postAsString) {
    alert('404 post not found');
    throw new Error("post-data not found");
}
const postObject = JSON.parse(postAsString);
const expandedCard = document.querySelector('.card.card-extended');
const commentListUl = document.querySelector('.comments-list ul');
if (!expandedCard) {
    alert('404 card not found');
    throw new Error("card not found");
}
if (!commentListUl) {
    alert('404 comment list not found');
    throw new Error("comment list not found");
}
expandedCard.innerHTML = `
    <figure>
        <img src="${postObject.imageUrl}" alt="">
        <figcaption>
            <h2>
                ${postObject.title}
            </h2>
            <p>
                ${postObject.body}
            </p>
        </figcaption>
    </figure>
`;
postObject.comments.forEach(comment => {
    commentListUl.innerHTML = `
    <li>
        <p>
            <span class="user">
                ${comment.username}:
            </span>
            <span class="email">
                ${comment.email}:
            </span>
            ${comment.body}
        </p>
        <hr>
    </li>
    `;
});
export {};
