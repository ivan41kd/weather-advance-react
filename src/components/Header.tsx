import { ChildrenProps } from '../App';
const Header = ({ children }: ChildrenProps) => {
  return <header className='header'>{children}</header>;
};

export default Header;
