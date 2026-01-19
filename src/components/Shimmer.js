const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-image shimmer"></div>
            <div className="shimmer-text shimmer"></div>
            <div className="shimmer-text short shimmer"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
