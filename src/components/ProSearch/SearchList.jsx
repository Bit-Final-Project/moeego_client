import React from 'react';
import { Link } from 'react-router-dom';

const SearchList = ({ id, name, rating, reviews, experience, intro }) => {
    return (
        <article className='proSearchListWrap'>
            <div className='proSearchListAWrap'>
                <Link className='proSearchListLink' to={`/pro/id=${id}`}>
                    <div className='proSearchListContentWrap'>
                        {/* 제목 */}
                        <div className='proSearchListTitleWrap'>
                            <h3>
                                {name} 
                            </h3>
                        </div>

                        {/* 상세정보 */}
                        <div className='proSearchListProInfoWrap'>
                            <span>⭐️ {rating}</span>
                            <span>({reviews})</span>
                            <span>경력 {experience}년</span>
                        </div>

                        {/* 소개 내용 */}
                        <p className='proSearchListIntro'>
                            {intro}
                        </p>
                    </div>
                </Link>
                {/* 프로필 이미지 */}
                <div className='proSearchListProfileWrap'>
                    <div className="user-profile-picture pro-profile-picture">
                        <img
                            width={150}
                            height={150}
                            src="https://static.cdn.soomgo.com/upload/profile/3d1bfeb9-0261-4ee1-a92e-cffaf31f15d8.png?webp=1&amp;h=320&amp;w=320"
                            alt="프로필 이미지"
                        />
                    </div>
                </div>
            </div>
        </article>
    );
};

export default SearchList;
