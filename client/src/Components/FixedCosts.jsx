import { RingProgress } from '@ant-design/plots';

const DemoRingProgress = () => {
  const config = {
    height: 100,
    width: 100,
    autoFit: false,
    percent: 0.7,
    color: ['#5B8FF9', '#E8EDF3'],
  };
  return <RingProgress {...config} />;
};
export default DemoRingProgress;