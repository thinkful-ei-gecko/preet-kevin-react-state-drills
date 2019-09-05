import React from 'react';

class RouletteGun extends React.Component{

    state = {
        chamber: null,
        spinningTheChamber: false
    }
    static defaultProps = {
        bulletInChamber: 8 
    }

    handleClick = () => {
        this.setState({ spinningTheChamber: true })
        this.timeout = setTimeout(() => {
            this.setState({
                chamber: Math.ceil(Math.random() * 8),
                spinningTheChamber: false})
        }, 2000)
        //console.log(this.state, this.props.bulletInChamber)
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>Pull the trigger!</button>
                <p>
                    {this.state.spinningTheChamber && 'spinning the chamber and pulling the trigger!...'}
                    {this.state.chamber === this.props.bulletInChamber ? 'BANG!!!!' : "you're safe"}
                </p>
            </div>
        )
    } 
}

export default RouletteGun;