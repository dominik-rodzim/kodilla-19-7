	class Stopwatch extends React.Component {
    constructor() {
        running: false;
        times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0        	
        }
        results: []
    }

    reset() {
        this.times.setState = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    resetTime() {
    	this.stop();
    	this.reset();
    }

	format() {
	    function pad0(value) {
	    	let result = value.toString();
	    	if (result.length < 2) {
	      		result = "0" + result;
	     	}
	    return result;
	    }
	    return `${pad0(this.state.times.minutes)}:${pad0(this.state.times.seconds)}:${pad0(Math.floor(this.state.times.miliseconds))}`;
	}

    start() {
      if (!this.state.running) {
        this.setState({
          running: true
        });
        this.watch = setInterval(() => this.step(), 10);
    	}
	}

	step() {
	    if (!this.running) return;
	    this.calculate();
	}

	calculate() {
	    this.times.miliseconds += 1;
	    if (this.state.times.miliseconds >= 100) {
	        this.state.times.seconds += 1;
	        this.state.times.miliseconds = 0;
	    }
	    if (this.state.times.seconds >= 60) {
	        this.state.times.minutes += 1;
	        this.state.times.seconds = 0;
	    }
	}

	stop() {
	    this.setState({
	    	running: false
	    });
	    clearInterval(this.watch);
	}

	addResult(times) {
		const singleResult = this.format();
		let results = [...this.state.results, singleResult];
		this.setState({
      		listResults
    	});
	}
	resetList() {
		this.setState({
	    	listResults: []
	    });
	}
	  render() {
	    const lapList = this.state.lapTimes.map(item => {
	      return <li key={item}>{item}</li>;
	    });
	    return (
	      <div className="<counter">
	        <nav className="controls">
	          <a href="#" className="button" onClick={this.start}>
	            Start
	          </a>
	          <a href="#" className="button" onClick={this.stop}>
	            Stop
	          </a>
	          <a href="#" className="button" onClick={this.reset}>
	            Reset All
	          </a>
	          <a href="#" className="button" onClick={this.lapTime}>
	            Lap
	          </a>
	          <a href="#" className="button" onClick={this.resetLaps}>
	            Reset Laps
	          </a>
	        </nav>
	        <div className="stopwatch" id="watch">
	          {this.format()}
	        </div>
	        <ul className="results">
	          {this.state.results.map(item => <li key={item}>{item}</li>)}
	        </ul>
	      </div>
	    );
	}
}
	
ReactDOM.render(<Stopwatch />, document.getElementById("app"));