import React from 'react';
import Header from './Header';
import '../css/StudyDetail.css';

function StudyDetail() {
  return (
    <div>
      <Header />
      <div className="studyDetail_wrapper">
        <section className="postHeader">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 448 512"
            cursor="pointer"
            height="30"
            width="30"
          >
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path>
          </svg>
          <div className="studyContent_title">여기에 제목이 들어가여</div>
          <div className="studyContent_user_date">
            <div className="studyContent_user">
              <img
                className="user_img"
                width="30px"
                height="30px"
                alt="Profile"
              />
              <div className="username">유저닉네임</div>
            </div>
            <div className="studyContent_seperator"></div>
            <div className="studyContent_registerDate">2024.01.22</div>
          </div>
          <section>
            <ul className="studyContent_grid">
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">모집구분</span>
                <span className="studyInfo_title_a">프로젝트</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">진행방식</span>
                <span className="studyInfo_title_a">오프라인</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">모집인원</span>
                <span className="studyInfo_title_a">8명</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">시작예정일</span>
                <span className="studyInfo_title_a">2024.02.11</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">예상기간</span>
                <span className="studyInfo_title_a">3개월</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">모집마감</span>
                <span className="studyInfo_title_a">2024.02.01</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">지역</span>
                <span className="studyInfo_title_a">강남/역삼/삼성</span>
              </li>
              <li className="studyContent_contentWrapper">
                <span className="studyInfo_title">기술스택</span>
                <span className="studyInfo_title_a"></span>
              </li>
            </ul>
          </section>
        </section>
        <div className="postContent_wrapper">
          <h2 className="postInfo">S.with 소개합니다</h2>
          <p className="postContent">
            여기에 이제 프로젝트나 스터디 소개글이 들어갑니다
            <br />
            <br /> [프로젝트 소개] 우선 이 프로젝트는 배포해서 유저
            인터뷰/데이터분석 등을 통해 같이 PMF를 찾고 구현하는 게 목표입니다.
            현재 서비스는 MVP 개발 중이며 약 60프로 완성되었어요. 2/3 배포
            예정인 프로젝트입니다. 베타서비스 유저를 임시로 3일 간 모집했을 때
            27명이 신청해주셨어요. 배포 전까지 약 100명의 베타서비스 유저를
            모집할 예정이에요. 팀원은 기획을 맡고 있는 저와 백엔드, 프론트엔드
            각각 한 분씩 계십니다. 프론트엔드, 디자이너 한 분을 모시고 있어요.{' '}
            <br />
            <br /> [팀원] 프론트엔드/UIUX디자이너 분을 구하고 있습니다. - 경력과
            연차는 무관합니다. 직접 구현/개발이 가능하신 역량이면 됩니다.
            포트폴리오 쌓고자 하시는 분도 같이 가능합니다. - Next.js,
            TypeScript,등의 웹 개발 역량 보유 - 프로젝트 완성에 대해 책임감
            있으신 분, 자유로운 의사소통 및 협업이 가능하신 분
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </p>
        </div>
        <div style={{ paddingBottom: '80px' }}>
          <div className="commentInput">
            <div className="commentInput_comment">
              댓글 <span className="commentInput_count">1</span>
            </div>
            <div className="commentInput_container">
              <img
                className="commentInput_profile"
                width="30px"
                height="30px"
                alt="Profile"
              />
              <textarea
                class="commentInput_commentText"
                placeholder="댓글을 입력하세요."
              ></textarea>
            </div>
            <div className="commentInput_buttonWrapper">
              <button className="commentInput_buttonComplete" name="register">
                댓글 등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudyDetail;
