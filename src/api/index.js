import axios from 'axios';
import Cookies from 'js-cookie';
const API = axios.create({ baseURL: 'https://ec2-52-206-109-241.compute-1.amazonaws.com/team2practo' });

API.interceptors.request.use((req) => {
//   if (localStorage.getItem('profile')) {
    // req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    // Cookies.set('access_control_token_cookie_skinder','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMTYxMTc2NTcyNDE2MzgzNjM2NDkiLCJlbWFpbCI6Im5pa3VuamtyMDc4QGdtYWlsLmNvbSIsImlhdCI6MTYxMzkzMjYyOCwiZXhwIjoxNjEzOTM2MjI4fQ.YtueonU2YL1t1-X1_qity-RXLNQQfQZUoG7mU4i5C0c')
     req.headers.Authorization = Cookies.get('access_control_token_cookie_skinder');
    // req.headers.Authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxMTYxMTc2NTcyNDE2MzgzNjM2NDkiLCJlbWFpbCI6Im5pa3VuamtyMDc4QGdtYWlsLmNvbSIsImlhdCI6MTYxMzkzODY2NiwiZXhwIjoxNjEzOTQyMjY2fQ.hVJs-wCsSN93U3fst6ugLnsSa9BYZ4xjVyVbSpQionQ";
//   }


  return req;
});


// export const fetchPosts = () => fetch(url).then(res => res.json())
export const fetchPosts = () => API.get('/posts');
// export const fetchPosts = () => axios.get(`${url}/posts`');
// export const fetchPostDetails = (postid) => API.get(`${url}/`)
export const upvoteComment = (comment_id, updown) => API.put('/comments/uord', {'comment_id':comment_id,
    'upordown':updown});
    
export const getPostComments= (postid) => API.get(`/${postid}/comments`);

// export const upvoteComment = (comment_id) => API.put('/comments/uord', {'comment_id':comment_id,
//     'upordown':'d'});
export const createComment =(postid,Comment) => API.post('/comments', {'post_id': postid, 'comment' : Comment});
export const replyComment =(postid,Comment,up_level_cid) => API.post('/comments', {'post_id': postid, 'comment' : Comment, 'up_level_cid' :up_level_cid});
//  forgot / in beginning
export const getThread = (comment_id) => API.get(`/comments/${comment_id}/thread`);
export const getUser =() => API.get(`/users`);
 
// export const addPost = (Title,Caption,myFile) => 
   
//     API.post('/posts', {'Title':Title, 'Caption':Caption, 'myFile':myFile });
    export const addPost = (formData) =>  API.post('/posts', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }});

