import React from 'react';

class Bomb extends React.Component {

    state = {
        count: 0,
        interval: 0
    }

    componentDidMount(){
        console.log('mounted');
        let counter = setInterval(() => {
            this.setState({
                count: this.state.count + 1
            })
        }, 1000);

        this.setState({ interval: counter });

    }

    componentWillUnmount(){
        console.log('unmounted');
        clearInterval(this.interval)
    }

    render(){
        return (
            <div>
                <p>
                    {this.state.count % 2 === 0 && this.state.count < 8 && 'tick'}
                    {this.state.count % 2 !== 0 && this.state.count < 8 && 'tock'}
                    {this.state.count >= 8 && 'BOOM!!!!'}
                    {this.state.count >= 10 && clearInterval(this.state.interval)}
                </p>
            </div>
        )}
}

export default Bomb;