import React from 'react';
import '/src/css/articles/PostReactState.css';

const PostReactState = ({articleData}) => {
    return (
        <div className="post-react-state">
            <div className="react-item">
            <svg width="15px" height="15px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none" transform="rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"><path fill="#b2b2b2" fillRule="evenodd" d="M7.596 1.516l-2.56 5.759V14.5h7.475a.75.75 0 00.741-.637l.994-6.55a.75.75 0 00-.741-.862H9.738c-.69 0-1.25-.56-1.25-1.25V2.575c0-.53-.385-.972-.892-1.06zM3.536 14.5V7.866H2.25a.75.75 0 00-.75.75v5.134c0 .414.336.75.75.75h1.287zM3.8 6.366L6.31.716A1.206 1.206 0 017.412 0a2.575 2.575 0 012.576 2.575v2.376h3.517a2.25 2.25 0 012.224 2.588l-.994 6.549A2.25 2.25 0 0112.511 16H2.25A2.25 2.25 0 010 13.75V8.616a2.25 2.25 0 012.25-2.25H3.8z" clipRule="evenodd"/></g></svg>
                <span className="react-text">{articleData.likes}</span>
            </div>
            <div className="react-item">
                <img
                    src="/image/chat_icon.svg"
                    alt="댓글"
                    className="react-icon"
                />
                <span className="react-text">{articleData.commentCount}</span>
            </div>
        </div>
    );
};

export default PostReactState;
