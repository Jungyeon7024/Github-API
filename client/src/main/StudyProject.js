import React, { useState } from "react";
import "../css/NewBoard.css";

export default function StuduyProject() {
  const [recruitmentCount, setRecruitmentCount] = useState("");

  const [duration, setDuration] = useState("");
  const [techStack, setTechStack] = useState([]);
  const [deadline, setDeadline] = useState("");
  const [startDate, setStartDate] = useState("");
  const [region, setRegion] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // You can handle form submission logic here
    console.log("Form submitted with values:", {
      recruitmentCount,
      duration,
      techStack,
      deadline,
      startDate,
      region,
    });
  };

  return (
    <div>
      <div className="post_1">
        <span className="post_1_title">3</span>
        <h2 className="post_title">S.With 기본 정보를 입력해주세요.</h2>
      </div>
      <form onSubmit={handleFormSubmit} className="all_form">
        <div className="all_form_div">
          <label className="post_3_label">
            모집인원 :
            <input
              type="number"
              value={recruitmentCount}
              onChange={(e) => setRecruitmentCount(e.target.value)}
            />
          </label>

          <label className="post_3_label">
            진행기간 :
            <input
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </label>

          <label className="post_3_label">
            기술스택 :
            <select
              value={techStack}
              onChange={(e) => setTechStack(e.target.value)}
            >
              <option value="react">React</option>
              <option value="Java">Java</option>
              {/* Add more options as needed */}
            </select>
          </label>

          <label className="post_3_label">
            모집마감 :
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </label>
          <label className="post_3_label">
            지역구분 :
            <select value={region} onChange={(e) => setRegion(e.target.value)}>
              <option value="react">강남</option>
              <option value="Java">여의도</option>
              {/* Add more options as needed */}
            </select>
          </label>
          <label className="post_3_label">
            첫모임장소 :
            <input
              type="text"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </label>
        </div>
      </form>
    </div>
  );
}