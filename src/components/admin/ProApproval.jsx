import React from 'react';
import '../../css/admin/ProApproval.css';

const GosuApproveTable = () => {
    const tableData = [
        { id: 10, name: '윤상수', description: '고수 시작추천요 ㅎㅎ', deprive_count:0, status: '미승인' },
        { id: 9, name: '주홍', description: '고수 시작하겠요 열심히!!', deprive_count:92, status: '미승인' },
        { id: 8, name: '김태윤', description: '고수 시작하겠요 열심히!!', deprive_count:5, status: '미승인' },
        { id: 7, name: '정진미', description: '고수 시작하겠요 열심히!!', deprive_count:8, status: '미승인' },
    ];

    // 상태에 따라 다른 배지를 적용하기 위한 함수
    const getStatusBadgeClass = (status) => {
        if (status === '승인') {
            return 'pro-status-badge-approved';
        } else if (status === '미승인') {
            return 'pro-status-badge-revoked';
        }
        return 'status-badge';
    };

    return (
        <div className="proApproval-approve-container">
            <div className='proApproval-approve-inner-container'>
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
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.id}</td>
                                    <td>{row.name}</td>
                                    <td>{row.description}</td>
                                    <td>{row.deprive_count}회</td>
                                    <td>
                                        <div className={getStatusBadgeClass(row.status)}>{row.status}</div>
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

export default GosuApproveTable;
