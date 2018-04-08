import React, { Component } from 'react';
import Box from './Box';
import './Board.css';
	class Board extends Component{
		constructor(props){
			super(props);
			this.state = {
				currentPlayer:'X'
			}
		}
		render(){
			return(
					<div className="Board">
						{
							[...Array(9)].map((v,index)=> {
								return(<Box 
									value={index} 
									currentPlayer={this.state.currentPlayer} 
									key={index} 
									changePlayer{() => this.changeCurrentPlayer()} 
									/>}) 
					
						}
					</div>
				)
		}
		changeCurrentPlayer(){
			let nextPlayer = "0"
			nextPlayer = this.state.currentPlayer === 'X' ? '0' :'X'
			this.setState({
				currentPlayer: nextPlayer
			})
			console.log(this.state.currentPlayer);
		}
	}
	export default Board;