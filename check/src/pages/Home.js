import Carousel from "../compnents/Carousel";
export default function Home() {
  return (
    <main>
      <div className="bg-pink-700 text-center p-10">
        <h1 className="text-5xl font-extrabold">Welcome to Our Chef</h1> <br />
        <p className="text-xl font-bold">Delicious meals at your fingertips. Order now and enjoy fast delivery!</p>
      </div>
      <div className="bg-blue-500 text-center p-10">
        <h2 className="text-3xl font-bold p-5">Our Food Success Story</h2><br />
        <p className="font-semibold text-lg px-3">Our journey began in a small kitchen with a big dream – to bring the best flavors of the world to your plate. What started as a passion project quickly turned into a thriving business, thanks to the support of our loyal customers.</p> <br />
        <p className="font-semibold text-lg px-3">Over the years, we've expanded our menu to include a wide range of dishes, each crafted with care and attention to detail. From our signature burgers to our mouthwatering pizzas, every bite is a testament to our commitment to quality and taste.</p> <br />
        <p className="font-semibold text-lg px-3">But our success story is not just about food. It's about the people – our talented chefs, dedicated staff, and, most importantly, you, our valued customers. Your feedback and support have inspired us to keep pushing the boundaries of flavor and innovation.</p> <br />
        <p className="font-semibold text-lg px-3">As we continue on our journey, we remain committed to serving you the best food experience possible. Thank you for being a part of our story. Here's to many more delicious moments together!</p> <br />
      </div>
      <div className="p-7 bg-yellow-600 space-y-10">
        <h3 className="text-2xl font-bold text-center">Featured Menu Items</h3>
        <Carousel />


      </div>
      <div className="p-3">
        <h4 className="text-gray-500 text-2xl italic text-center">Your satisfaction is our top priority.</h4>
      </div>
    </main>
  );
}
