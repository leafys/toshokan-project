import ContentLoader from 'react-content-loader';

type SkeletonHighlightsProps = {
  className: any;
};

const SkeletonHighlights = ({
  className,
}: SkeletonHighlightsProps): JSX.Element => (
  <ContentLoader
    speed={0}
    width={175}
    height={249}
    viewBox="0 0 175 249"
    backgroundColor="#38363a"
    foregroundColor="#dbc7c7"
    className={className}
  >
    <rect x="0" y="0" rx="0" ry="0" width="175" height="249" />
  </ContentLoader>
);

export default SkeletonHighlights;
