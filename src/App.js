import React from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
	return (
		<div className="App">
			<AddUserForm />
			<EditUserForm />
			<UserTable />
		</div>
	);
}

export default App;
