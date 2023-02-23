const Shimmer = () => {
  return (
    <div className="restaurant-card-container">
      {Array(10).fill("").map((e, index) => (
        <div key={index} className="restaurant-card">
          <div className="shimmer-block"></div>
          <div className="shimmer-block"></div>
          <div className="shimmer-block"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
