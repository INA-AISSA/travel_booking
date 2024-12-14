import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-800 to-black text-white">
      {/* Hero Section */}
      <section className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
        <div className="text-center p-8 backdrop-blur-md bg-black bg-opacity-60 rounded-lg">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Explore the World with Us</h1>
          <p className="text-lg md:text-xl mb-6">Book your next adventure with confidence and style.</p>
          <a href="#book-now" className="inline-block py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300">
            Book Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 bg-gray-900">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">Why Choose Us?</h2>
          <p className="text-lg mb-8 text-gray-400">We provide seamless travel booking experiences with personalized services, easy booking, and amazing destinations.</p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <Image src="/path/to/your/icon1.png" alt="Fast Booking" width={60} height={60} className="mx-auto mb-4"/>
              <h3 className="font-semibold text-white">Fast Booking</h3>
            </div>
            <div className="text-center">
              <Image src="/path/to/your/icon2.png" alt="Global Destinations" width={60} height={60} className="mx-auto mb-4"/>
              <h3 className="font-semibold text-white">Global Destinations</h3>
            </div>
            <div className="text-center">
              <Image src="/path/to/your/icon3.png" alt="24/7 Support" width={60} height={60} className="mx-auto mb-4"/>
              <h3 className="font-semibold text-white">24/7 Support</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-8 bg-gray-800">
        <div className="max-w-screen-lg mx-auto text-center">
          <h2 className="text-3xl font-semibold text-indigo-400 mb-4">What Our Customers Say</h2>
          <div className="space-y-8">
            <div className="flex flex-col items-center">
              <Image src="/path/to/customer1.jpg" alt="Customer 1" width={80} height={80} className="rounded-full mb-4"/>
              <p className="font-medium text-lg text-gray-300">"Amazing experience! Booking was so easy, and our trip was perfect!"</p>
              <p className="text-gray-500">- Sarah, New York</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src="/path/to/customer2.jpg" alt="Customer 2" width={80} height={80} className="rounded-full mb-4"/>
              <p className="font-medium text-lg text-gray-300">"I loved the personalized service and the great deals. Highly recommend!"</p>
              <p className="text-gray-500">- John, Los Angeles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="book-now" className="py-16 px-8 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-semibold mb-6">Start Your Journey Today</h2>
        <p className="text-lg mb-6">Book your dream trip with us and enjoy a hassle-free, unforgettable experience.</p>
        <a href="/book" className="inline-block py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition duration-300">
          Book Your Trip Now
        </a>
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 Travel Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}
