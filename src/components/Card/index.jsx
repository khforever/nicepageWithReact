const Card = ({ Icon, title, description }) => {
  return (
    <div className="bg-white shadow-lg p-8 text-center w-full max-w-xs">
      
      
      <div className="flex justify-center mb-6">
        <div
          className="
            w-20 h-20 rounded-full
            bg-[#c9bd8f]
            flex items-center justify-center
            transition-transform duration-700
            hover:scale-110
          "
        >
     <Icon className="w-10 h-10 text-white" />

        </div>
      </div>

      
      <h3 className="text-lg font-semibold tracking-widest mb-4">
        {title}
      </h3>

    
      <p className="text-gray-500 italic text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default Card;
