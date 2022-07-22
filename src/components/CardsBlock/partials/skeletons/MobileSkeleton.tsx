import ContentLoader from 'react-content-loader';

const MobileSkeleton = (): JSX.Element => {
  return (
    <ContentLoader
      speed={0}
      width={150}
      height={220}
      viewBox="0 0 150 220"
      backgroundColor="#38363a"
      foregroundColor="#dbc7c7"
    >
      <rect x="0" y="0" rx="0" ry="0" width="150" height="220" />
    </ContentLoader>
  );
};

export default MobileSkeleton;
