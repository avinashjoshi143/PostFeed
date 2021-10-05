export default function getPostData() {
   return fetch("https://jsonplaceholder.typicode.com/posts", { mode: 'cors' }).then(res => res.json());

}