var siare = angular.module("siare", ['ngAnimate', 'ngSanitize', 'ui.bootstrap', 'ui.mask']);

siare.run(function($rootScope) {
	
	$rootScope.tela_estagio = false;
	
	$rootScope.tela_raeno = false;
	
});

siare.controller("EstagioCtrl", function($rootScope, $scope) {
	
	const DADOS_ESTAGIO = "dados_estagio";

	$scope.dadosSalvos = false;
	$scope.menuAtivo = DADOS_ESTAGIO;
	$scope.ajudaSupervisor          = 'Nome do profissional responsável por supervisionar suas atividades de estágio na empresa concedente';
    $scope.ajudaLocal               = 'Local ou setor da empresa onde você realizará seu estágio';
    $scope.ajudaAgenteIntegracao    = 'São empresas ou instituições que auxiliam os estudantes a encontrar estágio';
    $scope.ajudaProfOrientador      = 'Você deve indicar um professor da UFSC que será responsável por orientá-lo no seu estágio';
    $scope.ajudaDisciplinas         = 'Indique uma ou mais disciplinas relacionadas com as atividades do seu estágio';

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

	$scope.init = function() {
        $scope.estagio = {};
        $scope.estagio.obrigatorio = 'nao';
        $scope.estagio.na_ufsc = 'sim';
        $scope.estagio.disciplinas = [];
	}
	
	$scope.navegar = function(evento, aba) {
		var destino = aba;
		if (evento) {
			destino = evento.target.id;
		}
		$scope.menuAtivo = destino;
	}
	
	$scope.selecionarDisciplina = function($item, $model, $label, $event) {
        $scope.formEstagio.disciplinas.$setValidity("required", true);
		$scope.estagio.disciplinas.push($item);
		$scope.disciplina = "";
	}
	
	$scope.removerDisciplina = function($index) {
		$scope.estagio.disciplinas.splice($index, 1);
        if ($scope.estagio.disciplinas.length ===  0) {
            $scope.formEstagio.disciplinas.$setValidity("required", false);
        }
	}
	
	$scope.selecionarOrientador = function($item, $model, $label, $event) {
		$scope.departamentoOrientador = $item.departamento;
	}

	$scope.salvar = function(dados) {
		$scope.dadosSalvos = angular.copy(dados);
		//$scope.init();
	}

	$scope.salvarEEnviar = function(dados) {
        if ($scope.estagio.disciplinas.length ===  0) {
            $scope.formEstagio.disciplinas.$setValidity("required", false);
        }
	    $scope.formEstagio.$setSubmitted();
	    if ($scope.formEstagio.$valid) {
	        $scope.dadosEnviados = true;
        }
    }
	
});

siare.controller("RaenoCtrl", function($rootScope, $scope) {
	
});