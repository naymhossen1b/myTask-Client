import useAuth from "../../Hooks/useAuth";


const UserHome = () => {

    const { user } = useAuth();


    return (
        <div>
             <h1 className="text-3xl font-bold"><span>Hi Welcome </span>
            {
                user?.email ? user?.email : "Back"
            }
            </h1>
        </div>
    );
};

export default UserHome;