import React from 'react';
import Slider from './partials/Slider/Slider';

const HighlightsList = (): JSX.Element => {
  return (
    <div className="max-w-[1350px] mx-auto">
      <h1 className="text-xxl">HighlightsList</h1>
      <Slider />
    </div>
  );
};

export default HighlightsList;
