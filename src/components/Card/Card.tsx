import './Card.css';

const Card = ({
  emoji,
  heading,
  detail,
  color,
}: {
  emoji: string;
  heading: string;
  detail: string;
  color?: string;
}) => {
  return (
    <div
      className={`card bg-white lg:w-64 h-80 flex flex-col static lg:absolute gap-2 items-center text-center text-slate-700`}
      style={{
        borderColor: color,
      }}
    >
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <button className="c-button">LEARN MORE</button>
    </div>
  );
};

export default Card;
