import React, { Component } from "react";

class Oktal extends Component {
    constructor() {
        super();
        this.state = {
            oktal: 0,
            option: "",
            result: 0
        }
    }

    convert = () => {
        const oktal = this.state.oktal
        const decimal = parseInt(oktal, 8)
        if (this.state.option === "desimal") {
            return this.setState({
                result: decimal
            })
        } else if (this.state.option === "biner") {
            return this.setState({
                result: decimal.toString(2)
            })
        } else if (this.state.option === "hexadesimal") {
            return this.setState({
                result: decimal.toString(16)
            })
        }
    }

    changeOktal = (event) => {
        this.setState({
            octal: event.target.value
        })
    }

    changeOption = (event) => {
        this.setState({
            option: event.target.value
        })
    }

    render() {
        return (
            <div className="container col-md-6">
                <div className="card">
                    <div className="card-header bg-primary text-center text-white">
                        <h3>Konversi Bilangan Oktal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label>Oktal</label>
                            <input type="number" className="form-control" onChange={this.changeOktal}></input>
                        </div>
                        <div className="form-group" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="decimal">Desimal</option>
                                <option value="biner">Biner</option>
                                <option value="hexadecimal">Hexadesimal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-success form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Oktal;