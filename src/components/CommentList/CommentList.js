import React, { useEffect } from "react";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
} from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/Comment";
import { LocalFlorist } from "@material-ui/icons";
import commentList from './CommentList';


const CommentList = () => {

  // neelesh id require post id 
  const id =4
  // const id = match.params.postid;
  //   const posts = useSelector((state) => state.Posts);

  const dispatch = useDispatch();
  // dispatch(getPostComments(id));

  /// check if 

  
  var post = null;
  var comment = [];

const comments = useSelector((state) => state.Comments);

  useEffect(() => {
    dispatch(getPostComments(id));
    // console.log("dispatching getPostComments");
  }, [ dispatch, id]);



  // const comments = useSelector((state) => state.Comments);
  const posts = useSelector((state) => state.Posts);
  

  // console.log(comments, "Heare are comments");
  
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]?.post_id == id) {
      post = posts[i];
    }
  }

  for (let i = 0; i < comments.length; i++) {
    if (comments[i]?.post_id == id) {
      comment.push(comments[i]);
    }
  }

  comment.sort((a, b) => (a?.timePosted > b?.timePosted ? -1 : 1));
 
 
  return (
    <>
    <div style={{  padding: 50 }} className="App">
      <Grid container spacing={3} >
         <Grid item xs={9}>
        {/* !post ? <CircularProgress />:  */}

        <Post post={post} />

        <AddComment post ={post} />

      </Grid>
      </Grid>
     
      {comment.map((comment, key) => (
        <Grid key={key} item xs={9} sm={6}>
          <Comment comment={comment} />
        </Grid>

      ))}

      {/* <CreatePost/> */}
     
    </div>
    </>
  );
};
export default CommentList;
