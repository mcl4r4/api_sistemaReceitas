## Sprint 1 - Módulo Chef

### Funcionalidades

- Cadastro de chefs
- Listagem de chefs (com paginação)
- Busca por chef específico
- Atualização de dados do chef
- Remoção de chef

###   Estrutura do Modelo Chef
{
  "id": "string/number",
  "nome": "string",
  "biografia": "string",
  "especialidade": "string",
  "experiencia": "number",
  "nacionalidade": "string",
  "createdAt": "datetime",
  "updatedAt": "datetime"
}



## Sprint 2 - Módulo Receitas

### Funcionalidades

- Cadastro de receitas vinculadas a chefs
- Listagem de receitas (com filtros e paginação)
- Busca por receita específica
- Atualização de dados da receita
- Remoção de receita
- Relacionamento Many-to-Many com chefs

### Estrutura do Modelo Receita
{
  "id": "string/number",
  "titulo": "string",
  "descricao": "string",
  "ingredientes": "text",
  "modoPreparo": "text",
  "tempoPreparo": "number",
  "porcoes": "number",
  "dificuldade": "string",
  "chefs": ["array of chef ids"],
  "createdAt": "datetime",
  "updatedAt": "datetime"
}