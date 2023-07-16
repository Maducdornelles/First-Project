import { posts, comments } from "./data.js";
const postUl = document.querySelector("ul#post-ul");
function createPostCard(post) {
    if (postUl) {
        postUl.innerHTML += `
            <li>              
                <div class="card">
                    <figure>
                    <img src="${post.imageUrl}" alt="">
                    <figcaption>
                        <h2>${post.title}</h2>
                        <p>${post.body}<p>
                        <a data-id="${post.id}" class="expand-btn">Expand..</a>
                    </figcaption>
                    </figure>
                </div>
            </li>
        `;
    }
    else {
        alert("404 Post not found");
    }
}
function expandCard(event) {
    const expandBtn = event.target;
    const postId = Number(expandBtn.getAttribute("data-id"));
    const expandPostObject = {
        id: posts[postId].id,
        imageUrl: posts[postId].imageUrl,
        title: posts[postId].title,
        body: posts[postId].body,
        comments: comments.filter((comment) => comment.postId == postId)
    };
    console.log(expandPostObject);
    localStorage.setItem('post-data', JSON.stringify(expandPostObject));
    window.location.href = "post-details.html";
}
posts.forEach(createPostCard);
const expandLinks = document.querySelectorAll("a.expand-btn");
expandLinks.forEach(expandBtn => expandBtn.onclick = (event) => expandCard(event));
