import { Link } from 'react-router-dom';
import usersData from '../data/UsersData';

const Users = () => (
  <div className="countries">
    {usersData.map(({ name, id }) => (
      <div className="countries__button" key={id}>
        <Link className="countries__link" to={`/user/${id}`}>{name}</Link>
      </div>
    ))}
  </div>
);

export default Users;
