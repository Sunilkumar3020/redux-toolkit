import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "./userSlice";

export default function Users() {
    const dispatch = useDispatch()
    const { users, loading, error } = useSelector(state => state.users);
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>Users</h2>
            {users.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}