import React from 'react';
import Layout from '../components/Layout';

const metaDashboard = {
  title: 'Dashboard - Peak Productivity',
};

export default function DashBoard() {
  return (
    <Layout customMeta={metaDashboard}>
      <h1 style={{ color: 'blue' }}>Dashboard</h1>
      <div style={{ backgroundColor: 'pink', width: '300px' }}>Hello</div>
      <div style={{ backgroundColor: 'pink', width: '300px' }}>Hello</div>
      <div style={{ backgroundColor: 'pink', width: '300px' }}>Hello</div>
      <div>
        <span>Hey</span>
        <div>H</div>
        <span>Hey</span>
        <div>a</div>
        <button>hhh</button>
      </div>
      <div style={{ backgroundColor: 'pink', width: '300px' }}>Hello</div>
    </Layout>
  );
}
