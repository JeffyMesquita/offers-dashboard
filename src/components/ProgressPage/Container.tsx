const Container: React.FC<any> = ({
  animationDuration,
  children,
  isFinished,
}) => {
  return (
    <div
      className="pointer-events-none"
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

export { Container };
