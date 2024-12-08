import React from 'react';
import { Button } from './ui/Button';

export const VideoBlock: React.FC = () => {
  return (
    <div className="w-[40%] p-4 gap-y-4 flex flex-col">
      {/* My video window */}
      <div className="grow bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Мое видео</span>
      </div>
      {/* Interlocutor's video window */}
      <div className="grow bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md flex items-center justify-center">
        <span className="text-gray-500 dark:text-gray-400">Видео собеседника</span>
      </div>
      <Button fullWidth>
        Далее
      </Button>
    </div>
  );
};