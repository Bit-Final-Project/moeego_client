import React, { useState, useEffect, useContext } from 'react';
import { ProContext } from "../../context/pro/ProContext";
import { useUserInfo } from "../../context/pro/UserInfoContext";
import KakaoMap from './KakaoMap';

const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const { keyword, setKeyword } = useContext(ProContext);
  const [map, setMap] = useState(null);
  const { userInfo } = useUserInfo();

  
  const handleSearch = (event) => {
    setKeyword(event.target.value);
  };
  
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // 엔터가 눌렸을 때 추가로 요청을 보내도록 합니다
      setKeyword(event.target.value); // 키워드를 업데이트
    }
  };
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    document.body.style.overflow = isModalOpen ? "auto" : "hidden";
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };
  
  // 마커 클릭 시 해당 위치로 지도 이동
  // const handleMarkerClick = (item) => {
    //   setSelectedLocation(item); // 선택된 위치 업데이트
    //   setItems([item]); // 클릭된 항목을 items로 업데이트
    // };
    
    const handleMarkerClick = (item) => {
      setSelectedLocation(item); // 선택된 위치 업데이트
      if (map) {
        const { lat, lng } = item;
        const newPosition = new window.kakao.maps.LatLng(lat, lng);
        const kakaoMap = window.kakao.maps.Map.getMap();
        kakaoMap.panTo(newPosition); // 지도 이동
      kakaoMap.setLevel(6);
    }
  };
  console.log(userInfo);
  
  return (
    <div className='proSearchBarWrap'>
      <div className='proSearchInputBarWrap'>
        <img src="/image/search.png" alt="검색버튼" />
        <input
          type="text"
          placeholder='어떤 서비스가 필요하세요?'
          maxLength={30}
          value={keyword}
          onChange={handleSearch}
          onKeyDown={handleKeyPress} // 엔터 키 눌렀을 때 검색 실행
        />
      </div>
      <div className='mapBtnWrap'>
        <button className='mapBtn' onClick={toggleModal}>
          <i className="icon">
            <svg width="20" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="prisma-icon primary" category="contents">
              <path d="M21.25 5.57258V17.7169C21.25 18.4977 20.7327 19.1841 19.982 19.3992L15.6477 20.641C15.3287 20.7324 14.9903 20.7313 14.672 20.6376L9.01265 18.9734C8.9633 18.9589 8.91067 18.96 8.86195 18.9765L5.06119 20.2633C3.92652 20.6474 2.75 19.8036 2.75 18.6057V6.44955C2.75 5.68666 3.24421 5.01167 3.97148 4.78127L8.39965 3.37841C8.73568 3.27195 9.09602 3.26945 9.43349 3.37124L15.0845 5.07559C15.1324 5.09005 15.1836 5.08978 15.2313 5.07483L18.9773 3.90246C20.1043 3.54974 21.25 4.39165 21.25 5.57258ZM19.75 17.7169V5.57258C19.75 5.40388 19.5863 5.2836 19.4253 5.33399L15.8136 6.46434L15.8136 19.0332L19.5689 17.9572C19.6761 17.9265 19.75 17.8284 19.75 17.7169ZM14.3136 18.9687L9.62701 17.5906L9.62702 4.99634L14.3136 6.40983L14.3136 18.9687ZM8.12701 17.6417L8.12702 5.03825L4.4245 6.21123C4.3206 6.24414 4.25 6.34057 4.25 6.44955L4.25 18.6057C4.25 18.7768 4.41807 18.8974 4.58017 18.8425L8.12701 17.6417Z" fill="white"></path>
            </svg>
          </i>
          <span className='mapTitle'>지도</span>
        </button>
      </div>

      {isModalOpen && (
        <div className={`map-modalOverlay ${isModalOpen ? 'show' : 'hide'}`} onClick={closeModal}>
          <div className="map-modalContent" onClick={(e) => e.stopPropagation()}>
            <div className='mapName'>
              <h2>주변 달인</h2>
              <button onClick={closeModal}>닫기</button>
            </div>
            <KakaoMap items={items} onMarkerClick={handleMarkerClick} />
            <ul className="map-content-wrap">
            {userInfo && userInfo.content && userInfo.content.map((item, index) => (
                <li key={index}>
                  
                  {item.name}/{item.address} 
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
