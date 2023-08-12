const MacrosCard = () => {
  return (
    <div className="bg-contrastColor-darkMode px-4 py-6 w-full rounded-md">
      <p className="text-xl text-center mb-8">Calories</p>
      <div className="flex justify-between items-center">
        <div
          className="radial-progress text-primaryColor-darkMode"
          style={{
            "--value": "70",
            "--size": "8rem",
            "--thickness": "2px",
          }}
        >
          70%
        </div>
        <span className="flex flex-col gap-2 text-sm">
          <div className="flex justify-between gap-8">
            <p>Calories:</p>
            <p>875/1200</p>
          </div>
          <div className="flex justify-between gap-8">
            <p>Protein:</p>
            <p>10g/120g</p>
          </div>
          <div className="flex justify-between gap-8">
            <p>Carbs:</p>
            <p>50/80g</p>
          </div>
          <div className="flex justify-between gap-8">
            <p>Fat:</p>
            <p>40g/45g</p>
          </div>
        </span>
      </div>
    </div>
  );
};

export default MacrosCard;
