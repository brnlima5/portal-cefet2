import { useSelector } from 'react-redux';

//TERMINAR
const AdminProfile = () => {

        const { currentUser } = useSelector((state) => state.user);

    return (
        <div>
            Nome: {currentUser.name}
            <br />
            E-Mail: {currentUser.email}
            <br />
        </div>
    )
}

export default AdminProfile