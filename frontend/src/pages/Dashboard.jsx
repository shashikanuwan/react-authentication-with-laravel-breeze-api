import useAuthContext from "../context/AuthContext";

const Dashboard = () => {
    const { user } = useAuthContext();
    return (
        <div>
            {user?.name}
        </div>
    )
}

export default Dashboard