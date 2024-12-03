import React from 'react';
import SearchBar from './SearchBar';
import SearchList from './SearchList';

const Content = () => {
    //----------------------------
    const searchListItems = [
        { id: 1, name: "삐까뻔쩍홈케어 ⭐️ 5.0 후기가 인증하는 업체입니다⭐", rating: "5.0", reviews: "8,100", experience: "20", intro: "달인 소개내용 앙기모띠" },
        { id: 2, name: "HomeCare Pro ⭐️ 4.8", rating: "4.8", reviews: "5,000", experience: "15", intro: "홈케어 전문가 소개내용" },
    ];
    //------------------------------
    return (
        <div className='ContentWrap'>
            <section>
                <SearchBar />
                {searchListItems.map(item => (
                    <SearchList key={item.id} id={item.id} name={item.name} rating={item.rating} reviews={item.reviews} experience={item.experience} intro={item.intro} />
                ))}
            </section>
        </div>
    );
};

export default Content;