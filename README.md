# Lista de Tarefas

Aplicação simples de lista de tarefas desenvolvida com HTML, CSS e JavaScript puro.

## Funcionalidades

- Adicionar novas tarefas pelo botão ou pela tecla `Enter`.
- Marcar tarefas como concluídas.
- Excluir tarefas.
- Manter as tarefas salvas no navegador usando `localStorage`.
- Impedir o cadastro de tarefas vazias.

## Tecnologias

- HTML5
- CSS3
- JavaScript
- `localStorage` do navegador

## Estrutura do projeto

```text
To_Do_List_Web/
├── index.html   # Estrutura da página
├── style.css    # Estilos da aplicação
├── script.js    # Lógica das tarefas
└── README.md    # Documentação do projeto
```

## Como executar

1. Baixe ou clone este projeto.
2. Abra o arquivo `index.html` em um navegador.
3. Digite uma tarefa e clique no botão de adicionar ou pressione `Enter`.

Também é possível usar a extensão **Live Server** no VS Code para abrir o projeto durante o desenvolvimento.

## Como funciona

As tarefas são armazenadas como objetos JavaScript com as propriedades:

```javascript
{
  id: 123456789,
  text: "Estudar JavaScript",
  completed: false
}
```

Sempre que uma tarefa é adicionada, concluída ou excluída, a lista é atualizada e salva no `localStorage`. Assim, as tarefas continuam disponíveis quando a página é aberta novamente no mesmo navegador.

## Melhorias futuras

- Editar tarefas existentes.
- Filtrar tarefas pendentes e concluídas.
- Adicionar prazo e prioridade.
- Criar botão para limpar todas as tarefas concluídas.
