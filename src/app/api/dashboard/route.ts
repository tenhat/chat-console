import { NextResponse } from 'next/server';

const dashboardData = {
  searchData: [
    { name: '月', searches: 400 },
    { name: '火', searches: 300 },
    { name: '水', searches: 500 },
    { name: '木', searches: 280 },
    { name: '金', searches: 450 },
    { name: '土', searches: 200 },
    { name: '日', searches: 180 },
  ],
  userActionData: [
    { name: 'クリック', value: 400 },
    { name: 'スクロール', value: 300 },
    { name: '検索', value: 300 },
  ],
  userTrendData: [
    { name: '1週間前', users: 400 },
    { name: '6日前', users: 300 },
    { name: '5日前', users: 500 },
    { name: '4日前', users: 280 },
    { name: '3日前', users: 450 },
    { name: '2日前', users: 200 },
    { name: '1日前', users: 180 },
  ],
};

export async function GET() {
  return NextResponse.json(dashboardData);
}
