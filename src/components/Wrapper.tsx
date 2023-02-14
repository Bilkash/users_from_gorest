import React from "react";

import "./Wrapper.css";
import { Layout } from "antd";

interface IProps {
  children: React.ReactNode;
  title: string
}

const { Header, Footer, Content } = Layout;

export default function Wrapper({ children, title }: IProps) {
	return (
		<Layout>
			<Header>
				<h1 className={"title"}>{title}</h1>
			</Header>

			<Content className={"wrapper"}>
				{children}
			</Content>

			<Footer style={footerStyle}>
				Some info.
			</Footer>
		</Layout>
	);
}

const footerStyle: React.CSSProperties = {
	textAlign: "center",
	color: "#fff",
	backgroundColor: "#7dbcea",
};
