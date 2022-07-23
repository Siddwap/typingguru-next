const CBody = ({ children, ...props }) => {
  return (
    <div
      className="flex flex-col min-h-screen min-w-[1080px] bg-gray-50 dark:bg-dark-background text-primary-900 dark:text-dark-primary-900"
      {...props}
    >
      {children}
    </div>
  );
};

export default CBody;
