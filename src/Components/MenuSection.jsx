import menus from '../assets/bgImages/menuspic.avif'
import menus2 from '../assets/bgImages/menu2.avif'
import { Fade, Slide } from 'react-awesome-reveal';
import SectionHeader from './SectionHeader';

const MenuSection = () => {
    return (
        <div className=' p-10 bg-gray-600 text-white rounded-xl'>
                                  <Fade direction='up'> 
                                    {/* <h2 className='text-4xl font-bold font-Handlee'>Restaurant <br /><span>MENU</span></h2> */}
                                    <SectionHeader title={'Restaurant MENU'}></SectionHeader>
                                    </Fade>
            <div className="lg:flex ">
                <div className='lg:w-1/2'>
              
                <div className='grid grid-cols-1 md:grid-cols-2 '>
                    <Slide direction='left'>
                    <div className='my-4'>
                        <h4  className=' my-3 text-2xl font-semibold'>Appetizers</h4>
                        <ul className='ml-4 opacity-75'>
                            <li>Bruschetta with Tomato and Basil</li>
                            <li>Hummus Platter with Pita Bread</li>
                            <li>Shrimp Cocktail</li>
                            <li>Loaded Nachos with Cheese and Jalapeños</li>
                            <li>Spring Rolls</li>
                            <li>Crispy Calamari with Lemon Aioli</li>
                            <li>Chicken Wings (Buffalo or BBQ)</li>
                            <li>Spinach and Artichoke Dip</li>
                            <li>Mozzarella Sticks with Marinara</li>
                            <li>Garlic Breadsticks</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide direction='right'>
                    <div className='my-4'>
                        <h4  className=' my-3 text-2xl m font-semibold'>Soups & Salads</h4>
                        <ul className='ml-4 opacity-75'>
                            <li>Caprese Salad</li>
                            <li>Lentil Soup</li>
                            <li>Greek Salad with Feta</li>
                            <li>Clam Chowder</li>
                            <li>Spring Rolls</li>
                            <li>Chicken Tortilla Soup
                            Caesar Salad</li>
                            <li>Creamy Mushroom Soup</li>
                            <li>Greek Salad with Feta</li>
                            <li>Cobb Salad with Avocado</li>
                            
                        </ul>
                    </div>
                    </Slide>
                    <Slide direction='left'>
                    <div className='my-4'>
                        <h4  className=' my-3 text-2xl font-semibold'>Main Courses
                        </h4>
                        <ul className='ml-4 opacity-75'>
                            <li>Grilled Ribeye Steak with Garlic Butter</li>
                            <li>Herb-Crusted Salmon</li>
                            <li>Mushroom Risotto</li>
                            <li>Sweet Potato and Black Bean Tacos</li>
                            <li>Vegan Buddha Bowl</li>
                            <li>BBQ Ribs with Coleslaw</li>
                            <li>Chicken Alfredo Pasta</li>
                            <li>Paneer Tikka Masala with Rice</li>
                            <li>Vegetable Stir-fry with Tofu</li>
                            <li>Butter Chicken with Naan</li>
                        </ul>
                    </div>
                    </Slide>
                    <Slide direction='right'>
                    <div className='my-4 opacity-75'>
                        <h4  className=' my-3 text-2xl font-semibold'>Desserts</h4>
                        <ul className='ml-4'>
                            <li>Gelato (Various Flavors)</li>
                            <li>Lemon Tart</li>
                            <li>Brownie Sundae</li>
                            <li>Mango Sticky Rice</li>
                            <li>Strawberry Shortcake</li>
                            <li>Tiramisu</li>
                            <li>CApple Pie with Vanilla Ice Cream</li>
                            <li>Chocolate Lava Cake</li>
                            <li>Classic Cheesecake with Berry Compote</li>
                            <li>Apple Pie with Vanilla Ice Cream</li>
                        </ul>
                    </div>
                    </Slide>
                </div>
                </div>
               <div className='lg:w-1/2 h-[500px] lg:h-[800px] xl:h-[750px] '>
               <div className='h-1/2' ><img className='w-full h-full' src={menus} alt="" /></div>
               <div className='h-1/2' ><img className='w-full h-full' src={menus2} alt="" /></div>
               </div>
            </div>
        </div>
    );
};

export default MenuSection;