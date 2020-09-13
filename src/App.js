import React from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';

function App() {
	return (
		<div className="App">
			<AddUserForm />
			<UserTable />
		</div>
	);
}

export default App;
