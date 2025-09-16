const staticUser = (props) => {
    return <div>
        <h1>
            Static User Page
        </h1>
        {props.data.users.map((user) => (
            <li className="p-4 flex" key={user.id}>{user.firstName}</li>
        ))}
    </div>
}

export const getStaticProps = async () => {
    const data = await (await fetch('https://dummyjson.com/users')).json();
    return {
        props: {
            data,
        },
    };
}

export default staticUser;