import React, { Component } from "react";

class Octal extends Component {
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
        const desimal = parseInt(oktal, 8)
        if (this.state.option === "desimal") {
            return this.setState({
                result: desimal
            })
        } else if (this.state.option === "biner") {
            return this.setState({
                result: desimal.toString(2)
            })
        } else if (this.state.option === "hexadesimal") {
            return this.setState({
                result: desimal.toString(16)
            })
        }
    }

    changeOktal = (event) => {
        this.setState({
            oktal: event.target.value
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
                    <div className="card-header bg-danger text-center text-white">
                        <h3>Konversi Bilangan Oktal</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-group mb-3">
                            <label>Oktal</label>
                            <input type="number" className="form-control" onChange={this.changeOktal}></input>
                        </div>
                        <div className="form-group mb-3" onChange={this.changeOption}>
                            <label>Pilihan Konversi</label>
                            <select className="form-control">
                                <option value="desimal">Desimal</option>
                                <option value="biner">Biner</option>
                                <option value="hexadesimal">Hexadesimal</option>
                            </select>
                        </div>
                        <div className="form-group mb-3">
                            <button className="btn btn-danger form-control" onClick={this.convert}>Convert</button>
                        </div>
                        <h5 className="alert alert-secondary">{this.state.result}</h5>
                    </div>
                </div>
            </div>
        )
    }
}

export default Octal;