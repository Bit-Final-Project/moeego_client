import React from 'react';
import "../../css/Pro/ProSub_car.css";
import { useNavigate } from 'react-router-dom';

const ProjoinSub_car = () => {
    const navigate = useNavigate();

    const goJoin = () => {
        navigate("/pro/signup");
    }

    const goBack = () => {
        navigate("/pro/signup");
    }

    return (
        <div className="ProJoinSub_carPage">
            <div id="projoinSub_car_container">
                <form id="ProJoinSub_carForm" className="ProJoinSub_carbox">
                    <br />
                    <h1>어떤 서비스를 제공할 수 있나요?</h1>
                    <div className="detail-car-wrap">
                        {/* 여기에 포이치 돌려서 메인카테고리 별서브 카테고리 찍을 예정 */}
                        <div className="detail-car">
                            <input type='checkbox' id="1" />
                            <label htmlFor='1'>세차</label>
                        </div>
                        <div className="detail-car">
                            <input type='checkbox' id="2" />
                            <label htmlFor='2'>설치 / 수리</label>
                        </div>
                        <div className="detail-car">
                            <input type='checkbox' />
                            <label>썬팅 / 튜닝</label>
                        </div>
                        <div className="detail-car">
                            <input type='checkbox' />
                            <label>매각 / 매매</label>
                        </div>
                        <div className="detail-car">
                            <input type='checkbox' />
                            <label>캠핑카제작 / 렌탈</label>
                        </div>
                    </div>
                </form>
                <div className='moveBtn'>
                    <span>
                        <button className="prevBtn" onClick={goBack}>이전</button>
                    </span>
                    <span>
                        <button className="nextBtn" onClick={goJoin}>다음</button>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ProjoinSub_car;