import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header';
import MainPage from './MainPage';
import NewBoard from './NewBoard';
import Logout from './Logout';
import Login from './Login';
import RegisterUser from './RegisterUser';
import StudyDetail from './StudyDetail';
import ModifyPage from './ModifyPage';
import GithubRegister from './GithubRegister';

import FindIdCheck from "./FindIdCheck";




// function AuthenticatedRoute({ children }) {
//   const authContext = useAuth();

//   if (authContext.isAuthenticated) return children;

//   return <Navigate to="/" />;
// }

export default function Control() {
  return (
    <div className="Main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/new" element={<NewBoard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/detail" element={<StudyDetail />} />
          <Route path="/mypage/modify" element={<ModifyPage />} />
          <Route path="/github/register" element={<GithubRegister />} />
          <Route path="/findIdCheck" element={<FindIdCheck />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
