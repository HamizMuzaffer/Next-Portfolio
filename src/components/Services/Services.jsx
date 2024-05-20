import React from 'react'

function Services() {
    return (

<section className="bg-gray-800 py-12" id='services'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-8">Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 group relative overflow-hidden flex justify-center items-center text-white border-white ">
            <h3 className="text-xl font-semibold mb-4 ">Graphic Designing</h3>
            <p className="text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-white bg-opacity-100">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis temporibus harum repudiandae quae numquam alias, velit voluptatibus? Atque minus facilis corporis. Assumenda provident dolore ad itaque minima libero minus veniam?</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 group relative overflow-hidden flex justify-center items-center text-white  border-white">
            <h3 className="text-xl font-semibold mb-4 flex justify-center items-center text-white">Web Development</h3>
            <p className="text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-white bg-opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dicta quisquam consectetur dolorum possimus. Fugiat error quidem fuga nam. Temporibus consectetur id impedit quisquam expedita voluptatem dolorem quibusdam ea ipsam!</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 group relative overflow-hidden flex justify-center items-center text-white  border-white">
            <h3 className="text-xl font-semibold mb-4 flex justify-center items-center text-white">SEO</h3>
            <p className="text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-white bg-opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam amet assumenda deserunt quas, sequi culpa omnis tempore facilis illum dicta provident, delectus rerum aliquam et laudantium numquam distinctio doloremque dolorum?</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg h-64 group relative overflow-hidden flex justify-center items-center text-white  border-white">
            <h3 className="text-xl font-semibold mb-4 flex justify-center items-center text-white">Digital Marketing</h3>
            <p className="text-gray-600 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 flex items-center justify-center bg-white bg-opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, harum minus ea vel ut facilis ab totam distinctio modi esse! Ducimus eligendi fugiat adipisci pariatur, provident impedit tempora perspiciatis voluptate.</p>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Services