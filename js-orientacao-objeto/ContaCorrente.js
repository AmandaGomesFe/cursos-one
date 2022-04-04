import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    static numeroDeContas = 0
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
        
    }
    
    get cliente(){
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }
    _saldo = 0;

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        contaCorrente.numeroDeContas += 1;
    }
    sacar(valor){
      if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }  
    }

    depositar(valor) {
        if(valor <= 0){
           return;
        }
        
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        conta.cidade = "São Paulo";
        valor = 20
    }
}