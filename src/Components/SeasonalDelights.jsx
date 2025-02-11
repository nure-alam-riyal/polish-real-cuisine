
import SectionHeader from "./SectionHeader";

export default function SeasonalDelights() {
    const seasonalItems = [
        {
            name: "Pumpkin Spice Latte",
            description: "A warm and cozy blend of pumpkin, spices, and espresso.",
            image: "https://i.ibb.co.com/7xPBXJVG/autumn-pumpkin-spice-latte-with-whipped-cream-cinnamon-sticks.jpg",
          },
          {
            name: "Grilled Summer Peach Salad",
            description: "Fresh peaches, arugula, and feta cheese drizzled with honey.",
            image: "https://i.ibb.co.com/TGzzL46/fruit-galette-composition-tasty-food-concept.jpg",
          },
          {
            name: "Winter Truffle Pasta",
            description: "Creamy truffle-infused pasta with parmesan and herbs.",
            image: "https://i.ibb.co.com/xK3ymq0T/eating-pasta.jpg",
          },
          {
            name: "Spring Berry Tart",
            description: "A delightful tart filled with fresh seasonal berries.",
            image: "https://i.ibb.co.com/WpzsPVWZ/coffee-with-tasty-fruit-tart-flowers-wooden-tray.jpg",
          },
    ];
  
    return (
      <section className="py-12 ">
        <div className="  text-center">
          {/* <h2 className="text-4xl font-bold text-orange-600 mb-6">Seasonal Delights</h2>
          <p className="text-gray-700 mb-8">
            Enjoy our limited-time seasonal specials, crafted with fresh and festive ingredients.
          </p> */}
          <SectionHeader subTitle={'Enjoy our limited-time seasonal specials, crafted with fresh and festive ingredients.'} title={'Seasonal Delights'}></SectionHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalItems.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-56 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    );
  }