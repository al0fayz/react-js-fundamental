import React, { Component, Fragment } from 'react';

class CounterComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: 0
        }
    }
    //function untuk merubah nilai di parents
    onHandleChange = (value) => {
        this.props.handleChange(value);
    }
    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.onHandleChange(this.state.order)
        })
    }

    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.onHandleChange(this.state.order)
            })
        }
    }

    render() {
        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                                <div className="card-body d-flex justify-content-center">
                                    <button className="btn btn-info" onClick={this.handleMinus}>-</button>
                                    <h5 className="card-title px-4">{this.state.order}</h5>
                                    <button className="btn btn-info" onClick={this.handlePlus}>+</button>
                                </div>              
                            </div>
                        </div>
                    </div>
            </Fragment>
        )
    }
}
export default CounterComp;