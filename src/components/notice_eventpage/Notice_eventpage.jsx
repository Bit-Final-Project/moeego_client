import React from 'react';
import Notice from './Notice';
import Event from './Event';
import '../../css/notice/notice_event.css';
import { Link } from 'react-router-dom';

const Notice_eventPage = () => {

    return (
        <div className='Notice_eventPage'>
            <h1>공지사항 / 이벤트</h1>
            <div className='noticePageWrap'>
                <ul className='noticeEventMenu'>
                    <li><Link to={'/article'}>전체글</Link></li>
                    <li><Link to={'/article/hot'}>인기글</Link></li>
                    <li><Link to={'/article/review'}>최신리뷰</Link></li>
                    <li><Link to={'/article/free'}>자유게시판</Link></li>
                    <li><Link to={'/article/qna'}>Q&A</Link></li>
                    <li><Link to={'/article/pro'}>고수 게시판</Link></li>
                </ul>
                <div className='noticeListWrap'>
                    <Notice />
                </div>
                <div className='eventListWrap'>
                    <Event />
                </div>
            </div>
        </div>
    );
};

export default Notice_eventPage;