import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader className="pizza-block" speed={2} width={280} height={460} viewBox="0 0 280 460" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
    <circle cx="127" cy="136" r="125" />
    <rect x="4" y="423" rx="8" ry="8" width="110" height="15" />
    <rect x="165" y="417" rx="8" ry="8" width="110" height="20" />
    <rect x="1" y="278" rx="8" ry="8" width="280" height="20" />
    <rect x="0" y="314" rx="7" ry="7" width="280" height="88" />
  </ContentLoader>
);

export default Skeleton;
