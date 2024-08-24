import style from './style.min.module.css';

type TProps = {
  children: React.ReactNode;
};
const Button = ({ children }: TProps) => {
  return (
    <button className={style.button} type="button">
      {children}
    </button>
  );
};

export default Button;
