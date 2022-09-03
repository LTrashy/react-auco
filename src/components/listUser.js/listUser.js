import { useState, useEffect } from "react";
import UserItem from "./userItem";

const ListUser = () => {
  const [users, setUsers] = useState([]);
  let index = 1;
  const listUsers = async () => {
    try {
      const res = await fetch(`https://reqres.in/api/users?page=${index}`);
      const data = await res.json();
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listUsers();
  }, []);
  console.log(users);
  return (
    <>
      <div className="row">
        {users.map((item) => (
          <UserItem key={item.id} user={item} />
        ))}
      </div>
      <footer className="">
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  index = 1;
                  listUsers();
                }}
              >
                1
              </button>
            </li>
            <li class="page-item">
              <button
                class="page-link"
                onClick={() => {
                  index = 2;
                  listUsers();
                }}
              >
                2
              </button>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};
export default ListUser;
