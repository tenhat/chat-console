import React from 'react';
import Balloon from '../atoms/Balloon';

interface UserBalloonProps {
  message: string;
  className?: string;
}
const UserBalloon = ({ message, className }: UserBalloonProps) => {
  return (
    <div className="flex justify-end">
      <Balloon className={className} ariaLabel="ユーザーのメッセージ">
        {message}
      </Balloon>
    </div>
  );
};

export default UserBalloon;
