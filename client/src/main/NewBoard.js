import React, { useState } from 'react';
import Header from './Header';
import '../css/NewBoard.css';
import StuduyProject from './StudyProject';
import FormFour from './FormFour';

function NewBoard() {
  const [selectedItem1, setSelectedItem1] = useState(null);

  const handleItem1Click = (item1) => {
    if (selectedItem1 === item1) {
      // 클릭된 아이템이 현재 선택된 아이템과 같으면 선택 해제
      setSelectedItem1(null);
    } else {
      // 아니면 새로운 아이템 선택
      setSelectedItem1(item1);
    }
  };

  const [selectedItem2, setSelectedItem2] = useState(null);

  const handleItem2Click = (item2) => {
    if (selectedItem2 === item2) {
      // 클릭된 아이템이 현재 선택된 아이템과 같으면 선택 해제
      setSelectedItem2(null);
    } else {
      // 아니면 새로운 아이템 선택
      setSelectedItem2(item2);
    }
  };

  return (
    <div>
      <Header />

      <h1 className="title">새 S.With 작성하기</h1>
      <div className="section_1">
        <section>
          <div className="post_1">
            <span className="post_1_title">1</span>
            <h2 className="post_title">S.With 모집 구분을 골라주세요.</h2>
          </div>

          <ul className="postToggle_ul">
            <li
              className={`postToggle ${
                selectedItem1 === '스터디' ? 'clicked' : ''
              }`}
              onClick={() => handleItem1Click('스터디')}
            >
              <span className="postToggle_text">스터디</span>
            </li>

            <li
              className={`postToggle ${
                selectedItem1 === '프로젝트' ? 'clicked' : ''
              }`}
              onClick={() => handleItem1Click('프로젝트')}
            >
              <span className="postToggle_text">프로젝트</span>
            </li>

            <li
              className={`postToggle ${
                selectedItem1 === '멘토/멘티' ? 'clicked' : ''
              }`}
              onClick={() => handleItem1Click('멘토/멘티')}
            >
              <span className="postToggle_text">멘토/멘티</span>
            </li>
          </ul>
          <br />
          <br />
          <div className="post_1">
            <span className="post_1_title">2</span>
            <h2 className="post_title">S.With 진행 방식을 골라주세요.</h2>
          </div>
          <ul className="postToggle_ul">
            <li
              className={`postToggle ${
                selectedItem2 === '온라인' ? 'clicked' : ''
              }`}
              onClick={() => handleItem2Click('온라인')}
            >
              <span className="postToggle_text">온라인</span>
            </li>
            <li
              className={`postToggle ${
                selectedItem2 === '오프라인' ? 'clicked' : ''
              }`}
              onClick={() => handleItem2Click('오프라인')}
            >
              <span className="postToggle_text">오프라인</span>
            </li>
          </ul>
          <br />
          <br />
          {/* Conditionally render StuduyProject based on the selected item */}
          {selectedItem1 === '스터디' || selectedItem1 === '프로젝트' ? (
            <StuduyProject />
          ) : null}
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <FormFour />
        </section>
      </div>
    </div>
  );
}

export default NewBoard;
