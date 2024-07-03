export default async function ISR() {
    const response = await fetch('https://dummyjson.com/users', { next: { revalidate: 5 }});
    let users = await (await response.json()).users;
    users = users.map((user: any) => user.firstName);
    let tempUser: string[] = [];
    for (let i = 0; i < 10; i++) {
        tempUser.push(users[Math.floor(Math.random() * users.length)]);
    }

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString('en-GB');
    const formattedTime = currentDate.toLocaleTimeString('en-GB', { hour12: false });
    const date = `${formattedDate} ${formattedTime}`;
    
    return (
      <div>
        <h1 className="text-2xl font-bold m-3">Users (ISR)</h1>
        <h3 className="pl-3 font-bold text-xl mb-3" > Date: { date }</h3>
        <ul className="list-disc">
          {tempUser.length &&
            tempUser.map((user: any, index: number) => (
              <li className="pl-3" key={index}>
                {user}
              </li>
            ))}
        </ul>
      </div>
    );
}
  
  