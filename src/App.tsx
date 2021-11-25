import { Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import User from './pages/User';
import Posts from './pages/Posts';
import Post from './pages/Post';
import UserPosts from './pages/UserPosts';
import './App.scss';

const App = () => (
  <>
    <nav className="nav">
      <Link className="nav__link" to="/users">
        Users
      </Link>
      &nbsp;&nbsp;
      <Link className="nav__link" to="/posts">
        Posts
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />
      <Route path="/user/" element={<User />} />
      <Route path="/user/:id" element={<User />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/post/" element={<Post />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/post/:id/userposts" element={<UserPosts />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export default App;
