import Dashboard from '@/components/Dashboard';
import Layout from '@/components/Layout';
import React from 'react';

const page = () => {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">ダッシュボード</h1>
      <Dashboard />
    </Layout>
  );
};

export default page;
