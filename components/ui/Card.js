import { HeartIcon } from "@heroicons/react/outline";

function Card(props) {
  return (
    <div className="py-4">
      <div className="px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="bg-white rounded-lg overflow-hidden shadow relative">
              <div className="w-full flex justify-between p-3">
                <div className="flex">
                  <div className="rounded-full h-8 w-8 bg-gray-500 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://avatars0.githubusercontent.com/u/38799309?v=4"
                      alt="profilepic"
                    />
                  </div>
                  <span className="pt-1 ml-2 font-bold text-sm">
                    braydoncoyer
                  </span>
                </div>
                <span className="px-2 hover:bg-gray-300 cursor-pointer rounded">
                  <i className="fas fa-ellipsis-h pt-2 text-lg"></i>
                </span>
              </div>

              <div className="container">
                <img
                  className="h-56 w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
                  alt=""
                />
                <div className="absolute bottom-3/4 left-3/4 rounded-lg p-3 bg-white">
                  <HeartIcon
                    className="h-6 w-6 text-red-600 hover:text-red-800"
                    aria-hidden="true"
                  ></HeartIcon>
                </div>
              </div>

              <div className="relative px-4">
                <div className="flex justify-between">
                  <span className="block font-semibold text-xl">
                    Nike shoes
                  </span>
                  <span className="block bg-white rounded-full text-orange-500 text-s font-bold px-3 py-2 leading-none flex items-center">
                    $36.00
                  </span>
                </div>
                <span className="block flex text-blue-500 hover:text-blue-600 font-semibold opacity-75 -mb-1">
                  <HeartIcon
                    className="fill-current h-5 w-5"
                    aria-hidden="true"
                  ></HeartIcon>
                  <span className="pl-2">32 likes</span>
                </span>
              </div>
              <div className="p-4 h-auto md:h-40 lg:h-48">
                <div className="text-gray-600 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                </div>
                <div className="relative mt-2 lg:absolute bottom-0 mb-4 lg:block">
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #something
                  </a>
                  <a
                    className="inline bg-gray-300 py-1 px-2 rounded-full text-xs lowercase text-gray-700"
                    href="#"
                  >
                    #sky
                  </a>
                </div>
                {/* <div className="text-gray-400 text-sm leading-relaxed block md:text-xs lg:text-sm">
                  View 12 comments
                </div> */}
                <div className="block opacity-50 text-sm -mb-1">
                  View 12 comments
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
