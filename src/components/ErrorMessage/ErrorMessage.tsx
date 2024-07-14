interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <div>{message}Немає зв'язку😥! Зачекайте трішки😎 Або перезавантажте сторінку🤩</div>;
};

export default ErrorMessage;

