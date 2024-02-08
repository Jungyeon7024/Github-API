import React, { useEffect, useState } from "react";
import usersUserinfoAxios from "../token/tokenAxios";

const ModifyMyPage = () => {
  const [userData, setUserData] = useState({});
  const [newIntroduction, setNewIntroduction] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [isEditingIntroduction, setIsEditingIntroduction] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isPasswordMatching, setIsPasswordMatching] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await usersUserinfoAxios.get("/users/userinfo");
        setUserData(response.data);
        setNewIntroduction(response.data.user_introduction || "");
        setNewAddress(response.data.useraddress || "");
      } catch (error) {
        console.error("사용자 데이터를 가져오는 데 실패했습니다.", error);
      }
    };
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "user_introduction") {
      setNewIntroduction(value);
    } else if (name === "newPassword") {
      setNewPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    } else if (name === "newAddress") {
      setNewAddress(value);
    }
  };

  const handleUpdate = async () => {
    try {
      let updatedData = {};
      if (isEditingIntroduction) {
        updatedData = {
          user_introduction: newIntroduction,
        };
      } else if (isEditingPassword) {
        if (!isPasswordMatching) {
          console.error("비밀번호가 일치하지 않습니다.");
          return;
        }
        updatedData = {
          password: newPassword,
        };
      } else if (isEditingAddress) {
        updatedData = {
          useraddress: newAddress,
        };
      }

      const response = await usersUserinfoAxios.put(
        `/users/mypage/modify/${userData.email}`,
        updatedData
      );

      setUserData(response.data);
      setNewIntroduction("");
      setNewPassword("");
      setConfirmPassword("");
      setNewAddress("");
      setIsEditingIntroduction(false);
      setIsEditingPassword(false);
      setIsEditingAddress(false);
    } catch (error) {
      console.error("업데이트에 실패했습니다.", error);
    }
  };

  const handleEditIntroduction = () => {
    setIsEditingIntroduction(true);
  };

  const handleEditPassword = () => {
    setIsEditingPassword(true);
  };

  const handleCheckPasswordMatching = () => {
    setIsPasswordMatching(newPassword === confirmPassword);
  };

  return (
    <div>
      <h1>마이 페이지</h1>
      {userData && (
        <ul>
          <li>이메일: {userData.email || "N/A"}</li>
          <li>사용자 번호: {userData.user_no || "N/A"}</li>
          <li>이름: {userData.username || "N/A"}</li>

          <li>
            자기 소개:
            {isEditingIntroduction ? (
              <div>
                <input
                  type="text"
                  name="user_introduction"
                  value={newIntroduction}
                  onChange={handleInputChange}
                />
              </div>
            ) : (
              <span>{userData.user_introduction || "N/A"}</span>
            )}
            {!isEditingIntroduction && (
              <button onClick={handleEditIntroduction}>수정하기</button>
            )}
          </li>
          <li>
            비밀번호 변경:
            {isEditingPassword ? (
              <div>
                <input
                  type="password"
                  name="newPassword"
                  value={newPassword}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="비밀번호 확인"
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
                {!isPasswordMatching && (
                  <p style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</p>
                )}
                <button onClick={handleCheckPasswordMatching}>
                  비밀번호 일치 확인
                </button>
              </div>
            ) : (
              <button onClick={handleEditPassword}>수정하기</button>
            )}
          </li>
          <button onClick={handleUpdate}>수정 완료</button>
        </ul>
      )}
    </div>
  );
};

export default ModifyMyPage;
