import React, { useContext, useEffect } from 'react';
import '../../css/admin/ProApproval.css';
import { AdminContext } from '../../context/admin/AdminContext';

const ProApproval = () => {
    const {
        getStatusBadgeClass,
        approvedmember,
        loading,
        error,
        fetchApprovalData,
        handleApprove,
        handleRevoke
    } = useContext(AdminContext);

    
    // 컴포넌트 마운트 시 API 호출
    useEffect(() => {
        fetchApprovalData();
    }, []);

    // 로딩 중일 때 UI 표시
    if (loading) {
        return <div>로딩 중...</div>;
    }

    // 오류가 있을 경우 UI 표시
    if (error) {
        return <div>오류 발생: {error}</div>;
    }

    return (
        <div className="proApproval-approve-container">
            <div className="proApproval-approve-inner-container">
                <h2 className="proApproval-approve-title">고수 권한 승인 | 고수가 되고 싶은가?</h2>
                <hr className="proApproval-approve-divider" />
                <div className="proApproval-table-container">
                    <table className="proApproval-approve-table">
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>이름</th>
                                <th>한줄 소개</th>
                                <th>박탈 횟수</th>
                                <th>승인 여부</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            {approvedmember.map((row) => (
                                <tr key={row.memberNo}>
                                    <td>{row.memberNo}</td>
                                    <td>{row.name}</td>
                                    <td>{row.oneIntro}</td>
                                    <td>{row.count}회</td>
                                    <td>
                                        {/* 배지와 상태 텍스트를 둘 다 처리 */}
                                        <div className={getStatusBadgeClass(row.memberStatus)}>
                                            {row.memberStatus === 'ROLE_PEND_PRO' ? '미승인' : '승인'}
                                        </div>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleApprove(row.memberNo , row.name)}
                                            className="approve-btn"
                                        >
                                            승인
                                        </button>
                                        <button
                                            onClick={() => handleRevoke(row.memberNo , row.name)}
                                            className="revoke-btn"
                                        >
                                            취소
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProApproval;
