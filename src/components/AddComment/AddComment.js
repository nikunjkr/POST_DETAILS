import React, { useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { HouseRounded } from "@material-ui/icons";
import { useState } from "react";
import {createComment, getPostComments} from '../../actions/Posts'
import { useDispatch, useSelector } from 'react-redux';



const AddComment = (props) => {

  const getUsername = state => state.User?.Name; 

  const username =useSelector(getUsername);

  console.log(props.post?.post_id,"adding comments")
  const postid=props.post?.post_id;
  const up_level_cid=props.up_level_cid;
  console.log(up_level_cid);
  const dispatch = useDispatch();

  const [comment, setComment] = useState('');

  const clear = () => {
    setComment('');
  };

  const handleAddComment = async(e) => {
    e.preventDefault();
    dispatch(createComment( postid, comment));
    dispatch(getPostComments(postid))
    clear();
  }
  const commentAs= "Comment as " + username

  // useEffect(()=>{ 
  //   handleAddComment();
  // },)
  return (
    <>
      <TextField
        id="outlined-multiline-static"
        margin="normal"
        label={commentAs}
        multiline
        rows={4}
        // defaultValue="Default Value"
        variant="outlined"
        size="medium"
        fullWidth
        onChange={event => {
          const { value } = event.target;
          setComment(value )}}
        value={comment}
      />
     
      <Button variant="contained" color="primary" onClick={handleAddComment}>
        Comment
      </Button>
    </>
  );
};

export default AddComment;

