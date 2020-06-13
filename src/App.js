import React, {useState} from 'react';
import axios from 'axios';
import UserTable from './UserTable';

function App() {

    const [users, setUsers] = useState([]);
    const [isTableHidden, setisTableHidden] = useState(true)

    const load = () => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/users'
        })
            .then((response) => {
                setUsers(response.data);
            });
        setisTableHidden(false);
    }

    const saveUser = (user) => {
        const savedUserList = users.map(el => {
            if (user.id === el.id) return {...el, name: user.name}
            else return el;
        })
        setUsers(savedUserList);
    }

    return (
        <div className="App">

            <div className="container">
                <p/>
                <a href="https://github.com/olgabresheva/reactasync">Link to GitHub</a>
                <p/>
                <button type="button" className="btn btn-info" onClick={load}>Review Users</button>
                <p/>
                <UserTable users={users}
                           isTableHidden={isTableHidden}
                           saveUser={saveUser}/>
            </div>
        </div>

    );
}

export default App;
