export function getUpdatedTitleAndBody(state, newPost) {
     return state.posts.map(post => {
          if (post.id === newPost.id) {
               post.title = newPost.title;
               post.body = newPost.body;
          }
          return post;
     })
}