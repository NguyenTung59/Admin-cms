import React, { useState, useEffect } from 'react';
import { Button, Form, Input } from 'antd';

const layout = {
	labelCol: {
		span: 4
	},
	wrapperCol: {
		span: 16
	}
};

const EditUserForm = props => {
	const [dateTime, setDateTime] = useState(new Date());

	const initialUser = {
		id: null,
		name: '',
		address: '',
		website: '',
		total: 0,
		date: dateTime.toLocaleDateString('en-GB')
	};

	const [user, setUser] = useState(initialUser);

	// handle onChange
	const handleChange = e => {
		const { name, value } = e.target;
		setUser({ ...user, [name]: value });
	};

	// handle Submit
	const handleSubmit = e => {};

	// handle Reset
	const handleReset = () => {};

	return (
		<div>
			<h2>Edit User</h2>
			<Form {...layout} name="nest-messages" onSubmit={handleSubmit}>
				<Form.Item
					label="Name"
					rules={[
						{
							required: true
						}
					]}
				>
					<Input name="name" value={user.name} onChange={handleChange} />
				</Form.Item>
				<Form.Item label="Address">
					<Input name="address" value={user.address} onChange={handleChange} />
				</Form.Item>
				<Form.Item label="Website">
					<Input name="website" value={user.website} onChange={handleChange} />
				</Form.Item>
				<Form.Item label="Total">
					<Input name="total" value={user.total} onChange={handleChange} />
				</Form.Item>
				<Form.Item
					wrapperCol={{
						...layout.wrapperCol,
						offset: 8
					}}
				>
					<Button type="primary" htmlType="submit" onClick={handleSubmit}>
						Save
					</Button>
					<Button onClick={handleReset}>Reset</Button>
					<Button onClick={() => props.setEditing(false)}>Cancel</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default EditUserForm;
