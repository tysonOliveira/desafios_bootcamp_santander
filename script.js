/*const url = 'aluracord-matrix'; 

fetch(`https://api.github.com/repos/tysonOliveira/${url}`)
.then(response => response.json())
.then(user => {
  console.log(user)
})

class Base {
  static baseStaticField = 950;
  static baseMethod() {
    return 10;
  }
}

class Extended extends Base {
  static extendedField = super.baseMethod(); // 10
  static extendedStaticField = super.baseStaticField + this.extendedField; // 90
}

console.log(Extended.extendedStaticField)*/

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  //getter
  get saldo() {
    return this._saldo;
  }

  set saldo(val) {
    this._saldo = val;
  }

  sacar(val) {
    if(val > this._saldo){
      return "O valor supera o saldo disponível";
    }
    
    this._saldo = this._saldo - val; 
    
    return this._saldo;
  }
  
  depositar(val) {
    this._saldo += val;

    return this._saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }

  set cartaoCredito(val) {
    this._cartaoCredito = val;
  }

} 

class ContaPupanca extends ContaBancaria {
  constructor() {
    super();
    this.tipo = 'poupança';
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor() {
    super();
    this.tipo = 'universitaria';
  }

  sacar(val) {
    if (val > 500) {
      return 'Operação negada!';
    }

    this._saldo = this._saldo - val;
  }
}

