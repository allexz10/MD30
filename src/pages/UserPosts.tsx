import postsData from '../data/PostsData';

const UserPosts = () => {
  const postsId = parseInt(document.location.pathname.replace(/\D/g, ''), 10);

  return (
    <div className="user__posts">
      <div className="posts__wrapper">
        {postsData
          .filter(({ userId }) => userId === postsId)
          .map(({ body, title, id }) => (
            <div key={id}>
              <p className="user__posts--title">{title}</p>
              <p className=" user__posts--text">{body}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserPosts;
