import styled from "styled-components";

const Image = styled.img`
	height: 50px;
	width: 70px;
	position: absolute;
	left: 40px;
	top: 23px;
	@media only screen and (max-width: 650px) {
		display: none;
	} 
`;
Image.displayName = "image";
const Wrapper = styled.div`
	border: 1px solid black;
	margin: 20px;
	position: relative;
	box-sizing: border-box;
	background: #483d8b;
`;
Wrapper.displayName= "Wrapper";

const A = styled.a`
	margin: 30px;
	padding: 10px 35px;
	text-decoration: none;
	color: black;
	background: yellow;
	color: #008b8b;
	@media only screen and (max-width: 650px) {
		padding: 5px 10px;
		font-size: 10px;
	}
`;
A.displayName = "A";
const Div = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;
Div.displayName = "Div";
const B = styled.a`
	margin: 30px;
	padding: 10px 35px;
	text-decoration: none;
	color: black;
	background: blue;
	color: #008b8b;
	@media only screen and (max-width: 650px) {
		padding: 5px 10px;
		font-size: 10px;
	}
`;
B.displayName = "B";


export {Image,Wrapper,Div,A,B} 