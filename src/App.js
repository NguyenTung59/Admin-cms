import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import UserData from './data';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
	const [editting, setEditting] = useState(false);
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
	//Update user

	return (
		<div className="App">
			{editting ? <EditUserForm /> : <AddUserForm addUser={addUser} />}

			<UserTable users={users} deleteUser={deleteUser} />
			<Button onClick={getData}>Get Data</Button>
			<Button onClick={hideData}>Hide Data</Button>
		</div>
	);
}

export default App;
