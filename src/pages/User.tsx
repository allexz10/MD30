import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import usersData from '../data/UsersData';
import './Page.scss';

type userType = typeof usersData[0];

const initialUser = {
  id: 0,
  name: '',
  username: '',
  email: '',
  city: '',
  phone: '',
  website: '',
};

const User = () => {
  const [user, setUser] = useState<userType>(initialUser);
  const navigate = useNavigate();
  const { id } = useParams<'id'>() as { id: string };

  const { length } = usersData;

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }
    const matched = usersData.find((item) => item.id === parseInt(id, 10));
    if (matched) {
      setUser(matched);
      return;
    }

    navigate('../../404');
  }, [id]);

  const {
    name, username, email, city, phone, website,
  } = user;

  return (
    <div className="countrie">
      <div className="user__item">
        <Link
          className="countrie__link countrie__link--prev"
          to={`/user/${+id !== 1 ? +id - 1 : length}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
          </svg>
        </Link>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="item__wrapper">
            <h3 style={{ fontSize: '30px', marginBottom: '20px' }}>{name}</h3>
            <p>{`Username: ${username}`}</p>
            <p>{`E-mail: ${email}`}</p>
            <p>{`City: ${city}`}</p>
            <p>{`Phone: ${phone}`}</p>
            <p>{`Website: ${website}`}</p>
            <div
              style={{
                display: 'flex',

                marginTop: '40px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '240px ',
                }}
              >
                <Link className="countrie__link--back" to="/users">
                  back
                </Link>
                <Link
                  className="countrie__link--back"
                  to={`/post/${id}/userposts`}
                >
                  all posts
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Link
          className="countrie__link countrie__link--next"
          to={`/user/${+id !== length ? +id + 1 : length - (length - 1)}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default User;
