import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={388}
    height={680}
    viewBox='0 0 388 680'
    backgroundColor='#dfdfdf'
    foregroundColor='#cfcfcf'
    {...props}
  >
    <rect x='40' y='0' rx='15' ry='15' width='300' height='400' />
    <rect x='40' y='430' rx='15' ry='15' width='300' height='80' />
    <rect x='70' y='530' rx='15' ry='15' width='240' height='40' />
    <rect x='70' y='590' rx='15' ry='15' width='240' height='80' />
  </ContentLoader>
);

export default MyLoader;
