import React, { useContext, useEffect, useState } from 'react';
import '../../css/admin/DashBoard.css';
import { useNavigate } from 'react-router-dom';
import MemberPieChart from './MemberPieChart';
import LineChart from './LineChart';
import apiAxios from '../../api/apiAxios';
import { AdminContext } from '../../context/admin/AdminContext'; 

const DashBoard = () => {
    const navigate = useNavigate();
    const { loading, setLoading, error, setError } = useContext(AdminContext);

    const [events, setEvents] = useState([]); // 이벤트 게시판 데이터
    const [notices, setNotices] = useState([]); // 공지사항 게시판 데이터
    const [weekMemberData, setWeekMemberData] = useState([]); // 일주일 회원 가입 수
    const [weekProData, setWeekProData] = useState([]); // 일주일 고수 회원 등록 수 ( 고수 )
    const [weekLeaveMemberData, setweekLeaveMemberData] = useState([]); // 일주일 탈퇴 회원 수

    const [allMemberData, setAllMemberData] = useState([]);
    const [approvedMemberData, setApprovedMemberData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [eventRes, noticeRes, weekMemberDataRes, weekProDataRes, weekLeaveMemberDataRes] =
                    await Promise.all([
                        apiAxios.get('/api/article/event'),
                        apiAxios.get('/api/article/notices'),
                        apiAxios.get('/api/member/weekMemberData'),
                        apiAxios.get('/api/member/weekProData'),
                        apiAxios.get('/api/member/weekLeaveMemberData'),
                    ]);

                setEvents(eventRes.data);
                setNotices(noticeRes.data);
                setWeekMemberData(weekMemberDataRes.data);
                setWeekProData(weekProDataRes.data);
                setweekLeaveMemberData(weekLeaveMemberDataRes.data);
                setError(null); // 에러 초기화
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [setLoading, setError]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>오류: {error}</div>;


    return (
        <div className="adminDashBoard-container">
            <div className="adminDashBoard-wrapper">
                <div className="adminDashBoard-header">
                    <h1>대시보드 | 각종 이력을 간략히 확인할 수 있습니다.</h1>
                </div>
                <div className="chart-wrapper">
                    <LineChart weekMemberData={weekMemberData} weekProData={weekProData} weekLeaveMemberData={weekLeaveMemberData} />
                    {/* <MemberPieChart data={allmemberData}/> 파이 차트 */}
                </div>

                <div className="adminDashBoard-count-wrapper">
                    <div className="adminDashBoard-count-section">
                        <div className="adminDashBoard-count-header">
                            <p>인기 이벤트</p>
                            <div className="adminDashBoard-count-button-wrapper">
                                <button
                                    className="adminDashBoard-count-button"
                                    onClick={() => navigate('/admin/EventList')}>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                        <table className="adminDashBoard-table">
                            <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>내용</th>
                                    <th>조회수</th>
                                    <th>등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {events.length > 0 ? events.slice(0, 3).map(event => (
                                    <tr key={event.id}>
                                        <td>{event.title}</td>
                                        <td>{event.subject}</td>
                                        <td>{event.view}</td>
                                        <td>{event.date}</td>
                                    </tr>
                                )) : <tr><td colSpan="4">데이터가 없습니다.</td></tr>}
                            </tbody>
                        </table>
                    </div>

                    <div className="adminDashBoard-count-section">
                        <div className="adminDashBoard-count-header">
                            <p>인기 공지사항</p>
                            <div className="adminDashBoard-count-button-wrapper">
                                <button
                                    className="adminDashBoard-count-button"
                                    onClick={() => navigate('/admin/NoticeList')}>
                                    <span>+</span>
                                </button>
                            </div>
                        </div>
                        <table className="adminDashBoard-table">
                            <thead>
                                <tr>
                                    <th>제목</th>
                                    <th>내용</th>
                                    <th>조회수</th>
                                    <th>등록일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notices.slice(0, 3).map(notice => (
                                    <tr key={notice.id}>
                                        <td>{notice.title}</td>
                                        <td>{notice.subject}</td>
                                        <td>{notice.view}</td>
                                        <td>{notice.date}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
