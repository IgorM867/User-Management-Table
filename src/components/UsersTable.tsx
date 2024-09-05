import "./UsersTable.css";
import Spinner from "./Spinner";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchUsers, selectFilteredUsers, selectUsersError, selectUsersStatus } from "../usersSlice";
import { useEffect } from "react";

function UsersTable() {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectUsersStatus);
  const error = useAppSelector(selectUsersError);
  const users = useAppSelector(selectFilteredUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Username</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
        </tr>
      </thead>
      <tbody>
        {status === "pending" ? (
          <Spinner />
        ) : status === "rejected" ? (
          <tr className="error-message">
            <td colSpan={4}>{error}</td>
          </tr>
        ) : (
          users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default UsersTable;
