import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindIdCheck = () => {
  const [findEmail, setFindEmail] = useState("");
  const [swithUser, setSwithUser] = useState({
    username: "",
    nickname: "",
  });

  const navigate = useNavigate();

  const findSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/users/findIdCheck", {
        username: swithUser.username,
        nickname: swithUser.nickname,
      });

      const result = response.data;
      setFindEmail(result.email);
    } catch (error) {
      console.error("Failed to fetch user data.", error);
    }
  };

  return (
    <div>
      <form id="findForm" onSubmit={findSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            id="username"
            placeholder="이름"
            value={swithUser.username}
            onChange={(e) =>
              setSwithUser({ ...swithUser, username: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="nickname"
            id="nickname"
            placeholder="닉네임"
            value={swithUser.nickname}
            onChange={(e) =>
              setSwithUser({ ...swithUser, nickname: e.target.value })
            }
          />
        </div>
        <button type="submit" id="id-find">
          아이디 찾기
        </button>
      </form>
      <div className="result-box">
        {findEmail ? (
          <p>{findEmail}</p>
        ) : (
          <p className="inquiry">조회결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default FindIdCheck;
