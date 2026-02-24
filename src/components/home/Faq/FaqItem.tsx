import { memo } from 'react';

interface FaqItemProps {
  list: {
    question: string;
    answer: string;
  };
}

const FaqItem = memo(({ list }: FaqItemProps) => {
  return (
    <div className="px-8 py-4 space-y-3 hover:bg-slate-100">
      <dt className="font-medium text-lg">
        <span className="font-black">Q. </span>
        {list.question}
      </dt>
      <dd>
        <span className="font-black ">A. </span>
        {list.answer}
      </dd>
    </div>
  );
});

export default FaqItem;
