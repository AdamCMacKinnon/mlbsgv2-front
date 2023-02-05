import { Navigate, Outlet } from 'react-router-dom';

export default function Protected(props: any) {
  const {isAllowed, redirectPath = '/login', children} = props;

  if(!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }
  
  return children ? children : <Outlet />;
}