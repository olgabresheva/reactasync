import React, {useState} from 'react';


function UserTable(props) {

    const saveBtn = (
        <svg className="bi bi-check2-all" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd"
                  d="M12.354 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
            <path
                d="M6.25 8.043l-.896-.897a.5.5 0 1 0-.708.708l.897.896.707-.707zm1 2.414l.896.897a.5.5 0 0 0 .708 0l7-7a.5.5 0 0 0-.708-.708L8.5 10.293l-.543-.543-.707.707z"/>
        </svg>
    );

    const deleteBtn = (<svg className="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/>
        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/>
    </svg>);

    const [userEdit, setUserEdit] = useState([]);

    const editer = (user) => {
        setUserEdit(user);
    }

    const onUserEditChange = (e) => {
        setUserEdit({...userEdit, name: e.target.value})
    }

    const saveUser = () => {
        props.saveUser(userEdit);
        setUserEdit([]);
    }

    const editCancel = () => {
        setUserEdit([]);
    }

    return (
        <div className="UserTable">

            <table className="table" hidden={props.isTableHidden}>
                <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Website</th>
                    <th scope="col">Company</th>
                </tr>
                </thead>
                {props.users.map(el =>
                    <tbody key={el.id}>
                    <tr>
                        <th scope="row">{el.id}</th>

                        {
                            userEdit.id === el.id
                                ? <>
                                    <input type="text" value={userEdit.name} onChange={onUserEditChange}/>
                                    <button className="btn btn-outline-success btn-sm" onClick={saveUser}>{saveBtn}</button>
                                    <button className="btn btn-outline-dark btn-sm"
                                            onClick={editCancel}>{deleteBtn}</button>
                                </>
                                : <td onClick={() => editer(el)}>{el.name}</td>

                        }
                        <td>{el.username}</td>
                        <td>{el.email}</td>
                        <td>
                            <tr>{el.address.street}</tr>
                            <tr>{el.address.suite}</tr>
                            <tr>{el.address.city}</tr>
                            <tr>{el.address.zipcode}</tr>
                        </td>
                        <td>{el.phone}</td>
                        <td>{el.website}</td>
                        <td>{el.company.name}</td>
                    </tr>
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default UserTable;
