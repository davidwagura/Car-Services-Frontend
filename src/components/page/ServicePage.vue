<template>

    <body class="bg-gray-100 font-sans">

        <header class="bg-gray-800 text-white p-4 text-center">

            <h1 class="text-2xl">Car Service Station</h1>

        </header>
    
        <button type="submit" class="relative float-right m-4  px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">

            Confirm service

        </button>

        <form class="pt-4 mx-auto my-auto mt-6 flex flex-wrap justify-between mb-16">

            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/oil-to-car-engine.jpg' alt="Oil Change" class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Oil Change</h2>

                <p class="text-gray-600">We provide quick and efficient oil change services using high-quality oils and filters.</p>

                <input type="checkbox" name="services[]" value="Oil Change">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/wheel-service.webp' alt="Tire Rotation Service" class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Tire Rotation</h2>

                <p class="text-gray-600">Extend the life of your tires with our professional tire rotation service.</p>

                <input type="checkbox" name="services[]" value="Tire Rotation">

            </div>
  

            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/inspection.jpg' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Brake Inspection</h2>

                <p class="text-gray-600">Ensure your safety with our thorough brake inspection services, identifying and addressing potential issues.</p>

                <input type="checkbox" name="services[]" value="Brake Inspection">

            </div>
    
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/auto-repair-shop.jpg' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Engine Diagnosis</h2>

                <p class="text-gray-600">Our advanced diagnostic tools help identify and solve engine-related problems efficiently.</p>

                <input type="checkbox" name="services[]" value="Engine Diagnosis">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/battery_replacement.webp' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Battery Replacement</h2>

                <p class="text-gray-600">Get your car battery replaced quickly and efficiently by our expert technicians.</p>

                <input type="checkbox" name="services[]" value="Battery Replacement">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/car-wash.webp' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Car Wash</h2>

                <p class="text-gray-600">Keep your car looking new with our comprehensive car wash services.</p>

                <input type="checkbox" name="services[]" value="Car Wash">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/ac-service.jpg' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">AC Service</h2>

                <p class="text-gray-600">Stay cool with our thorough air conditioning system maintenance and repair services.</p>

                <input type="checkbox" name="services[]" value="AC Service">

            </div>
    
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/transmission-service.webp' alt="Transmission Service" class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Transmission Service</h2>

                <p class="text-gray-600">Ensure your transmission is running smoothly with our comprehensive service.</p>

                <input type="checkbox" name="services[]" value="Transmission Service">

            </div>
    
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/wheel-alignment.webp' alt="Wheel Alignment Service" class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Wheel Alignment</h2>

                <p class="text-gray-600">Improve your vehicle's handling and tire life with our precise wheel alignment services.</p>

                <input type="checkbox" name="services[]" value="Wheel Alignment">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/detailing-service.webp' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Detailing Service</h2>

                <p class="text-gray-600">Get your car detailed to perfection with our professional detailing services.</p>

                <input type="checkbox" name="services[]" value="Detailing Service">

            </div>
    

            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/car-inspection.webp' class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Full Vehicle Inspection</h2>

                <p class="text-gray-600">Get a thorough inspection of your entire vehicle to ensure everything is in optimal condition.</p>

                <input type="checkbox" name="services[]" value="Full Vehicle Inspection">

            </div>
  
            <div class="service-card bg-white border border-gray-300 rounded-lg shadow-lg m-4 p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">

                <img src='../../assets/road-side-assistance.webp' alt="Roadside Assistance" class="w-full h-auto rounded mb-4">

                <h2 class="text-gray-800 text-xl font-semibold mb-2">Roadside Assistance</h2>

                <p class="text-gray-600">Get help on the road with our reliable roadside assistance services.</p>

                <input type="checkbox" name="services[]" value="Roadside Assistance">

            </div>
    
        </form>
  
        <footer class="bg-gray-800 text-white text-center p-4 fixed bottom-0 w-full">

            <p>&copy; 2024 Your Car Service Station</p>

        </footer>

    </body>

</template>
  