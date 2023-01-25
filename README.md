# @nilot-utils

Várias módulos de utils, customizado

### Tecnologias utilizadas

- Node.js
- Typescript
- Eslint
- Prettier
- FakerBr
- Tsup
- Tsx
- Vitest

#### onlyNumbers

```typescript
/**
 * @description Deve remover todos os caracteres especiais, permanecendo somente números
 */
import { onlyNumbers } from 'nilot-utils');

const result = onlyNumbers('132.839.830-70');

/**
 *  O resultado dessa execução retornará uma estrutura dessa forma:
 *  String result = '13283983070';
 */
```

#### renameObjectToCamelCase

```typescript
/**
 * @description Deve renomear todas as chaves de objeto para o formato camelCase
 */
import { renameObjectToCamelCase } from 'nilot-utils');

const result = renameObjectToCamelCase({full_name: 'John Smith'});

/**
 *  O resultado dessa execução retornará uma estrutura dessa forma:
 *  Object { fullName: 'John Smith' }
 */
```

### Contribution guidelines

- Transformação de todas as chaves objecto em formato camelCase ✓

### Colaboradores

- Danilo Ramon <daniloras84@gmail.com>
