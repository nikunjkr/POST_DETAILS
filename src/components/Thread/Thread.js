import React, {useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import {getPostComments, getPosts, getThread} from '../../actions/Posts';
import Comment from '../Comment/Comment';


import Post from '../Posts/Post/Post';
import AddReplyToComment from '../AddReply/AddReplyToComment';


const Thread = ({match}) => {
   
    const comment_id=match?.params?.commentid;
    
    // console.log("matching",match);

    const post_id =localStorage.getItem("post_id");

    // console.log("localstore",post_id)
    const dispatch = useDispatch();
    // dispatch(getThread(comment_id))

    useEffect(()=>{
        dispatch(getThread(comment_id))
        // dispatch(getPosts);
        dispatch(getPostComments(post_id))
    },[dispatch,post_id,comment_id])

     const threaddd = useSelector((state)=> {
        console.log("haha",state)
        return state.Thread});

    console.log("threaddd", threaddd);


    const posts = useSelector((state)=> state.Posts);

    const post= posts.find(post=> post.post_id == post_id);
    console.log("seriosdebug",post);
    const comments = useSelector((state)=> state.Comments);
    console.log("kkk", comments)
    const comment=comments.find(comment => comment.comment_id ==comment_id)


    // const thread = useSelector((state)=> {
    //     console.log("haha",state)
    //     return state.Thread});
    // console.log(thread);

  
   
    return (
        <div>
            {/* <comment comment= */}
{/*             
            {!thread.length ?<div> <h1>Thread not exit

            </h1> <button onClick={history.goBack}>Go Back</button></div>:  */}

            <div>
                {/* <Post post={post}/> */}
                <Comment comment={comment}/>
                <AddReplyToComment post ={post_id} up_level_cid={comment_id} />{ threaddd.map((thread_items, keys) => 
            <div keys={keys}>
            <Comment comment={thread_items} />
            </div>)} </div>  
            
        </div>
    )
            
}
export default Thread;
