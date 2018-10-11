function Carro(){
	var marca = "Sem marca";
	var modelo = "Sem modelo";

	this.setMarca = SetMarca;
	this.setModelo = SetModelo;
	this.showMarca = DisplayMarca;
	this.showMmodelo = DisplayModelo;

	function DisplayMarca(){
		console.log(this.marca);
	}

	function SetMarca(marca){
		this.marca = marca;
	}

	function DisplayModelo(){
		console.log(this.modelo);
	}

	function SetModelo(modelo){
		this.modelo = modelo;
	}
}

var carro = new Carro();

carro.setMarca("Ford");
carro.setModelo("Ka");
carro.showMarca();
carro.showMmodelo();