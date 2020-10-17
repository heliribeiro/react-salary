import React, { Component } from "react";
import { calculateSalaryFrom } from "./utils/salary";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      salarioBruto: 3900
    };
  }

  handleInputSalary = (event) => {
    this.setState({ salarioBruto: event.target.value });
  };

  render() {
    let {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(this.state.salarioBruto);
    return (
      <div className="container">
        <h1>React Salário</h1>
        <div className="row">
          <label className="col s12">
            <p>Salário Bruto</p>
            <input
              id="salarioBruto"
              type="number"
              value={this.state.salarioBruto}
              onChange={this.handleInputSalary}
            />
          </label>

          <label className="col s3">
            <p>base INSS</p>
            <input
              id="baseINSS"
              type="text"
              readOnly
              value={`R$ ${baseINSS}`}
            />
          </label>

          <label className="col s3">
            <p>Desconto INSS</p>
            <input
              id="descontoINSS"
              type="text"
              readOnly
              value={`R$ ${discountINSS} (${(discountINSS/this.state.salarioBruto * 100).toFixed(2)})%`}
            />
          </label>

          <label className="col s3">
            <p>base IRPF</p>
            <input
              id="baseIRPF"
              type="text"
              readOnly
              value={`R$ ${baseIRPF}`}
            />
          </label>

          <label className="col s3">
            <p>Desconto IRPF</p>
            <input
              id="descontoIRPF"
              type="text"
              readOnly
              value={`R$ ${discountIRPF} (${(discountIRPF/this.state.salarioBruto * 100).toFixed(2)})%`}
            />
          </label>

          <label className="col s3">
            <p>Salario Liquido</p>
            <input
              id="salarioLiquido"
              type="text"
              readOnly
              value={`R$ ${netSalary} (${(netSalary/this.state.salarioBruto * 100).toFixed(2)})%`}
            />
          </label>
        </div>
      </div>
    );
  }
}
