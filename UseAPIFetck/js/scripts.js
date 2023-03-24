const url = "https://jsonplaceholder.typicode.com/posts";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

const postPage = document.querySelector("#post");
const postContainer = document.querySelector("#post-container");
const commentsContainer = document.querySelector("#comments-container");



//get id from URL
const urlSearchParams = new URLSearchParams(window.location.search);
const postId = urlSearchParams.get("id");

// função para pegar todos os posts
async function getAllPosts() {
    const response = await fetch(url);

    console.log(response);

    const data = await response.json();
    console.log(data);

    loadingElement.classList.add("hide");

    data.map((post) => {
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const body = document.createElement("p");
        const link = document.createElement("a");

        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "Ler";
        link.setAttribute("href", `pages/post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postsContainer.appendChild(div);
    });
}

async function getPost(id) {

}

if (!postId) {
    getAllPosts();
}else {
    console.log(postId);
}