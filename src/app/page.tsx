let users: any = [];
async function fetchUsers() {
	const res = await fetch("https://dummyjson.com/users");
	const data = await res.json();
	users = [...data.users];
};

fetchUsers();

export default function Home() {
	return (
		<div>
			<ul>
				{
					users.length && users.map((user: any) => <li key={user.id}>{user.firstName} </li>)
				}
			</ul>
		</div>
	);
}
