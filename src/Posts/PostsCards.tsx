import React, { useEffect } from 'react';
import { IPosts } from './IPosts';

const PostsCards = ({posts, onDelete, updatePost}: {posts: IPosts[], onDelete: (id?:number) => void, updatePost: (id?:number) => void}) => {

  // const tenPosts: IPosts[] = [];
  // const getTenPosts = () => {
  //   for (let i = 0; i < 10; i++) {
  //     const elem = posts[i];
  //     tenPosts.push(elem);
  //   }
  //   console.log(tenPosts);
  // }
  //
  // useEffect(() => {
  //   getTenPosts();
  // }, [])

  return (
    <div className='container mt-5'>
      {posts.length && posts.map(post => <div className="card border-dark mb-3" key={post.id}>
          <div className="card-header">{post.title}</div>
          <div className="card-body text-dark shadow">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.body}</p>
          </div>
        <button  className="btn btn-danger mt-2 mb-5 mx-3 w-25 m-lg-auto" onClick={() => onDelete(post.id)}>Delete post</button>
        <button className='btn btn-primary mt-2 mb-5 mx-3 w-25 m-lg-auto' onClick={() => updatePost(post.id)}>Update post</button>
        </div>
      )
      }
    </div>
  );
};

export default PostsCards;