import { HeartIcon } from "@heroicons/react/outline";

function ProductCard(props) {
  const { item, onClick } = props;
  return (
    <div className="">
      <div className="bg-white rounded-lg overflow-hidden shadow relative">
        <div className="w-full flex justify-between p-3">
          <div className="flex">
            <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
              <img src={item.seller.image} alt="profilepic" />
            </div>
            <span className="pt-1 ml-2 font-bold text-sm">
              {item.seller.name}
            </span>
          </div>
          <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
            <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
          </span>
        </div>

        <div className="container">
          <img
            className="h-56 w-full object-cover object-center"
            src={item.product.image}
            alt=""
          />
          <button
            onClick={() => onClick(item)}
            className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white"
          >
            <HeartIcon
              className={
                item.product.liked
                  ? "fill-current h-6 w-6 text-red-600 hover:text-red-800"
                  : "h-6 w-6 text-red-600 hover:text-red-800"
              }
              aria-hidden="true"
            ></HeartIcon>
          </button>
        </div>

        <div className="relative px-4">
          <div className="flex justify-between">
            <span className="block font-semibold text-xl">
              {item.product.name}
            </span>
            <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
              {item.product.price}
            </span>
          </div>
          <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
            <HeartIcon
              className="fill-current h-5 w-5"
              aria-hidden="true"
            ></HeartIcon>
            <span className="pl-2">{item.product.likeCount} likes</span>
          </span>
        </div>
        <div className="p-4 h-auto md:h-40 lg:h-48">
          <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
            {item.product.description}
          </div>
          <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
            {item.product.tags.map((tag, tagId) => (
              <a
                key={tagId}
                className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                href="#"
              >
                {tag}
              </a>
            ))}
          </div>
          <div className="block opacity-50 text-sm -mb-1">
            View {item.product.comments.length} comments
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
