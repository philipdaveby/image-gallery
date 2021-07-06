import Image from './Image';

const FlipBox = props => {
  return (
    <div className="main__flip-box">
      <div className="main__flip-box-inner">
        <div className="main__flip-box-front">
          <Image src={props.imgSrc} alt={props.imgAlt} />
        </div>
        <div className="main__flip-box-back">
          <p>{props.description}</p>
          <p>Likes: {props.likes}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipBox;
