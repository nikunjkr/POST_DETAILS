import * as api from "../api/index.js";

// action creaters return actions
// default keyword showed error
export const getPosts = () => async (dispatch) => {
    try {
        const {data} = await api.fetchPosts();
        // console.log(data,"secret");
        dispatch({type:'FETCH_ALL' , payload: data});
    } catch (error) {
        console.log(error);
    }
// return actions;
}
export const getPostComments = (post_id) => async (dispatch) => {
    try{
        const {data} =await api.getPostComments(post_id);
        console.log("call", data);
        dispatch({type:'GET_POST_COMMENTS', payload: data});
    } catch(error){
        console.log(error);
    }
}
export const createComment = (postid,comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(postid,comment);
    console.log(data,"secret");
    dispatch({ type: 'CREATE_COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const replyComment = (postid,comment,up_level_cid) => async (dispatch) => {
  try {
    const { data } = await api.createComment(postid,comment,up_level_cid);
    console.log(data,"secret");
    dispatch({ type: 'REPLY_COMMENT', payload: data });
  } catch (error) {
    console.log(error);
  }
};



export const upvoteComment = (comment_id,updown) => async (dispatch) => {
  try {
    const { data } = await api.upvoteComment(comment_id, updown);
    console.log(data)
    dispatch({ type: 'UPVOTE_COMMENT', payload: data });
  } catch (error) {
    console.log("error in upvote comments");
  }
};

// export const downvoteComment = (comment_id) => async (dispatch) => {
//   try {
//     const { data } = await api.upvoteComment(comment_id);

//     dispatch({ type: 'DOWNVOTE_COMMENT', payload: data });
//   } catch (error) {
//     console.log(error);
//   }
// };
export const getThread = (comment_id) => async (dispatch) => {
  try {
    const { data } = await api.getThread(comment_id);
    console.log("thread data",data);
    dispatch({ type: 'GET_THREAD', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const getUser = () => async (dispatch) => {
  try {
    const { data } = await api.getUser();
    // console.log("thread data",data);
    dispatch({ type: 'GET_USER', payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const addPost = (formData) => async (dispatch) => {
  try {
    
    const { data } = await api.addPost(formData);
    console.log("thread data",data);
    dispatch({ type: 'ADD_POST', payload: data });
  } catch (error) {
    console.log(error);
  }
};
