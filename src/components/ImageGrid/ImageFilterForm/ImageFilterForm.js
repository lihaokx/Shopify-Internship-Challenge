import React from "react";

const ImageFilterForm = (props) => {
  const { count, setCount, setPictures } = props;

  const handleImageCountSelect = (event) => {
    setPictures([]);
    setCount(event.target.value);
  }

  return (
    <div className="my-8 flex flex-row items-center justify-center">
      <div className="flex-grow">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="image-count">
          Number of Images
        </label>
        <div className="relative">
          <select value={count} onChange={handleImageCountSelect} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="image-count">
            <option value="3">3</option>
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
            <option value="18">18</option>
            <option value="21">21</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
          </div>
        </div>
      </div>
      <div className="ml-2">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="view-favourites">
          View Favourites
        </label>
        <button id="view-favourites" className="flex w-full items-center px-2 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-gray-800 hover:bg-blue-500 dark:hover:bg-gray-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          <span className="mx-1">View</span>
        </button>
      </div>
    </div>
  );
}

export default ImageFilterForm;