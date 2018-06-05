var siare = angular.module("siare", ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);

siare.run(function($rootScope) {
	
	$rootScope.tela_estagio = false;
	
	$rootScope.tela_raeno = false;
	
});

siare.controller("EstagioCtrl", function($rootScope, $scope) {
	
	const DADOS_ESTAGIO = "dados_estagio";
	const CONCEDENTE = "concedente";
	const PAE = "pae";
	const INFORMACOES_PESSOAIS = "informacoes_pessoais";
	
	$scope.menuAtivo = DADOS_ESTAGIO;
	
	$scope.estagio = {};
	$scope.estagio.disciplinas = [];
	
	$scope.disciplinas = [
		'Banco de Dados I',
		'Banco de Dados II',
		'Banco de Dados III',
		'Engenharia de Software',
		'Engenharia de Usabilidade',
		'Desenvolvimento de Sistemas Orientados a Objetos I',
		'Desenvolvimento de Sistemas Orientados a Objetos II',
	];
	
	$scope.professores = [
		{nome:'João de Albuquerque', departamento:'INE'},
		{nome:'Madalena Suzana Aguiar', departamento:'INE'},
		{nome:'Nelson Mandela da Silva', departamento:'INE'},
		{nome:'Felippe Freire', departamento:'INE'}
	];
	
	$scope.navegar = function(evento, aba) {
		var destino = aba;
		if (evento) {
			destino = evento.target.id;
		}
		$scope.menuAtivo = destino;
	}
	
	$scope.selecionarDisciplina = function($item, $model, $label, $event) {
		$scope.estagio.disciplinas.push($item);
		$scope.disciplina = "";
	}
	
	$scope.removerDisciplina = function($index) {
		$scope.estagio.disciplinas.splice($index, 1);
	}
	
	$scope.selecionarOrientador = function($item, $model, $label, $event) {
		$scope.departamentoOrientador = $item.departamento;
	}
	
});

siare.controller("RaenoCtrl", function($rootScope, $scope) {
	
});