export default async function SSG() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    const users = data?.users;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    const formattedTime = currentDate.toLocaleTimeString('en-GB', { hour12: false });
    const date = `${formattedDate} ${formattedTime}`;

    return (
      <div>
        <h1 className="text-2xl font-bold m-3">Users (SSG)</h1>
        <h3 className="pl-3 font-bold text-xl mb-3" > Date: { date }</h3>

        <ul className="list-disc">
          {users.length &&
            users.map((user: any) => (
              <li className="pl-3" key={user.id}>
                {user.firstName}
              </li>
            ))}
        </ul>
      </div>
    );
}
  