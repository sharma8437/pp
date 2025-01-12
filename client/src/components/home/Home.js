import { Link } from 'react-router-dom';

export const Home = () => (
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',height:'100vh' }}>    <Link to="/login">
      <button >Login</button>
    </Link>
    <Link to="/signup">
      <button >Signup</button>
    </Link>
  </div>
);

export default Home;
