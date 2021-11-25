import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import postsData from '../data/PostsData';
import './Page.scss';

type postType = typeof postsData[0];

const initialPost = {
  userId: 0,
  id: 0,
  title: '',
  body: '',
};

const User = () => {
  const [post, setPost] = useState<postType>(initialPost);
  const navigate = useNavigate();
  const { id } = useParams<'id'>() as { id: string };
  const { userId } = useParams<'userId'>() as {userId:string};

  const { length } = postsData;

  useEffect(() => {
    if (!id) {
      navigate('../../404');
    }
    const matched = postsData.find((item) => item.id === parseInt(id, 10));
    if (matched) {
      setPost(matched);
      return;
    }

    navigate('../../404');
  }, [id]);

  const { title, body } = post;

  return (
    <div className="countrie">
      <div className="countrie__item">
        <Link
          className="countrie__link countrie__link--prev"
          to={`/post/${+id !== 1 ? +id - 1 : length}`}
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
        <div className="item__wrapper">
          <h3 style={{ fontSize: '30px', marginBottom: '20px' }}>{title}</h3>
          <h4 style={{ fontSize: '22px', marginBottom: '40px' }}>{body}</h4>

          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <Link className="countrie__link--back" to="/posts">
              back
            </Link>
          </div>
        </div>

        <Link
          className="countrie__link countrie__link--next"
          to={`/post/${+id !== length ? +id + 1 : length - (length - 1)}`}
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
