import React, { Component } from "react";
import Square from "../square/Square";
import calculateWinner from "./calculateWinner";
import SelectPlayMode from "./selectPlayMode/SelectPlayMode";
import PickSide from "./pickSide/PickSide";
import "./board.style.css";
import ScoreBoard from "./scoreBoard/ScoreBoard";
import Settings from "./setting/Settings";

export class Board extends Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: false,
    xScore: 0,
    oScore: 0,
    withComp: false,
    playModeSelected: false,
    sidePicked: false,
  };

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    // Find winner
    const winner = calculateWinner(squares);
    if (winner) {
      // If there's a winner update the score card and open next game with winning player
      this.gameScoreUpdateAfterWinner(squares);
    } else if (!calculateWinner(squares) && !squares.includes(null)) {
      // In case it's a Draw then open the next game with different player then the current
      this.caseDraw();
    } else {
      if (this.state.withComp) {
        let compPlayer = this.compPlayerTurn();
        if (squares[compPlayer] !== null) {
          while (squares[compPlayer] !== null) {
            compPlayer = this.compPlayerTurn();
          }
        }
        squares[compPlayer] = !this.state.xIsNext ? "X" : "O";
        const winner = calculateWinner(squares);
        if (winner) {
          this.gameScoreUpdateAfterWinner(squares);
        } else if (!calculateWinner(squares) && !squares.includes(null)) {
          // In case it's a Draw then open the next game with different player then the current
          this.caseDraw();
        } else {
          // In case game is not completed update the sqaures and next player
          this.setState({
            squares: squares,
            xIsNext: this.state.xIsNext,
          });
        }
      } else {
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
    }
  }

  caseDraw() {
    this.setState({
      ...this.state,
      squares: Array(9).fill(null),
      xIsNext: this.state.withComp ? this.state.xIsNext : !this.state.xIsNext,
    });
  }

  compPlayerTurn() {
    return Math.floor(Math.random() * 9);
  }

  gameScoreUpdateAfterWinner = (squares) => {
    const playerScore = calculateWinner(squares) === "X" ? "xScore" : "oScore";
    let nextPlayer = null;
    if (this.state.withComp) {
      nextPlayer = this.state.xIsNext;
    } else {
      nextPlayer = playerScore === "xScore";
    }
    this.setState({
      ...this.state,
      squares: Array(9).fill(null),
      xIsNext: nextPlayer,
      [playerScore]: this.state[playerScore] + 1,
    });
  };

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        index={i}
      />
    );
  }

  handlePlayMode = (playType) => {
    switch (playType) {
      case "comp":
        this.setState({ playModeSelected: true, withComp: true });
      case "friend":
        this.setState({ playModeSelected: true });
      default:
        return;
    }
  };

  handleSidePick = (value) => {
    this.setState({ sidePicked: true, xIsNext: value === "x" });
  };

  handleResetGame = () => {
    this.setState({
      squares: Array(9).fill(null),
      xScore: 0,
      oScore: 0,
    });
  };

  handleMainSettingReset = () => {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: false,
      xScore: 0,
      oScore: 0,
      withComp: false,
      playModeSelected: false,
      sidePicked: false,
    });
  };

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    if (!this.state.playModeSelected) {
      return <SelectPlayMode handlePlayMode={this.handlePlayMode} />;
    } else if (!this.state.sidePicked && this.state.playModeSelected) {
      return <PickSide handleSidePick={this.handleSidePick} />;
    } else {
      return (
        <div>
          <div>
            <ScoreBoard
              oScore={this.state.oScore}
              xScore={this.state.xScore}
              withComp={this.state.withComp}
              xSelected={this.state.xIsNext}
            />
          </div>
          <div className="status my-10 text-center">{status}</div>
          <div className="board">
            <div className="board-row">
              {this.renderSquare(0)}
              {this.renderSquare(1)}
              {this.renderSquare(2)}
            </div>
            <div className="board-row">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="board-row">
              {this.renderSquare(6)}
              {this.renderSquare(7)}
              {this.renderSquare(8)}
            </div>
          </div>
          <Settings
            reset={() => this.handleResetGame()}
            mainSetting={() => this.handleMainSettingReset()}
          />
        </div>
      );
    }
  }
}

export default Board;
