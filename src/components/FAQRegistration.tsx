'use client';

import React, { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const FAQRegistration = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [faqs, setFaqs] = useState<{ question: string; answer: string }[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setIsUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setFaqs([
      {
        question: 'サービスの利用方法は？',
        answer: 'ウェブサイトから会員登録後、ログインしてご利用いただけます。',
      },
      {
        question: '料金プランについて教えてください',
        answer:
          '基本プランと premium プランがあります。詳細は料金ページをご覧ください。',
      },
      {
        question: '退会方法を教えてください',
        answer: 'アカウント設定ページから退会手続きを行うことができます。',
      },
    ]);
    setIsUploading(false);
    setFile(null);
  };
  return (
    <div className="space-y-6">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">FAQデータのアップロード</h2>
        <div className="flex items-center space-x-2">
          <Input type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
          <Button onClick={handleUpload}>
            {isUploading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                アップロード中...
              </>
            ) : (
              'アップロード'
            )}
          </Button>
        </div>
      </div>
      {faqs.length > 0 && (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">登録済みFAQ</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>質問</TableHead>
                <TableHead>回答</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {faqs.map((faq, index) => (
                <TableRow key={index}>
                  <TableCell>{faq.question}</TableCell>
                  <TableCell>{faq.answer}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default FAQRegistration;
