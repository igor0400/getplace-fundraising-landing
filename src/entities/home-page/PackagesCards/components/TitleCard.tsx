import { FC } from 'react';

interface Props {
  text: string;
}

const TitleCard: FC<Props> = ({ text }) => {
  return (
    <div className="p-6 bg-black rounded-xl">
      <h3 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold">
        {text}
      </h3>
    </div>
  );
};

export default TitleCard;
