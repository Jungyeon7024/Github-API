import React from 'react';

import HeartImg from './img/yesheart.png';
import EmptyHeartImg from './img/noheart.png';

const HeartButton = ({ like, onClick }) => {
  return (
    <img
      src={like ? HeartImg : EmptyHeartImg}
      onClick={onClick}
      alt="Heart"
      style={{ width: '25px', height: '25px', marginLeft: '130px' }}
    />
  );
};

export default HeartButton;
