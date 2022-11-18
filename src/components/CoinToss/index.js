import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {result: 0, total: 0, heads: 0, tails: 0}

  tossResult = () => {
    const {result, total, heads, tails} = this.state

    const newResult = Math.floor(Math.random() * 2)
    this.setState({result: newResult})
    this.setState(prevState => ({total: prevState.total + 1}))
    if (newResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {result, total, heads, tails} = this.state

    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          {result === 0 ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
              className="image"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
              className="image"
            />
          )}
          <button type="button" onClick={this.tossResult} className="button">
            Toss Coin
          </button>
          <div className="count-result">
            <p className="para-count">Total: {total}</p>
            <p className="para-count">Heads: {heads}</p>
            <p className="para-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
