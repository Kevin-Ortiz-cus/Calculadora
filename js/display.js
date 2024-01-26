class Display {
    constructor(displayActual, displayAnterior){
        this.displayActual = displayActual;
        this.displayAnterior = displayAnterior;
        this.valueDisplayActual = '';
        this.valueDiplayAnterio = '';
        this.calculadora = new Calculadora();
    }
    agregarNumero(myNumber){
        if(this.valueDisplayActual.includes('.') || this.valueDisplayActual === ''){
            if(myNumber === '.'){
                myNumber = '';
            }
        } 
        if(this.valueDisplayActual === ''){
            if(myNumber === '0'){
                myNumber = '';
            }
        }
        this.valueDisplayActual = this.valueDisplayActual + myNumber;
        this.imprimirActual();   
    }

    imprimirActual(){
        this.displayActual.textContent = this.valueDisplayActual;
    }

    operar(operador){
        if(this.valueDisplayActual !== ''){ 
            let guardarActual = this.valueDisplayActual;
            this.valueDiplayAnterio = parseFloat(guardarActual);
            this.imprimirAnterior(operador);
        }
        else if(this.valueDiplayAnterio !== '' && this.valueDisplayActual === ''){
            this.displayAnterior.textContent = this.valueDiplayAnterio + ' ' + operador;
        }
    }

    imprimirAnterior(operador){
        this.displayAnterior.textContent = this.valueDiplayAnterio + ' ' + operador;
        this.valueDisplayActual = '';
        this.displayActual.textContent = '';
    }

    calcular(operador){
        if(operador === 'x'){
            return this.calculadora.multiplicar(parseFloat(this.valueDiplayAnterio), parseFloat(this.valueDisplayActual));
        }
        else if(operador === '+'){
            return this.calculadora.sumar(parseFloat(this.valueDiplayAnterio), parseFloat(this.valueDisplayActual));
        }
        else if(operador === '-'){
            return this.calculadora.restar(parseFloat(this.valueDiplayAnterio), parseFloat(this.valueDisplayActual));
        }
        else if(operador === '%'){
            return this.calculadora.dividir(parseFloat(this.valueDiplayAnterio), parseFloat(this.valueDisplayActual));
        }
    }

    resultado(operador, signo){
        if(operador === '=' && this.valueDiplayAnterio !== '' && this.valueDisplayActual !== ''){
            this.valueDiplayAnterio = this.calcular(signo);
            console.log(this.valueDisplayActual);
            this.displayAnterior.textContent = this.valueDiplayAnterio;
        }
        
        this.valueDisplayActual = '';
        this.displayActual.textContent = '';
    }

    resetearTodo(){
        this.valueDisplayActual = '';
        this.valueDiplayAnterio = '';
        this.displayActual.textContent = '';
        this.displayAnterior.textContent = '';
    }
}