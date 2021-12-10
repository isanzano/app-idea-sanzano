import React from "react";
import "./App.css";
//components
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar";
import UserCard from "./components/UserCard/UserCard";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
// import {Container, Row,Col} from 'react-bootstrap' ;

class App extends React.Component {
	render() {
		return (
			<>
				<div className="App">
					<Header
						title="Veterinaria Independencia"
						subtitle="Av. Independencia 1500"
						color="black"
					/>
					<NavBar />
					<ItemListContainer greeting="Bienvenidos a nuestro sitio" />
					<div className="UserSection">
						<UserCard
							name="Miles Morales"
							img="https://i.pinimg.com/736x/3d/2e/75/3d2e75813b60d87414f9820bc5644319.jpg"
							date="14/02/2005"
							description="Spiderman"
						/>
						<UserCard
							name="Ellie"
							img="https://bolavip.com/__export/1593539277540/sites/bolavip/img/2020/06/30/ellie_crop1593539277011.jpg_1216690859.jpg"
							date="30/05/2019"
							description="Tlou"
						/>
						<UserCard
							name="Mando"
							img="https://pbs.twimg.com/profile_images/1242438529449418753/E9pBkhtG_400x400.jpg"
							date="10/07/1250"
							description="Mandalorian"
						/>
					</div>
				</div>
			</>
		);
	}
}
export default App;
