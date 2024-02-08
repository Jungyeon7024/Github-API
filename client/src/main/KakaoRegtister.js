
import KakaoLogin from "react-kakao-login";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "../css/RegisterUser.css";
import Required from "./img/required.png";
import sample6_execDaumPostcode from "./KakaoAddress";
const KakaoRegister = () => {
  const [githubInfo, setGithubInfo] = useState({
    nickname: "",
  });
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [confirm, setConfirm] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [kakaoUser, setKakaoUser] = useState("");
  const [swithUser, setNewUser] = useState({
    email: "",
    password: "",
    username: "",
    nickname: "",
    img: "",
    useraddress: "",
    user_introduction: "",
    role: "",
  });
 useEffect(() => {
   const fetchData = async () => {
     try {
       // 서버에 사용자 정보를 가져오는 GET 요청
       const userDataResponse = await axios.get(
         "http://localhost:3000/users/kakao/callback"
       );
       // 받은 응답을 처리
       console.log(userDataResponse.data);
       setGithubInfo(userDataResponse.data);

       // 서버에 데이터를 전송하고 응답을 받는 POST 요청
       const postDataResponse = await axios.post(
         "http://localhost:3000/users/kakao/callback",
         {
           // 전송할 데이터 객체
           nickname: nickname,
           email: email,
           username: username
           // 이하 원하는 데이터 필드들을 추가할 수 있음
         }
       );
       // 받은 응답을 처리
       console.log(postDataResponse.data);
     } catch (error) {
       console.error("Failed to fetch data.", error);
     }
   };

   fetchData();
 });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setKakaoUser((prevUser) => ({ ...prevUser, [name]: value }));
  };
return (
  <div>
    <Header />

    <br></br>
    <h1 className="title">회원가입</h1>
    <br></br>
    <h3 className="subTitle">회원가입후 S.With에 참여하세요</h3>
    <div className="container_register">
      <form className="m-5 mb-1">
        <div className="register_id ml-5">
          <div className="two">
            <h4 className="s_text_id">
              아이디(email)
              <img src={Required} className="required_img" />
            </h4>
          </div>
          <label className="m-2"></label>
          <input
            className="textInput"
            type="text"
            name="email"
            value={kakaoUser.email}
            onChange={handleInputChange}
          />
          <button
           
            className="btn round"
            style={{
              backgroundColor: "#ffffb5",
              width: "100px",
              height: "50px",
              margin: "10px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
          />
           
          <br />
          
        </div>
        

        <div className="register_id m-3">
          <div className="two">
            <h4 className="s_text">
              이름(name)
              <img src={Required} className="required_img" />
            </h4>
          </div>
          <label className="m-2"></label>
          <input
            className="textInput"
            type="text"
            name="username"
            value={kakaoUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div className="register_id m-3">
          <div className="two">
            <h4 className="s_text">
              닉네임(nick name)
              <img src={Required} className="required_img" />
            </h4>
          </div>
          <label className="m-2"></label>
          <input
            className="textInput"
            type="text"
            name="nickname"
            value={kakaoUser.nickname}
            onChange={handleInputChange}
          />
        </div>
        <div className="register_id m-3">
          <div className="two">
            <h4 className="s_text">프로필 사진(profile image)</h4>
          </div>
          <label className="m-2"></label>
         
          {/* 프로필 사진 미리보기를 위한 이미지 컨테이너 */}
          <div className="profile-image-container">
            {swithUser.img && (
              <img
                src={swithUser.img}
                alt="프로필 이미지"
                className="profile-image"
              />
            )}
          </div>
        </div>
        <div className="register_id m-3">
          <div className="two">
            <h4 className="s_text">
              주소(address)
              <img src={Required} className="required_img" />
            </h4>
          </div>
          <label className="m-2"></label>
          <input type="text" id="useraddress" />
          <br />
          <input
            name="useraddress"
            className="btn round"
            style={{
              backgroundColor: "#ffffb5",
              width: "150px",
              height: "50px",
              margin: "10px",
              marginTop: "5px",
              borderRadius: "30px",
            }}
            type="button"
            value="주소 찾기"
            onClick={() => sample6_execDaumPostcode({ setNewUser })}
          />
        </div>

        <div className="register_id m-3">
          <div className="two">
            <h4 className="s_text">자기소개(self introduction)</h4>
          </div>
          <label className="m-2"></label>
          <input
            className="textInput"
            type="text"
            name="user_introduction"
            value={swithUser.user_introduction}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <input
            type="text"
            name="role"
            value={swithUser.role}
            onChange={handleInputChange}
            hidden={true}
          />
        </div>
        <button
     
          type="button"
          name="login"
          className="btn round"
          style={{
            backgroundColor: "#75ddff",
            width: "200px",
            height: "50px",
            margin: "10px",
            marginTop: "20px",
            marginBottom: "10px",
            borderRadius: "30px",
          }}
        >
          회원가입 완료
        </button>
      </form>
      <div className="login_sns">
        <button
          type="button"
          name="login"
          className="btn round"
          style={{
            backgroundColor: "#ffffb5",
            width: "150px",
            height: "50px",
            margin: "10px",
            marginTop: "20px",
            borderRadius: "30px",
          }}
        >
          카카오 로그인
        </button>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
  </div>
);
}

export default KakaoRegister;
