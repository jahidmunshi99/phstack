const Card = ({item}) => {

  return (
    <div
      className={
        "bg-white border border-gray-100 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out cursor-pointer p-4"
      }
    >
      {/** All Information */}
      <div className="flex items-top justify-between w-full">
        <div className="text-gray-600 capitalize">
          {item.category}
        </div>

        <div className="font-bold text-5xl text-right">
          {item.count}
        </div>
      </div>
    </div>
  );
};

export default Card;
