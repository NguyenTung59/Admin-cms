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
	const getDate = () => {
		setUsers(UserData);
	};
	//Add user
	//Delete user
	//Edit user
	//Update user

	return (
		<div className="App">
			{editting ? <EditUserForm /> : <AddUserForm />}

			<UserTable users={users} />
			<Button onClick={getDate}>Get Data</Button>
		</div>
	);
}

export default App;
