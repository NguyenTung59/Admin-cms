import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import UserData from './data';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
	const [dateTime, setDateTime] = useState(new Date());

	const initialUser = {
		id: null,
		name: '',
		address: '',
		website: '',
		total: 0,
		date: dateTime.toLocaleDateString('en-GB')
	};
	const [editing, setEditing] = useState(false);
	const [users, setUsers] = useState([]);

	//Get Data
	const getData = () => {
		setUsers(UserData);
	};
	//Hide Data
	const hideData = () => {
		setUsers([]);
	};
	//Add user
	const addUser = user => {
		user.id = users.length + 1;
		setUsers([...users, user]);
	};
	//Delete user
	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id));
	};
	//Edit user
	const [userCurrent, setUserCurrent] = useState(initialUser);

	const editUser = (id, user) => {
		setEditing(true);
		setUserCurrent(user);
	};
	//Update user
	const updateUser = newUser => {
		setUsers(users.map(user => (user.id === newUser.id ? newUser : user)));
		setUserCurrent(initialUser);
		setEditing(false);
	};

	return (
		<div className="App">
			{editing ? (
				<EditUserForm
					editing={editing}
					updateUser={updateUser}
					userCurrent={userCurrent}
				/>
			) : (
				<AddUserForm addUser={addUser} />
			)}

			<UserTable users={users} deleteUser={deleteUser} editUser={editUser} />
			<Button onClick={getData}>Get Data</Button>
			<Button onClick={hideData}>Hide Data</Button>
		</div>
	);
}

export default App;
