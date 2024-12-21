'use client';

import PersonalSetting from '@/components/PersonalSetting';
import Layout from '../../components/Layout';

export default function PersonalSettingPage() {
  return (
    <Layout>
      <h1 className="text-2xl font-semibold">個人設定</h1>
      <PersonalSetting />
    </Layout>
  );
}
