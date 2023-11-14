import FoodCard from "../../Components/FoodCard";


const OrderTab = ({itms}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                itms.map( item => <FoodCard key={item._id} item={item} />)
            }
            </div>
        </div>
    );
};

export default OrderTab;