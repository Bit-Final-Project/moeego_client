import React from 'react';
import SideBar from './Sidebar';
import DashBoard from './Dashboard';

const AdminMain = () => {
    return (
        <div className="admin-layout" style={{
          display: 'flex',
          minHeight: '100vh',
          width: '100%',
        }}>
          <div className="admin-sidebar" style={{
            // width: '240px',
            backgroundColor: '#27272a',
            color: 'white',
            flexShrink: 0,
          }}>
            <SideBar />
          </div>
          <div className="admin-content" style={{
            flex: 1,
            backgroundColor: '#f5f5f5',
            padding: '20px',
          }}>
            <DashBoard />
          </div>
        </div>
      );
};

export default AdminMain;