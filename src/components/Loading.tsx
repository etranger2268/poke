import { memo } from 'react';

const Loading = memo(() => {
  return (
    <div className="flex w-fit py-2 px-4 rounded-full items-center gap-4 bg-green-100 border border-green-300">
      <div className="animate-spin size-8 border-4 rounded-full border-t-transparent border-green-500" />
      <p className="text-green-500 text-lg font-medium">Loading...</p>
    </div>
  );
});

export default Loading;
