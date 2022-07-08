import React, { useEffect, useState } from 'react';
import http from '../http';
import { IPosts } from '../Posts/IPosts';
import PostsCards from '../Posts/PostsCards';

const Posts = () => {

  const [posts, setPosts] = useState<IPosts[]>([]);

  const getPosts = () => {
    http.get('posts').then(res => {
      setPosts(res.data);
    })
  }

  useEffect( () => {
    getPosts();
  }, []);

  const onDelete = (id?: number) => {
    http.delete(`posts/${id}`).then(() => {
      const isDelete = confirm('Really want to delete this post?');
      if (isDelete) {
        setPosts(posts.filter((post) => post.id !== id));
      }
    })

  }

  const updatePost = (id?: number) => {
    const data = {
      userId: 420,
      id: 420,
      title: "MISTER_BOBIS",
      body: "It is a story about greatfull man who was called mister BOB he was real alive legend on his own "
    }
    http.put(`posts/${id}`, data).then(res => {
      setPosts(posts.map((post) => post.id === res.data.id ? res.data : post));
      console.log(res);
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <PostsCards posts={posts} onDelete={onDelete} updatePost={updatePost}></PostsCards>
  );
};

export default Posts;