import React from 'react';
import Categories from '../Components/Categories';
import MenuItems from '../Components/MenuItems';
import Title from '../Components/Title';
import portfolios from '../Components/allportfolios';
import {useState} from 'react';
import {motion} from 'framer-motion';

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))];


function PortfoliosPage() {
    const [categories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(portfolios);

    const filter = (category) => {
        if(category === 'All'){
            setMenuItems(portfolios)
            return;
        }
        const filteredData = portfolios.filter((item)=>{
            return item.category === category;
        })
        setMenuItems(filteredData);
    }
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}} className="PortfolioPage">
            <div className="title">
                <Title title={'Portfolios'} span={'Portfolios'} />
            </div>
            <div className="portfolios-data">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems} />
            </div>
        </motion.div>
    )
}

export default PortfoliosPage;
