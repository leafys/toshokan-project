import Slider from './partials/Slider';
import ProgressBar from '@ramonak/react-progress-bar';
import { useState } from 'react';

const HighlightsList = (): JSX.Element => {
  const [progressBar, setProgressBar] = useState<number>(0);

  return (
    <div className="mt-6 mb-12 mx-auto">
      <h1 className="text-xxl">Upcoming</h1>
      <ProgressBar
        completed={progressBar}
        isLabelVisible={false}
        height="6px"
        bgColor="#891cc2"
        baseBgColor="#a6a6b2"
      />
      <Slider setProgressBar={setProgressBar} />
    </div>
  );
};

export default HighlightsList;
