import React, { useEffect, useState } from "react";
import {
  Divider,
  Avatar,
  Grid,
  Paper,
  CircularProgress,
  IconButton,
} from "@material-ui/core";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { getPostComments, getThread } from "../../actions/Posts";
import { useDispatch, useSelector } from "react-redux";
import Post from "../Posts/Post/Post";
import Posts from "../Posts/Posts";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import moment from "moment";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

import { upvoteComment } from "../../actions/Posts";

import AddComment from "../AddComment/AddComment";
import { get } from "js-cookie";

const Comment = (props) => {

  const comment = props.comment?.comment_id;

  // const [upOrDown, setUporDown] = useState("");
  

  const post_id = props.comment?.post_id;



  const dispatch = useDispatch();

   const comments = useSelector((state) => {
    console.log("h", state);
    return state.Comments;
  });
  const threads = useSelector((state) => {
    console.log("h", state.Thread);
    return state.Thread;
  });

  const onecomment = comments.find(
    (onecomment) => onecomment.comment_id === comment
  );

    const handleUpvote = () => {
    dispatch(upvoteComment(props.comment?.comment_id, "u"));
    dispatch(getPostComments(post_id))
    dispatch(getThread(props.comment?.comment_id))
    
  };
  const handleDownVote = () => {
    dispatch(upvoteComment(props.comment?.comment_id, "d"));
    dispatch(getPostComments(post_id))
    dispatch(getThread(comment))
    console.log("downvote")
  };

  //   const comments = useSelector((state) => {
  //   console.log("haha", state);
  //   return state.Comments;
  // });

  // const onecomment = comments.find(
  //   (onecomment) => onecomment.comment_id === comment
  // );

  //commented
  // useEffect(() => {
  //   // dispatch(getPostComments(post_id));
  //   // console.log(post_id);
    
  // }, [dispatch, post_id]);


  // console.log(onecomment, "1");

  

  /////////////////////// i missed s in Comments
  //  const comments = useSelector(state => state.Comment);

  // var upvoteButtonColor = "default";
  // var downvoteButtonColor = "default";
  // if (upOrDown === "u") {
  //   upvoteButtonColor = "primary";
  //   downvoteButtonColor = "default";
  // } else if (upOrDown === "d") {
  //   downvoteButtonColor = "secondary";
  //   upvoteButtonColor = "default";
  // }
  console.log("iiiiiii")
   var upvoteButtonColor = "default";
  var downvoteButtonColor = "default";
  if (onecomment.upordown ==="u") {
    upvoteButtonColor = "primary";
    downvoteButtonColor = "default";
  } else if (onecomment.upordown === "d") {
    downvoteButtonColor = "secondary";
    upvoteButtonColor = "default";
  }
  // const [upvoteButtonColor,setupvoteButtonColor] =useState('default')
  // const [downvoteButtonColor,setdownvoteButtonColor] =useState('default')
  // // var upvoteButtonColor = "default";
  // // var downvoteButtonColor = "default";
  // if (onecomment.upordown =="u") {
  //   setupvoteButtonColor("primary");
  //   setdownvoteButtonColor("default");
  // } else if (onecomment.upordown == "d") {
  //   setdownvoteButtonColor("secondary");
  //   setupvoteButtonColor("default");
  // }


  // useEffect(()=>{

  //   dispatch(getPostComments(post_id))
  //   console.log("useEffect in comments")
  // },[dispatch,props.comment?.comment_id,post_id]);

  // console.log(props, "inside comments");


  return (
    <Paper style={{ padding: "10px 5px", marginTop: 10, spacing: 3 }}>
      <Grid id="comment-grid" container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar alt="Remy Sharp" src={props?.comment?.user_image} />
        </Grid>

        <Grid justifyContent="left" item xs zeroMinWidth>
          <h4 style={{ margin: 0, textAlign: "left" }}>
            {props.comment?.name   }{   }
            {/* {props.comment?.timeCommented} */}
          </h4>
          <p style={{ textAlign: "left", color: "gray" }}>
            {/* {moment(props.comment?.timeCommented).fromNow()} */}
            {props.comment?.timeCommented}
          </p>
          <p style={{ textAlign: "left" }}>{props?.comment?.comment}</p>


          <IconButton className="post__header__upvote" onClick={handleUpvote}>
            <ThumbUpAltIcon color={upvoteButtonColor} />
          </IconButton>

          {onecomment.upVotes - onecomment.downVotes}


          <IconButton
            className="post__header__downvote"
            onClick={handleDownVote}
          >
           <ThumbDownAltIcon color={downvoteButtonColor} />

          </IconButton>
          
        </Grid>
      </Grid>
      {/* <h3>Thread</h3> */}
      <Button
        size="small"
        color="black"
        onClick={() => {
          localStorage.setItem("post_id", props.comment?.post_id);
          // dispatch(getPostComments(post_id))
           dispatch(getThread(comment))
          window.location.assign(
           
            
            `/comments/${props.comment?.comment_id}/thread`
          );
        }}
      >
        View Thread
      </Button>
    </Paper>
  );
};

export default Comment;
