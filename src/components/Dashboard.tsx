'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useThemeStore } from '@/lib/store';
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';

const searchData = [
  { name: '月', searches: 400 },
  { name: '火', searches: 300 },
  { name: '水', searches: 500 },
  { name: '木', searches: 280 },
  { name: '金', searches: 450 },
  { name: '土', searches: 200 },
  { name: '日', searches: 180 },
];

const userActionData = [
  { name: 'クリック', value: 400 },
  { name: 'スクロール', value: 300 },
  { name: '検索', value: 300 },
];

const userTrendData = [
  { name: '1週間前', users: 400 },
  { name: '6日前', users: 300 },
  { name: '5日前', users: 500 },
  { name: '4日前', users: 280 },
  { name: '3日前', users: 450 },
  { name: '2日前', users: 200 },
  { name: '1日前', users: 180 },
];

export default function Dashboard() {
  const primaryColor = useThemeStore((state) => state.primaryColor);

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>FAQ検索回数</CardTitle>
          <CardDescription>日別の検索回数</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={searchData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="searches" fill={primaryColor} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>ユーザー行動データ</CardTitle>
          <CardDescription>アクション別の割合</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={userActionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill={primaryColor}
                label
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>ユーザー数推移</CardTitle>
          <CardDescription>過去1週間のトレンド</CardDescription>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={userTrendData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Line type="monotone" dataKey="users" stroke={primaryColor} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
