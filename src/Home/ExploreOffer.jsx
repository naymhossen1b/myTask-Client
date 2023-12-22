

const ExploreOffer = () => {
    return (
        <div className="py-20">
            <h1 className="text-4xl font-bold text-center">Explore all Todoist has to offer</h1>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-5 w-11/12 mx-auto py-14 text-center" role="button">
                <div>
                    <img className="h-44 mx-auto" src="https://imagizer.imageshack.com/img924/8821/l2kCua.png" alt="" />
                    <p>Features</p>
                </div>
                <div>
                    <img className="h-44 mx-auto" src="https://imagizer.imageshack.com/img922/2452/XTCnzX.png" alt="" />
                    <p>Template Gallery</p>
                </div>
                <div>
                    <img className="h-44 mx-auto" src="https://imagizer.imageshack.com/img922/8779/Pd4TyK.jpg" alt="" />
                    <p>Productivity Quiz</p>
                </div>
                <div>
                    <img className="h-44 mx-auto" src="https://imagizer.imageshack.com/img922/3317/WLY7oE.jpg" alt="" />
                    <p>Extension Gallery</p>
                </div>
                <div>
                    <img className="h-44 mx-auto" src="https://imagizer.imageshack.com/img922/2693/1AUN9p.jpg" alt="" />
                    <p>Inspiration hub</p>
                </div>
            </div>
        </div>
    );
};

export default ExploreOffer;