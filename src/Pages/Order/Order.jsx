import { useState } from "react";
import orderImage from "../../../public/assets/shop/banner2.jpg";
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from "../../Hooks/UseMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

    const categories =  ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = UseMenu();

    const dessert = menus.filter((itm) => itm.category === "dessert");
    const salad = menus.filter((itm) => itm.category === "salad");
    const pizza = menus.filter((itm) => itm.category === "pizza");
    const soup = menus.filter((itm) => itm.category === "soup");
    const drinks = menus.filter((itm) => itm.category === "drinks");

  return (
    <div>
         <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
      <Cover img={orderImage} title={"Order Food"} />

    <div className="py-8 items-center">
    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
         <div className="uppercase font-bold text-xl text-center">
         <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
         </div>
        </TabList>
        <TabPanel>
           <OrderTab itms={salad} />
        </TabPanel>
        <TabPanel>
           <OrderTab itms={pizza} />
        </TabPanel>
        <TabPanel>
           <OrderTab itms={soup} />
        </TabPanel>
        <TabPanel>
           <OrderTab itms={dessert} />
        </TabPanel>
        <TabPanel>
           <OrderTab itms={drinks} />
        </TabPanel>
      </Tabs>
    </div>
    </div>
  );
};

export default Order;
