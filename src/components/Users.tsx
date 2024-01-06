interface User {
  name: string;
  username: string;
}

const Users = async () => {
  const userRes = await fetch(
    'https://jsonplaceholder.typicode.com/users?_limit=2'
  );
  const users: User[] = await userRes.json();
  return (
    <ul className="space-y-2">
      {users?.map((user, index) => (
        <li key={index} className="border p-2 rounded">
          <h6 className="font-semibold capitalize">{user.name}</h6>
          <p>{user.username}</p>
        </li>
      ))}
    </ul>
  );
};

export default Users;
