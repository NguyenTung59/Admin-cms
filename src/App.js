import React, { useState } from 'react';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

function App() {
	const [editting, setEditting] = useState(false);
	return (
		<div className="App">
			{editting ? <EditUserForm /> : <AddUserForm />}

			<UserTable />
		</div>
	);
}

export default App;
