import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../security/AuthContext';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/LoginTest.css';
import axios from 'axios';
import LoginAxios from '../token/tokenAxios';

function Login() {
  
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await LoginAxios.post('/users/signin', {
        email,
        password,
      });

      const token = response.data.token;

      localStorage.setItem('token', token);
      console.log('Login successful. Token:', token);
      navigate('/'); // 이동 경로 수정
    } catch (error) {
      console.error('Login failed.', error.response.data.error);
    }
  };
  const handleGithubLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/users/github/login-url"
      );

      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch GitHub login URL. Status: ${response.status}`
        );
      }

      const githubUrl = await response.text();
      window.location.href = githubUrl;
    } catch (error) {
      console.error("GitHub login error:", error);
      setError("GitHub 로그인에 실패했습니다.");
    }
  };
  

  return (
    <div>
      <Header />
      <div class="wrap">
        <div class="login">
          <form
            className="LoginForm"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 className="title">로그인 후 S.With을 이용해보세요.</h1>
            <br />

            <div class="login_id">
              <h4 className="s_text">Email</h4>
              <label className=""></label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="이메일을 입력하세요"
              />
            </div>

            <div class="login_pw">
              <h4 className="s_text">Password</h4>
              <label className=""></label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
              />
            </div>
            <div className="loginButton">
              <button
                type="button"
                name="login"
                onClick={handleLogin}
                className="btn round"
                style={{
                  backgroundColor: "#75ddff",
                  width: "150px",
                  height: "50px",
                  margin: "20px",
                  borderRadius: "30px",
                }}
              >
                login
              </button>
            </div>
            <div className="login_sns">
              <button
                type="button"
                name="login"
                onClick={handleLogin}
                className="btn round"
                style={{
                  backgroundColor: "#ffffb5",
                  width: "350px",
                  height: "50px",
                  margin: "10px",
                  marginTop: "20px",
                  borderRadius: "30px",
                }}
              >
                카카오 로그인
              </button>

              <button
                onClick={handleGithubLogin}
                type="button"
                name="login"
                
                className="btn round"
                style={{
                  backgroundColor: "#ffffb5",
                  width: "350px",
                  height: "50px",
                  margin: "10px",
                  borderRadius: "30px",
                }}
              >
                Github 로그인
              </button>
            </div>
          </form>
          <br></br>
          <div className="loginButton">
            <li>
              <a href="/register">S.With 회원가입하기</a>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
