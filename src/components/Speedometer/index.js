import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {value: 0}

  onAccelerate = () => {
    const {value} = this.state
    if (value < 200) {
      this.setState(previous => ({
        value: previous.value + 20,
      }))
    }
  }

  onBrake = () => {
    const {value} = this.state
    if (value > 0) {
      this.setState(previous => ({
        value: previous.value - 20,
      }))
    }
  }

  render() {
    const {value} = this.state
    return (
      <div className="containerMain">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="Speedometer"
        />
        <h4 className="speedClass">
          Speed is <span className="value">{value} </span> mph
        </h4>
        <p className="limitClass">Min limit is 0mph and Max limit is 200mph</p>
        <div className="brakesClass">
          <button
            className="accelerate"
            onClick={this.onAccelerate}
            type="button"
          >
            Accelerate
          </button>
          <button onClick={this.onBrake} className="applyBrake" type="button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
