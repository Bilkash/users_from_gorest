import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input, message, Select } from "antd";

import Wrapper from "../components/Wrapper";
import editUser from "../requests/editUser";
import Loader from "../components/Loader";

import { StateType } from "../types/sagaTypes";
import { UserEditType } from "../types/usersTypes";

export default function EditUser() {
	const dispatch = useDispatch();
	const { id } = useParams();
	const [messageApi, contextHolder] = message.useMessage();
	const navigate = useNavigate();
	const state = useSelector((state: StateType) => state);
	const { userForEdit, userForEditError } = state;

	useEffect(() => {
		messageApi.open({
			type: "error",
			content: "Something went wrong :(",
		});
	}, [userForEditError]);

	const validateMessages = {
		types: {
			email: "${label} is not a valid email!",
		},
	};

	const onFinish = (values: UserEditType) => {
		if (id) {
			editUser(
				values,
				id,
			);

			messageApi.open({
				type: "success",
				content: "This is a success message",
			});

			setTimeout(() => navigate("/users"), 1000);
		}
	};

	const onFinishFailed = () => {
		messageApi.open({
			type: "error",
			content: "Something went wrong :(",
		});
	};

	useEffect(() => {
		if (!userForEdit) {
			dispatch({ type: "GET_FOR_EDIT_DATA", id });
		}
	}, [userForEdit, id]);

	if (userForEditError) {
		return (
			<>
				{contextHolder}
				<Loader/>
			</>
		);
	}
	if (!userForEdit) {
		return (
			<Loader/>
		);
	}
	else {
		const { data: { name, gender, status, email } } = userForEdit;

		return (
			<>
				{contextHolder}
				<Wrapper title={`EDIT USER ${name}`}>
					<Form
						name="basic"
						labelCol={{ span: 8 }}
						wrapperCol={{ span: 16 }}
						style={{ maxWidth: 600 }}
						initialValues={{
							name,
							email,
							status,
							gender
						}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="off"
						validateMessages={validateMessages}
					>
						<Form.Item
							label={"Name"}
							name={"name"}
							rules={[{ required: true }]}
						>
							<Input/>
						</Form.Item>

						<Form.Item
							label={"Email"}
							name={"email"}
							rules={[{ type: "email", required: true }]}
						>
							<Input/>
						</Form.Item>

						<Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
							<Select>
								<Select.Option value="male">male</Select.Option>
								<Select.Option value="female">female</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item name="status" label="Status" rules={[{ required: true }]}>
							<Select>
								<Select.Option value="active">active</Select.Option>
								<Select.Option value="inactive">inactive</Select.Option>
							</Select>
						</Form.Item>

						<Form.Item {...tailLayout}>
							<Button type="primary" htmlType="submit">
								Edit
							</Button>
						</Form.Item>
					</Form>
				</Wrapper>
			</>
		);
	}
}

const tailLayout = {
	wrapperCol: { offset: 8, span: 16 },
};
