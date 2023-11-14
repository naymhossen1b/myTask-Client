
const PopularMenesCard = ({menu}) => {

    const {name, image, recipe, price} = menu || {};
    
    return (
        <>
            <div className="flex gap-6">
                <div>
                    <img style={{borderRadius: "0 200px 200px 200px"}} src={image} alt="" className="w-[100px] border border-green-500" />
                </div>
                <div className="space-y-2">
                    <h1 className="uppercase font-medium">{name}------------</h1>
                    <p>{recipe}</p>
                </div>
                <div>
                    <p className="text-yellow-400 font-bold">{price}</p>
                </div>
            </div>
        </>
    );
};

export default PopularMenesCard;