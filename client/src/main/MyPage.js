import React, { useEffect, useState } from 'react';
import usersUserinfoAxios from '../token/tokenAxios';

const MyPage = () => {
  const [userData, setUserData] = useState({});


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await usersUserinfoAxios.get("/users/userinfo");
        setUserData(response.data);
       
      } catch (error) {
        console.error("사용자 데이터를 가져오는 데 실패했습니다.", error);
      }
    };
    fetchUserData();
  }, []);   
  return (
    <div>
      <h1>마이 페이지</h1>
      {userData && (
        <ul>
          <li>이메일: {userData.email || "N/A"}</li>
          <li>사용자 번호: {userData.user_no || "N/A"}</li>
          <li>이름: {userData.username || "N/A"}</li>
          <li>자기 소개:{userData.user_introduction || "N/A"}</li>
          <li>주소: {userData.useraddress || "N/A"}</li>
        </ul>
      )}
    </div>
  );
};

export default MyPage;
