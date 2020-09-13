import React from 'react';
import 'antd/dist/antd.css';
import { Table, Button, Popconfirm } from 'antd';

const UserTable = props => {
	const columns = [
		{
			title: 'No.',
			dataIndex: 'id',
			key: 'key',
			render: key => <div>{key}</div>
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: text => <a href={text}>{text}</a>
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Website',
			dataIndex: 'website',
			key: 'website'
		},
		{
			title: 'Total',
			dataIndex: 'total',
			key: 'total',
			render: total => <div>{total}</div>
		},
		{
			title: 'Date',
			key: 'date',
			dataIndex: 'date',
			render: date => <div>{date}</div>
		},
		{
			title: 'Act',
			width: '14%',
			align: 'center',
			render: (text, record) =>
				props.users.length > 0 ? (
					<div>
						<Button
							style={{
								background: '#ffc107',
								borderColor: '#ffc107'
							}}
							onClick={() => props.editUser(record.id, record)}
						>
							<i className="fa fa-edit">Edit</i>
						</Button>
						<Popconfirm
							title="Definitely Delete"
							onConfirm={() => props.deleteUser(record.id)}
						>
							<Button
								style={{
									background: '#f86c6b',
									borderColor: '#f86c6b'
								}}
							>
								<i className="fa fa-trash">Delete</i>
							</Button>
						</Popconfirm>
					</div>
				) : null
		}
	];

	return (
		<Table
			columns={columns}
			dataSource={props.users}
			rowKey={record => record.name}
		/>
	);
};

export default UserTable;
