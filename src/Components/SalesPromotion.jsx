

import { motion } from "framer-motion";
import { Gift, Percent, Sparkles } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Link } from "react-router-dom";


const promotions = [
  {
    icon: <Percent className="text-yellow-500" size={32} />, 
    title: "Happy Hour - 50% Off!",
    description: "Enjoy 50% off on all drinks from 4 PM to 7 PM!",
  },
  {
    icon: <Gift className="text-red-500" size={32} />, 
    title: "Weekend Special",
    description: "Get a free dessert with any main course order this weekend!",
  },
  {
    icon: <Sparkles className="text-green-500" size={32} />, 
    title: "Loyalty Program",
    description: "Earn points with every order and redeem for discounts!",
  },
];

export default function SalesPromotion() {
  return (
    <div className="py-12  text-center">
      <SectionHeader title={'Special Promotions' } subTitle={'Special Promotions offer exciting discounts, free desserts, and loyalty rewards. Enjoy happy hour savings, weekend specials, and earn points for exclusive discounts on future orders!'}></SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 max-w-6xl mx-auto">
        {promotions.map((promo, index) => (
          <motion.div 
            key={index} 
            className="card bg-white shadow-xl p-6 flex flex-col items-center"
            whileHover={{ scale: 1.05 }}
          >
            {promo.icon}
            <h3 className="text-xl font-semibold mt-4">{promo.title}</h3>
            <p className="text-gray-600 mt-2">{promo.description}</p>
          </motion.div>
        ))}
      </div>
      <Link to={'allfoods'}><button className="btn btn-primary mt-8 px-6 py-3 text-lg">
        View All 
      </button></Link>
    </div>
  );
}
