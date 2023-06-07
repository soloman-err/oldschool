import Tilt from 'react-parallax-tilt';

const CrystalCard = () => {
  return (
    <Tilt>
      <div className="card w-full glass translate-z-60">
        <figure>
          <img src="/class.png" alt="class-image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-center">
            <button className="btn btn-sm w-full">See more!</button>
          </div>
        </div>
      </div>
    </Tilt>
  );
};

export default CrystalCard;
