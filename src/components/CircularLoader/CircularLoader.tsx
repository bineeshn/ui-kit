import React from "react";
import { Backdrop } from "@mui/material";
import { ImSpinner } from "react-icons/im";
import styled from "styled-components";

export interface ICircularLoaderProps {
	open: boolean;
	zIndex?: number;
}

const StyledImSpinner = styled(ImSpinner)`
	animation: spin 3s linear infinite;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;

const CircularLoader = (props: ICircularLoaderProps) => {
	const { open, zIndex } = props;
	return (
		<Backdrop
			sx={{
				color: "#fff",
				zIndex: (theme) => (zIndex ? zIndex : theme.zIndex.drawer + 1),
				position: "absolute",
			}}
			open={open}
		>
			<StyledImSpinner className="spinner" size={40} />
		</Backdrop>
	);
};

export default CircularLoader;
