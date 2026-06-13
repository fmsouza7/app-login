README - Pipeline de Execução de Testes Unitários

Este documento descreve detalhadamente as ações realizadas para a criação de um arquivo de pipeline .yaml utilizado no GitHub Actions para execução de testes unitários, geração de relatórios e publicação dos resultados.

1. Executado o comando "git clone https://github.com/fmsouza7/app-login.git"
	- Clona o projeto appLogin criado no modulo 03 para a máquina fisica.
	
2. Executado o comando "npm init -y" 
	- Inicia o Projeto
	- Cria o arquivo package.json
	- Alterado o "type" para module
	
3. Executado o comando "yarn add --dev mocha chai"
	- Cria a pasta node_modules
	- Cria arquivo yarn.json 
	- Cria as dependências no arquivo package.json
	
4. Executado o comando "yarn add --dev mocha mochawesome mocha-junit-reporter mocha-multi-reporters"
	- Cria as dependências no arquivo package.json
	- Alterado o "scripts > test" para "scripts > "test:reports": "mocha --reporter mocha-multi-reporters --reporter-options configFile=reporter-config.json"
		- Foi preciso alterar para executar os Testes Unitários e Geração de relatórios em um só comando
	- Foi preciso criar também o arquivo "reporter-config.json" para ser usado no comando unico
	
5. Criada as pastas ".github/workflows"
	- Estas pastas são necessárias para criação dos arquivos de pipeline e para que o github consiga ler.
	
6. Criado o arquivo "01-TestesUnitarios-exec.yaml"
	NOME DA PIPELINE
	- Define o nome da pipeline que será exibida na aba Actions do github

		name: 'Execução Testes Unitários'
	_______________________________________________________________________________________________________________________________________________
	GATILHOS
	- Define quando a pipeline será executada
		workflow_dispatch: permite execução manual via botão "Run workflow".
		schedule: executa automaticamente conforme cron. '*/30 * * * *' → roda a cada 30 minutos.
		push: dispara automaticamente quando há um push na branch main.

		on:
			workflow_dispatch:
			schedule:
				- cron: '*/30 * * * *'
			push:
				branches:
					- main
	_______________________________________________________________________________________________________________________________________________
	JOBS
	- Define o conjunto de tarefas que a pipeline executa
		unidade: nome do job.
		runs-on: define o ambiente (máquina virtual). Aqui é ubuntu-latest.
		
		jobs:
			unidade:
				runs-on: ubuntu-latest
	_______________________________________________________________________________________________________________________________________________	
	STEPS
	- Define os passos que srão realizados para executar a pipeline
	
		1.Checkout do código
			Baixa o código do repositório para dentro da máquina virtual da pipeline (clone).
			
			- uses: actions/checkout@v4
		
		2.Instalação do Node.js
			Instala e configura o Node.js na versão mais recente.
			
			- uses: actions/setup-node@v4
			  with:
				node-version: latest
				
		3.Instalação do Yarn
			Instala o Yarn globalmente usando npm.
			
			- name: Instalando Yarn
			  run: npm install -g yarn
			  
		4.Instalação das dependências
			Instala todas as dependências listadas no package.json.
			
			- name: Instalando dependências
			  run: yarn
			  
		5.Execução de testes unitários
			Executa os testes unitários com o script test:reports.
			Esse script deve estar configurado para usar mocha-multi-reporters e gerar relatórios Mochawesome (HTML) e JUnit (XML).
			O comando test:reports é um alias, o comando principal fica dentro do package.json
			
			- name: Executando testes unitários
			  run: yarn test:reports
		
		6.Upload de Relatórios
			Relatório Mochawesome
				Salva o relatório Mochawesome como artefato.
				if: ${{ always() }} garante que o upload ocorra mesmo se os testes falharem.
				O artefato pode ser baixado na aba Actions.
				
				- name: Salvando Relatório Mochawesome
				  uses: actions/upload-artifact@v4
				  if: ${{ always() }}
				  with:
					name: Relatório Mochawesome
					path: ./reports/mochawesome/
			
			Relatório JUnit
				Salva o relatório JUnit em formato XML como artefato.
				Também disponível para download na aba Actions.
			
				- name: Salvando Relatório JUnit
				  uses: actions/upload-artifact@v4
				  if: ${{ always() }}
				  with:
					name: Relatório JUnit
					path: ./reports/junit/test-results.xml
					
		7.Publicação do Relatório JUnit na UI
			Usa a ação dorny/test-reporter@v3 para exibir os resultados dos testes diretamente na interface do GitHub Actions.
			Permite visualizar quais testes passaram ou falharam sem precisar baixar artefatos.
			
			- name: Publicar Relatório JUnit na UI do GitHub Actions
			  uses: dorny/test-reporter@v3
			  if: ${{ always() }}
			  with:
				name: Testes Unitários
				path: reports/junit/test-results.xml
				reporter: java-junit

7. Após realizar o push para o Github a pipeline foi executada automaticamente com sucesso.
8. Após clicar em Run workflow a pipeline foi executada com sucesso.
9. Após um período a pipeline foi executada pelo agendamento com sucesso.