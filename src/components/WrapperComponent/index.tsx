import './style.css';
type TChildren = {
    children: React.ReactNode;
  };

const WrapperComponent: React.FC<TChildren> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

export default WrapperComponent;