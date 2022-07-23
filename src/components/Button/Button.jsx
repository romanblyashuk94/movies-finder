import s from './Button.module.scss';

const Button = ({ action, label }) => {
  return (
    <button onClick={action} className={s.button} type="button">
      {label}
    </button>
  );
};

export default Button;
