import { useEffect } from "react";
import { fetchUsers } from "../redux/user/userActions";
import { useDispatch, useSelector } from "react-redux";
import { tableUsersList } from "../constants/tableHead";

function UsersList() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    } , [dispatch])

    return (
        <di>
            Users List:
            {state.loading ? (<p>Loading ....</p>) : state.error ? (<p>{state.error}</p>) : (<div>
                {state.data && state.data.map((item) => {
                    return (
                        <ul>
                            <table className="table">
                                <thead>
                                    <tr>
                                        {tableUsersList.map((item) => {
                                            return <th key={item.id}>{item.label}</th>
                                        })}
                                    </tr>
                                </thead>
                                <tbody className="t__body">
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.username}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </ul>
                    )
                })}
            </div>)}
        </di>
    )
};
export default UsersList;