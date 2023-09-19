import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-ping rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;