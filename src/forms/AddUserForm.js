import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const layout = {
	labelCol: {
		span: 4
	},
	wrapperCol: {
		span: 16
	}
};

const AddUserForm = props => {
	//show form
	const showForm = () => {};

	//handle Change
	const handleChange = e => {};
	//handle Cancel
	const handleCancel = () => {};
	// handle Submit
	const handleSubmit = e => {};

	return (
		<div>
			<Button onClick={showForm}>New</Button>
			{visible ? (
				<Form {...layout} name="nest-messages" onSubmit={handleSubmit}>
					<Form.Item
						name={['user', 'name']}
						label="Name"
						rules={[{ required: true }]}
					>
						<Input name="name" value={user.name} onChange={handleChange} />
					</Form.Item>
					<Form.Item name={['user', 'address']} label="Address">
						<Input
							name="address"
							value={user.address}
							onChange={handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'website']} label="Website">
						<Input
							name="website"
							value={user.website}
							onChange={handleChange}
						/>
					</Form.Item>
					<Form.Item name={['user', 'total']} value={user.total} label="Total">
						<Input name="total" value={user.total} onChange={handleChange} />
					</Form.Item>
					<Form.Item
						wrapperCol={{
							...layout.wrapperCol,
							offset: 8
						}}
					>
						<Button type="primary" htmlType="submit" onClick={handleSubmit}>
							Add
						</Button>
						<Button onClick={handleCancel}>Cancel</Button>
					</Form.Item>
				</Form>
			) : null}
		</div>
	);
};

export default AddUserForm;
