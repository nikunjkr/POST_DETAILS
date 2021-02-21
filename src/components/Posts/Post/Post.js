import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAltIcon from "@material-ui/icons/ThumbDownAlt";
import IconButton from "@material-ui/core/IconButton";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core/";
import CardHeader from "@material-ui/core/CardHeader";

import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  const postid = post?.post_id;

  console.log(post);
  return (
    <>
    {/* <img src={post?.image_link} alt=""></img> */}
    <Card className={classes}>
      
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            className={classes.avatar}
            src={post?.user_image}
          ></Avatar>
        }
        title={post?.name}
      ></CardHeader>
      {/* {console.log(post?.Post_Id)} */}
      {/* {console.log(JSON.parse(post.Title))} */}
      <div className="post__header">
        {/* <h4 className="post__header__username">Posted by {post?.name}</h4> */}

        {/* commented */}
        {/* <IconButton className="post__header__upvote">
          <ThumbUpAltIcon />
        </IconButton>
        {post?.upvotes - post?.downvotes}
        <IconButton className="post__header__downvote">
          <ThumbDownAltIcon />
        </IconButton> */}
      </div>
      <Typography variant="h4" component="h4">
        {post?.title}
      </Typography>

      
      {post?.image_link !== "" ? (
        <CardMedia
          className={classes.media}
          image={post?.image_link}
          title={post?.Title}
        />
      ) : (
        <CardMedia title={post?.Title} />
      )}

      {/* 
          (<CardMedia
          className={classes.media}
          image={post?.image_link}
          title={post?.Title}

        /> */}

      {/* <Link to="/:postid/comments">Comments</Link> */}

      {/* <h3>{post.name}</h3> */}
      {/* <img src={post.user_image} alt="Loading"></img> */}

      <h4>{post?.caption}</h4>
      {/* <h3>{post?.image_Link}</h3> */}

      <h3>{post?.timePosted}</h3>

      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            localStorage.setItem("post_id", { postid });
            window.location.assign(`/${postid}/comments`);
          }}
        >
          {post?.noofcomments} Comments
        </Button>
        <form></form>
        {/* <Link to="/"></Link> */}
      </CardActions>
    </Card>
  </>)
};

export default Post;
