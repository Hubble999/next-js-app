import classes from './CommentList.module.scss';

const CommentList = ({ comments }) => {
  return (
    comments.length > 0 && (
      <ul className={classes.comments}>
        {comments.map(({ _id, text, name }) => {
          return (
            <li key={_id}>
              <p>{text}</p>
              <div>
                By <address>{name}</address>
              </div>
            </li>
          );
        })}
      </ul>
    )
  );
};

export default CommentList;
