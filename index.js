async function getRecentPosts() {
  console.log("before");
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const data = await response.json();
console.log(data);
console.log("after");
document.getElementById("posts").innerHTML = data.body
}

getRecentPosts();