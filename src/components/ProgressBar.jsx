const ProgressBar = ({ level }) => {
  return (
    <div className="w-full h-6 bg-gray-300 rounded-full">
      <div
        className="h-full text-center text-medium text-white bg-blue-400 rounded-full"
        style={{ width: `${level}%` }}
      >
        {`${level}%`}
      </div>
    </div>
  );
};

export default ProgressBar;
