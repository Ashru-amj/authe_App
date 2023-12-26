
import { Outlet, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'
const PrivateRoute = () => {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();

  console.log('Current User:', currentUser);

  return currentUser ? <Outlet/> : (() => navigate('/sign_in'))();
};
export default PrivateRoute