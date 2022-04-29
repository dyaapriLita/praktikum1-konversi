
import React, { Component } from "react";

class Hexadesimal extends Component {
    constructor() {
        super();
        this.state = {
            hexadesimal: 0,
            option: "",
            result: 0
        }
    }

    convert = () => {
        const hexadesimal = this.state.hexadesimal
        const desimal = parseInt(hexadesimal, 16)
        if (this.state.option === "desimal") {
            return this.setState({
                result: desimal
            })
        } else if (this.state.option === "oktal") {
            return this.setState({
                result: desimal.toString(8)
            })
        } else if (this.state.option === "biner") {
            return this.setState({
                result: desimal.toString(2)
            })
        }
    }

    changeBiner = (event) => {
        this.setState({
            hexadesimal: event.target.value
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
                        <h3>Konversi Bilangan Heksadesimal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label>Hexadesimal</label>
                            <input type="text" className="form-control" onChange={this.changeBiner}></input>
                        </div>
                        <div className="form-group mb-3" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="desimal">Desimal</option>
                                <option value="oktal">Oktal</option>
                                <option value="biner">Biner</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-success form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="p-3 form-control text-center">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hexadesimal;