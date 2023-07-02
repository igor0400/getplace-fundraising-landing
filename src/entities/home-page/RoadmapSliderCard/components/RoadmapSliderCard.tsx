import React, { FC } from 'react';

interface Props {
  title: string;
  text: string;
  bgColor: string;
}

const RoadmapSliderCard: FC<Props> = ({ title, text, bgColor }) => {
  return (
    <div
      className="max-[800px]:w-[240px] max-[800px]:h-[260px] w-[280px] h-[320px] p-6 rounded-2xl flex flex-col justify-between"
      style={{ background: bgColor }}
    >
      <h6 className="font-bold text-2xl">{title}</h6>
      <p
        className="min-[800px]:text-lg font-medium"
        dangerouslySetInnerHTML={{ __html: text }}
      ></p>
    </div>
  );
};

export default RoadmapSliderCard;
