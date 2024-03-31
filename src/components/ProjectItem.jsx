

const PortfolioItem=({img,title})=>{
return (
  <div>
    <div className="pb-1">
      <img
        src={img}
        alt=""
        className="pt-2 transition-transform duration-500 ease-in-out transform hover:scale-110"
      />
      <div className="flex flex-row justify-between">
        <h3
          className="mt-4 p-2 border-2 rounded-2xl font-bold text-white bg-indigo-400
        "
        >
          {title}
        </h3>
        <a href="https://github.com/BhattaraiNarayan" target="_blank">
          <p className="bg-indigo-400 mt-4 p-2 cursor-pointer border-2 rounded-2xl shadow-5xl font-bold text-white">
            詳細を見る
          </p>
        </a>
      </div>
    </div>
  </div>
);
}
export default PortfolioItem;


