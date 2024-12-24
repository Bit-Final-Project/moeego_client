import React, { useEffect, useState } from 'react';
import apiAxios from '../../../api/apiAxios';
import '../../../css/admin/Membership.css'; 

const MemberList = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [member, setMember] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const [totalPages, setTotalPages] = useState(1); // 전체 페이지 수
    const pageSize = 30; // 페이지 당 아이템 수 고정

    // 회원 데이터 불러오기
    const fetchMemberData = async (page = 1) => {
        try {
            const response = await apiAxios.get(`/api/admin/member/user?page=${page}&size=${pageSize}`);
            setMember(response.data.content || []); // 페이지에 해당하는 데이터
            setTotalPages(response.data.totalPages); // 전체 페이지 수
            setCurrentPage(page); // 현재 페이지 업데이트
        } catch (err) {
            console.error('API 호출 오류:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    // 컴포넌트 마운트 시 API 호출
    useEffect(() => {
        fetchMemberData(currentPage); // 데이터 초기 로드
    }, [currentPage]);

    // 로딩 중일 때 UI 표시
    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;

    // 날짜 형식 변환 함수
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('ko-KR'); // 한국 형식으로 날짜 출력
    };

    // 이메일 도메인 파싱 함수
    const parseEmail = (email) => {
        if (email.includes('naver ')) {
            return '네이버 이메일';
        } else if (email.includes('kakao ')) {
            return '카카오 이메일';
        }
        return email; // 나머지 이메일은 그대로 반환
    };

    // 페이지 변경 함수
    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="membership-container">
            <div className='membership-inner-container'>
                <h2 className="membership-title">👫 회원 관리 👫</h2>

                <div className="membership-table-wrapper">
                    <hr className="membership-divider" />
                        <table className="membership-table">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>이름</th>
                                    <th>이메일</th>
                                    <th>전화번호</th>
                                    <th>주소</th>
                                    <th>가입 날짜</th>
                                </tr>
                            </thead>
                            <tbody>
                                {member.map((row) => (
                                    <tr key={row.memberNo}>
                                        <td>{row.memberNo}</td>
                                        <td>{row.name}</td>
                                        <td>{parseEmail(row.email)}</td> {/* 이메일 파싱 */} 
                                        <td>{row.phone}</td>
                                        <td>{row.address}</td>
                                        <td>{formatDate(row.joinDate)}</td> {/* 날짜 형식 변환 */}
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    {/* 페이지 네비게이션 추가 */}
                    <div className="membership-pagination">
                        <button 
                            onClick={() => handlePageChange(currentPage - 1)} 
                            disabled={currentPage === 1}>이전</button>

                        {/* 페이지 번호 버튼 */}
                        {[...Array(totalPages).keys()].map((i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={currentPage === i + 1 ? 'active' : ''}>
                                {i + 1}
                            </button>
                        ))}

                        <button 
                            onClick={() => handlePageChange(currentPage + 1)} 
                            disabled={currentPage === totalPages}>다음</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberList;
