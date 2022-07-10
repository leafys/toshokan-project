import Slider from './partials/Slider';

const HighlightsList = (): JSX.Element => {
  return (
    <div className="mt-6 mb-12 mx-auto">
      <h1 className="text-xxl font-bold">Upcoming</h1>
      <Slider />
    </div>
  );
};

export default HighlightsList;
