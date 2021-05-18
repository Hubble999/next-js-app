import { useEffect, useState } from 'react';
import CommentList from '../CommentList/CommentList';
import NewComment from '../NewComment/NewComment';
import classes from './Comments.module.scss';

const Comments = ({ eventId }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  useEffect(() => {
    fetch('/api/comments/' + eventId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
      });
  }, [comments]);

  const addCommentHandler = (commentData) => {
    fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>{showComments ? 'Hide' : 'Show'} Comments</button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
};

export default Comments;
