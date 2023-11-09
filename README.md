# Manager Gas Station

Projeto feito para gerenciamento de motorista ao abastecer seu veículo!

## 🚀 Começando

`git clone git@github.com:Joas-Assuncao/manager-gas-station.git`

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
node 16.20.2
nest 10.2.1
```

### 🔧 Instalação

```
npm i && npm i -g @nestjs/cli
npm run start:dev
```

Deverá aparecer em seu terminal:

```
[Nest] 26196  - 09/11/2023 09:01:22     LOG [NestFactory] Starting Nest application...
[Nest] 26196  - 09/11/2023 09:01:22     LOG [InstanceLoader] AppModule dependencies initialized +88ms
[Nest] 26196  - 09/11/2023 09:01:22     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 26196  - 09/11/2023 09:01:22     LOG [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 26196  - 09/11/2023 09:01:22     LOG [InstanceLoader] ConfigModule dependencies initialized +1ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +259ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [InstanceLoader] DriverModule dependencies initialized +3ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [InstanceLoader] RefuelingModule dependencies initialized +0ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RoutesResolver] DriverController {/drivers}: +79ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/drivers, GET} route +5ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/drivers/withRefuelings, GET} route +1ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/drivers/:id, GET} route +2ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/drivers, POST} route +2ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RoutesResolver] RefuelingController {/refuelings}: +1ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/refuelings/:driverId, GET} route +2ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [RouterExplorer] Mapped {/refuelings/:driverId, POST} route +3ms
[Nest] 26196  - 09/11/2023 09:01:23     LOG [NestApplication] Nest application successfully started +6ms
```

Uma das coisas que é interessante para a DX (Dev Experience) do NestJS, ele retorna todos os endpoints da aplicação no terminal assim que inicia, como vocês podem ver acima!

Ponto importante para salvamento de refuelings: FuelType tem 3 tipos de combustíveis, cada um com seu número:

```
  DIESEL = 1,
  GASOLINE = 2,
  ETANOL = 3,
```

Caso seja enviado algum número a mais, dará erro (que já está tratado).

## ⚙️ Executando os testes

`npm run test`

### 🔩 Analise os testes de ponta a ponta

Explique que eles verificam esses testes e porquê.

```
Dar exemplos
```

## 🛠️ Construído com

- [NestJS](https://docs.nestjs.com/) - O framework usado
- [NPM](https://www.npmjs.com/) - Gerenciador de Dependência
- [TypeORM](https://typeorm.io/) - ORM utilizado
- [Jest](https://jestjs.io/) - ORM utilizado
