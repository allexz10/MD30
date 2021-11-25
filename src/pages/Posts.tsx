import { Link } from 'react-router-dom';
import postsData from '../data/PostsData';

const Users = () => (
  <div className="countries">
    {postsData.map(({ title, id }) => (
      <div className="countries__button" key={id}>
        <Link className="countries__link" to={`/post/${id}`}>
          {title}
        </Link>
      </div>
    ))}
  </div>
);

export default Users;
