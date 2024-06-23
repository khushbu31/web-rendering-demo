export function SSG({ users }: any) { 

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {
                    users.length && users.map((user: any) => <li key={user.id}>{user.firstName} </li>)
                }
            </ul>
        </div>
    );
}
  
export default SSG;

export const getStaticProps = async() => {
    const res = await fetch("https://dummyjson.com/users");
    const result = await res.json();
    return {
        props: {
            users: result.users,
        }
    };
}