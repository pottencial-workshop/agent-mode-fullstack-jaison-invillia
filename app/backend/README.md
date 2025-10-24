# Products API (Mock)

API simples em Node.js + Express que expõe produtos mockados.

## Endpoints
GET /products -> lista todos os produtos
GET /health   -> verificação de saúde

## Scripts
npm run dev   # desenvolvimento com autoreload
npm start     # execução simples
npm test      # testes com Jest

## Como rodar
```bash
npm install --prefix app/backend
npm run dev --prefix app/backend
# Em outro terminal
curl http://localhost:3000/products
```

## Testar
```bash
npm test --prefix app/backend
```

## Estrutura
```
app/backend/package.json
app/backend/src/server.js
app/backend/src/products/mock.js
app/backend/src/products/routes.js
app/backend/tests/products.test.js
```

## Próximos Passos sugeridos
- Paginação (?page=&pageSize=)
- Filtros de preço (?minPrice=&maxPrice=)
- POST /products com validação
- Documentação OpenAPI/Swagger
- Middleware de erros centralizado

## Observações
CORS está liberado para todas as origens conforme instrução. Dados residem somente em memória (mock) e são perdidos a cada reinício.
