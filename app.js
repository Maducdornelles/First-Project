import { posts } from './posts';
import { comments } from './comments';

const postUl = document.querySelector("#post-ul");

function createCard(post) {
  postUl.innerHTML += `
    <li id="post-${post.id}">
      <div class="card">
        <figure>
          <img src="${post.imageUrl}" alt="">
          <figcaption>
            <h2>
              ${post.title}
            </h2>
            <p>
              ${post.body}
            </p>
            <a class="expand-btn" data-id="${post.id}">
              Expand...
            </a>
          </figcaption>
        </figure>
      </div>
    </li>
  `;
}

posts.forEach(post => createCard(post));

const postsLinks = document.querySelectorAll(`a.expand-btn`);
postsLinks.forEach(link => {
  link.addEventListener("click", expandCard);
});

function expandCard(event) {
  const postId = event.target.getAttribute("data-id");
  
  // Lógica para expandir o cartão de postagem com o ID fornecido
  

  console.log(`Expanded post with ID: ${postId}`);
}