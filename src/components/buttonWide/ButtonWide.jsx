import React from 'react';

const ButtonWide = ({onClick}) => {
  return (
    <div className="text-center my-10">
      <button onClick={onClick} className="btn btn-sm btn-wide rounded bg-zinc-900 hover:bg-zinc-500 text-white">
        See all
      </button>
    </div>
  );
};

export default ButtonWide;
