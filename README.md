# Hardhat template

Solidity version: **0.8.0**

Packages:

- [x] Hardhat OZ DeployProxy Scripts

- [x] Prettier - Solidity

- [x] Prettier - TypeScript

- [x] Lint - Solidity

- [x] Lint - TypeScript

- [x] Chai assertion

- [x] Mocha test runner

- [x] CI/CD ready - automated linters and test pipelines

- [x] Security - symbolic execution (CI/CD python pipeline)

- [x] Test coverage - cobertura xml (CI/CD)

- [x] Test coverage - HTML raport (CI/CD, local)

- [ ] OZ Upgradeable 4.x - not installed

Try running some of the following tasks:

```shell

npx hardhat compile

npx hardhat clean

npx hardhat test

npx hardhat node

npx hardhat help

REPORT_GAS=true npx hardhat test

npx hardhat coverage

npx hardhat run scripts/deploy.ts

TS_NODE_FILES=true npx ts-node scripts/deploy.ts

npx eslint '**/*.{js,ts}'

npx eslint '**/*.{js,ts}' --fix

npx prettier '**/*.{json,sol,md}' --check

npx prettier '**/*.{json,sol,md}' --write

npx solhint 'contracts/**/*.sol'

npx solhint 'contracts/**/*.sol' --fix

```

# Performance optimizations

For faster runs of your tests and scripts, consider skipping ts-node's type checking by setting the environment variable `TS_NODE_TRANSPILE_ONLY` to `1` in hardhat's environment. For more details see [the documentation](https://hardhat.org/guides/typescript.html#performance-optimizations).
