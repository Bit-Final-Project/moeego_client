import React, { useContext, useState } from 'react';
import '/src/css/articles/Write.css';
import { ArticleContext } from '../../context/article/ArticleContext';

const Write = () => {
    const { writeArticle } = useContext(ArticleContext);
    const [formData, setFormData] = useState({
        subject: '',
        content: '',
        category: '',
        // 추가적으로 필요한 필드
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dto = {
            subject: formData.title,
            content: formData.content,
            category: formData.category,
            // 추가적으로 필요한 필드
        };
        writeArticle(dto);
    };

    return (
        <form id='articleWriteForm' onSubmit={handleSubmit}>
            <div className="write-wrap">
                <div className=''><h1>모이고 글작성</h1></div>
                <div className="write-container">
                    {/* 선택 및 등록 버튼 */}
                    <div className="select-container">
                        <select name="category" onChange={handleChange}>
                            <option selected disabled>주제 선택</option>
                            <option value="4">달인 게시판</option>
                            <option value="2">자유 게시판</option>
                            <option value="3">QnA</option>
                        </select>
                        <button type="submit" className="submit-button">
                            등록
                        </button>
                    </div>

                    {/* 파일 업로드 */}
                    <div className="file-container">
                        <input type="file" id="file-upload" />
                        <label htmlFor="file-upload"><img className={'camera-img'} src='/image/camera.png' /></label>
                        <span>No file chosen</span>
                    </div>

                    {/* 제목 입력 */}
                    <div className="subject-container">
                        <input
                            type="text"
                            name="subject"
                            placeholder="제목을 입력해주세요."
                            maxLength={50}
                            onChange={handleChange}
                        />
                    </div>
                    <hr />

                    {/* 서비스와 지역 선택 */}
                    <div className="service-area-wrap">
                        <button>
                            <span>(선택) 서비스</span>
                        </button>
                        <button>
                            <span>(선택) 지역</span>
                        </button>
                    </div>
                    <hr />

                    {/* 본문 입력 */}
                    <div className="content-container">
                        <textarea
                            name="content"
                            placeholder="내용을 입력하세요"
                            maxLength={5000}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Write;
