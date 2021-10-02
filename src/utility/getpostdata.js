export default function getPostData() {
   return fetch("http://localhost:3001/posts", { mode: 'cors' }).then(res => res.json());

}