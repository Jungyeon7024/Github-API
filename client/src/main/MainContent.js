import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../css/MainPageCss.css';
import KakaoMap from './KakaoMap';
import '../css/KakaoMap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeartButton from './HeartButton';
import SearchIcon from './img/search.png';
import DeleteIcon from './img/delete.png';
import axios from 'axios';
import usersUserinfoAxios from '../token/tokenAxios';

function MainContent() {
  const [boards, setBoards] = useState([]);
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const response = await usersUserinfoAxios.get('/post_list');
        setBoards(response.data);
      } catch (error) {
        console.error('Error fetching boards:', error);
      }
    };

    fetchBoards();
  }, []);

  const [userData, setUserData] = useState('');
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // 서버에 사용자 정보를 가져오는 요청
        const response = await usersUserinfoAxios.get('/users/userinfo');
        setUserData(response.data);
        console.log(userData);
      } catch (error) {
        console.error('Failed to fetch user data.', error);
      }
    };

    fetchUserData();
  }, []);

  // const boardsData = [
  //   {
  //     id: 1,
  //     category: "스터디",
  //     deadline: "2024.03.01",
  //     title: "같이 성장하실 백엔드 개발자 모집합니다.",
  //     skill: "React, Node.js",
  //     profileImg:
  //       "https://i.pinimg.com/originals/1d/31/ed/1d31ed10d5c74bcf4f7af6471732ba2f.jpg",
  //     username: "작성자아이디",
  //     commentCount: 11,
  //   },
  // ];

  const [isSkillVisible, setSkillVisible] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState([]);
  const [isCityVisible, setCityVisible] = useState(false);
  const [selectedCity, setSelectedCity] = useState([]);
  const [isRecruitVisible, setRecruitVisible] = useState(false);
  const [selectedRecruit, setSelectedRecruit] = useState([]);

  const [isMethodVisible, setMethodVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState([]);

  const [like, setLike] = useState(false);

  const toggleContentSkill = (skill) => {
    setSkillVisible(!isSkillVisible);
    setSelectedSkill(skill);
  };

  const toggleContentCity = (city) => {
    setCityVisible(!isCityVisible);
    setSelectedCity(city);
  };

  const toggleContentRecruit = (recruit) => {
    setRecruitVisible(!isRecruitVisible);
    setSelectedRecruit(recruit);
  };

  const toggleContentMethod = (method) => {
    setMethodVisible(!isMethodVisible);
    setSelectedMethod(method);
  };

  const methods = ['온라인', '오프라인', '온/오프 병행'];

  const cities = [
    '강남/역삼/삼성',
    '신사/청담/압구정',
    '서초/교대/사당',
    '잠실/송파/강동',
    '을지로/명동/중구/동대문',
    '서울역/이태원/용산',
    '종로/인사동',
    '홍대/합정/마포/서대문',
    '여의도',
    '구로/신도림/금천',
    '건대입구/성수/왕십리',
    '성북/강북/노원/도봉',
    '기타',
  ];

  const recruits = ['프로젝트', '스터디', '멘토/멘티'];

  const toggleLike = () => {
    setLike(!like);
  };

  return (
    <div className="Welcome">
      <h2>Dashboard</h2>
      {userData ? (
        <div>
          <p>
            Welcome to the Dashboard, {userData.nickname}님! You are logged in.
          </p>
        </div>
      ) : (
        <p>You are not logged in.</p>
      )}

      <div className="banner">
        <div className="banner_all">
          <KakaoMap />
        </div>
      </div>
      <br />
      <br />
      <br />
      <main className="main_board_list">
        <div className="toggle_section">
          <div className="category_section">
            <div className="category_section_set">
              <div className="all_toggle">
                <div className="all_toggle_2">
                  <div className="all_toggle_3">
                    <button
                      className="region_toggle_button"
                      type="button"
                      aria-expanded={isSkillVisible ? 'true' : 'false'}
                      onClick={() => toggleContentSkill('')}
                    >
                      기술스택
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        class="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button
                      className="region_toggle_button"
                      type="button"
                      aria-expanded={isCityVisible ? 'true' : 'false'}
                      onClick={() => toggleContentCity('')}
                    >
                      지역
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        class="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button
                      className="region_toggle_button"
                      type="button"
                      aria-expanded={isMethodVisible ? 'true' : 'false'}
                      onClick={() => toggleContentMethod('')}
                    >
                      진행방식
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        class="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </button>
                  </div>

                  <div>
                    <button
                      className="region_toggle_button"
                      type="button"
                      aria-expanded={isRecruitVisible ? 'true' : 'false'}
                      onClick={() => toggleContentRecruit('')}
                    >
                      모집구분
                      <svg
                        height="20"
                        width="20"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        focusable="false"
                        class="css-8mmkcg"
                      >
                        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="search_container">
              <img className="search_img" src={SearchIcon} alt="search_icon" />
              <input
                placeholder="제목, 글 내용을 검색"
                class="searchInput"
                value=""
              ></input>
            </div>
          </div>

          {/* 진행방식 */}
          <div
            id="region_section"
            className={
              isMethodVisible ? 'method-content active' : 'method-content'
            }
          >
            {isMethodVisible && (
              <div className="region_section">
                <ul className="region_seoul">
                  {methods.map((method) => (
                    <li
                      key={method}
                      className="seoulToggle"
                      onClick={() => toggleContentMethod(method)}
                    >
                      {method}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 모집구분 */}
          <div
            id="region_section"
            className={
              isRecruitVisible ? 'recruit-content active' : 'recruit-content'
            }
          >
            {isRecruitVisible && (
              <div className="region_section">
                <ul className="region_seoul">
                  {recruits.map((recruit) => (
                    <li
                      key={recruit}
                      className="seoulToggle"
                      onClick={() => toggleContentRecruit(recruit)}
                    >
                      {recruit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 지역 */}
          <div
            id="region_section"
            className={isCityVisible ? 'city-content active' : 'city-content'}
          >
            {isCityVisible && (
              <div className="region_section">
                <ul className="region_seoul">
                  {cities.map((city) => (
                    <li
                      key={city}
                      className="seoulToggle"
                      onClick={() => toggleContentCity(city)}
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* 기술스택 */}
          <div
            id="region_section"
            className={
              isSkillVisible ? 'skill-content active' : 'skill-content'
            }
          >
            {isSkillVisible && (
              <div className="region_section">
                <ul className="skill">
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Angular.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Angular</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/C.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">C</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/C++.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">C++</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Django.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Django</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Docker.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Docker</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Express.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Express</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Figma.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Figma</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Firebase.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Firebase</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Flask.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Flask</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Flutter.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Flutter</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Git.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Git</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Go.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Go</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/GRAPH_QL.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">GraphQL</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/JAVA_SCRIPT.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Java Script</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Java.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Java</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Kubernetes.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Kubernetes</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/MONGO_DB.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">MongoDB</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/mySql.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">mySql</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/NEST_JS.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">NestJS</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/NEXT_JS.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">NextJS</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/NODE_JS.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">NodeJS</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Php.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Php</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Python.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Python</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/R.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">R</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/react.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">React</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/REACT_NATIVE.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">React Native</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Spring.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Spring</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Svelte.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Svelte</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Swift.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Swift</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/TYPE_SCRIPT.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Type Script</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Unity.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Unity</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Vue.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Vue</span>
                  </li>
                  <li className="skillToggle">
                    <img
                      className="skill_logo"
                      src={process.env.PUBLIC_URL + '../img/Zeplin.png'}
                      alt="skillLogo"
                    />
                    <span className="skill_text">Zeplin</span>
                  </li>
                </ul>
                <div className="selected">
                  <ul className="selected_1">
                    <li className="selected_2">
                      <span className="selected_text">React</span>
                      <img
                        src={DeleteIcon}
                        className="delete_img"
                        alt="deleteButton"
                      />
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        <ul className="board_box_section">
          {boards.map((board) => (
            <a key={board.post_no} className="board_box" href="/">
              <li>
                <div className="study_sort_badge">
                  <div className="study_sort_badge_content">
                    {board.recruit_type}
                  </div>
                  <HeartButton
                    className="heart_button"
                    like={like}
                    onClick={toggleLike}
                  />
                </div>
                <div className="study_schedule">
                  <p className="">마감일</p>
                  <p>|</p>
                  <p>{board.recruit_deadline}</p>
                </div>
                <div>
                  <h1 className="board_title">{board.study_title}</h1>
                </div>
                <ul className="skill_icon_section">
                  {board.studyPostWithSkills.map((skill, index) => (
                    <li key={index}>{skill.skill_name}</li>
                  ))}
                </ul>
                <div className="board_content_border"></div>
                <section className="board_info_section">
                  <div className="board_info_left">
                    <div className="user_profile_img">
                      <img
                        className="user_profile_img_set"
                        width="30px"
                        height="30px"
                        src={board.profileImg}
                        alt="Profile"
                      />
                    </div>
                    <div>{board.nickname}</div>
                  </div>
                  <div className="board_info_right">
                    <div className="comment_count_section">
                      <p>댓글아이콘</p>
                      <p>{board.commentCount}</p>
                    </div>
                  </div>
                </section>
              </li>
            </a>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default MainContent;
