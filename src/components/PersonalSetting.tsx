'use client';

import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Label } from './ui/label';
import { Input } from './ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Slider } from './ui/slider';
import ChatInterface from './organisms/ChatInterface';
import { useThemeStore } from '@/lib/store';

const sampleMessages = [
  {
    id: 1,
    sender: 'bot' as const,
    content: 'こんにちは！何かお手伝いできることはありますか？',
  },
  {
    id: 2,
    sender: 'user' as const,
    content: 'はい、FAQを確認したいのですが。',
  },
  {
    id: 3,
    sender: 'bot' as const,
    content: 'もちろんです。どのような内容についてお知りになりたいですか？',
  },
];

const getChatbotStyle = (primaryColor: string, secondaryColor: string) => ({
  '--chatbot-primary-color': primaryColor,
  '--chatbot-secondary-color': secondaryColor,
});

const PersonalSetting = () => {
  const { primaryColor, setPrimaryColor, fetchTheme } = useThemeStore();
  const [secondaryColor, setSecondaryColor] = useState('#ffffff');
  const [font, setFont] = useState('sans-serif');
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    fetchTheme();
  }, [fetchTheme]);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>チャットボットデザイン設定</CardTitle>
          <CardDescription>色やフォントをカスタマイズできます</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>プライマリーカラー</Label>
            <Input
              id="primary-color"
              type="color"
              value={primaryColor}
              onChange={(e) => setPrimaryColor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="secondary-color">セカンダリーカラー</Label>
            <Input
              id="secondary-color"
              type="color"
              value={secondaryColor}
              onChange={(e) => setSecondaryColor(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="font">フォント</Label>
            <Select value={font} onValueChange={setFont}>
              <SelectTrigger id="font">
                <SelectValue placeholder="フォントを選択" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sans-serif">Sans-serif</SelectItem>
                <SelectItem value="serif">Serif</SelectItem>
                <SelectItem value="monospace">Monospace</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="font-size">フォントサイズ： {fontSize}px</Label>
            <Slider
              id="font-size"
              min={12}
              max={24}
              step={1}
              value={[fontSize]}
              onValueChange={(value) => setFontSize(value[0])}
            />
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>プレビュー</CardTitle>
          <CardDescription>
            設定の変更がリアルタイムで反映されます
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            className="p-4 border border-gray-200 rounded-lg"
            style={{
              ...getChatbotStyle(primaryColor, secondaryColor),
              fontFamily: font,
              fontSize: `${fontSize}px`,
            }}
          >
            <ChatInterface messages={sampleMessages} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalSetting;
