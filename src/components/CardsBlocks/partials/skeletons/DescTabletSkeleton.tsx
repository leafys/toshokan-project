import ContentLoader from 'react-content-loader';

const DescTabletSkeleton = (): JSX.Element => (
  <ContentLoader
    speed={0}
    width={205}
    height={348}
    viewBox="0 0 205 348"
    backgroundColor="#38363a"
    foregroundColor="#dbc7c7"
  >
    <rect x="0" y="0" rx="0" ry="0" width="205" height="300" />
    <rect x="0" y="313" rx="0" ry="0" width="205" height="30" />
  </ContentLoader>
);

export default DescTabletSkeleton;
