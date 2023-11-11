# Gas Station Manager

Projeto feito para gerenciamento de motorista ao abastecer seu veículo!

## 🚀 Começando

`git clone git@github.com:Joas-Assuncao/gas-station-manager-api.git`

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Node 18.17.1
Nest 10.2.1
Docker configurado
```

### 🔧 Instalação

```
cd postgresdb && docker-compose up -d
cd .. && npm i && npm i -g @nestjs/cli
npm run start:dev
```

Deverá aparecer em seu terminal:

```
[Nest] 18468  - 11/11/2023, 09:16:21     LOG [NestFactory] Starting Nest application...
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] AppModule dependencies initialized +685ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +751ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] DriverModule dependencies initialized +3ms
[Nest] 18468  - 11/11/2023, 09:16:22     LOG [InstanceLoader] RefuelingModule dependencies initialized +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RoutesResolver] DriverController {/drivers}: +825ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/drivers, GET} route +7ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/drivers/withRefuelings, GET} route +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/drivers/:id, GET} route +2ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/drivers, POST} route +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/drivers/:id, PUT} route +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RoutesResolver] RefuelingController {/refuelings}: +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/refuelings/:driverId, GET} route +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [RouterExplorer] Mapped {/refuelings/:driverId, POST} route +1ms
[Nest] 18468  - 11/11/2023, 09:16:23     LOG [NestApplication] Nest application successfully started +7ms
```

Uma das coisas que é interessante para a DX (Dev Experience) do NestJS, ele retorna todos os endpoints da aplicação no terminal assim que inicia, como vocês podem ver acima!

Função de cada endpoint:

- /drivers (GET) - Retorna uma lista de motoristas
- /drivers/withRefuelings (GET) - Retorna uma lista de motorista com um JOIN com abastecimentos
- /drivers/:id (GET) - Retorna apenas 1 motorista (não utilizo no frontend, mas quis adicionar)
- /drivers (POST) - Cria um motorista
- /drivers/:id (PUT) - Edita um motorista
- /refuelings/:driverId (GET) - Busca abastecimentos de um motorista
- /refuelings/:driverId (POST) - Cria um abastecimento

Coloquei os campos name e email no modelo de motorista pois queria um identificador (name) e uma chave que fosse única para não ter dados duplicados (email)

## 🚨 Atenção

Ponto importante para salvamento de refuelings: FuelType tem 3 tipos de combustíveis, cada um com seu número:

```
  DIESEL = 1,
  GASOLINE = 2,
  ETHANOL = 3,
```

Caso seja enviado algum número a mais, dará erro (que já está tratado).

## ⚙️ Executando os testes

`npm run test`

### 🔩 Analise os testes de ponta a ponta

Testei os métodos dos serviços, para ver se estão retornando os dados certos e se os erros estão sendo tratados, como planejado.

## 🛠️ Construído com

- [NestJS](https://docs.nestjs.com/) - O framework usado
- [NPM](https://www.npmjs.com/) - Gerenciador de Dependência
- [TypeORM](https://typeorm.io/) - ORM utilizado
- [Jest](https://jestjs.io/) - ORM utilizado
