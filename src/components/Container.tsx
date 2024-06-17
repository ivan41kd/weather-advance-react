import { ChildrenProps } from '../App';
const Container = ({ children }: ChildrenProps) => {
  return <div className='container'>{children}</div>;
};
export default Container;
