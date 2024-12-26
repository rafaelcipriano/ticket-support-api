# API de ticket de suporte

## Sobre
API para gerenciar ticket de suporte técnico, permitindo criar um ticket solicitando suporte, atualizar as informações do ticket, listar os tickets podendo filtrar pelo status e atualizar o status de um ticket para fechado.

## Rotas
* __Criar ticket__:

    Cria um novo ticket de suporte.

    __Método__: POST

    __URL__: `/tickets`

    __Dados__:

      - `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)

      - `description` (string, obrigatório): Descrição do problema

      - `user_name` (string, obrigatório): nome do usuário que está criando o ticket

* __Obter ticket__:
    __Método__: GET

    __URL__: /tickets

    __Descrição__: Obtém uma lista de todos os tickets de suporte.

    __Parâmetro de Consulta (Query Parameters)__:

      - `status` (string, opcional): Filtra os tickets pelo status ("open" ou closed)

* __Atualizar ticket__:
    __Método__: PUT

    __URL__: `/tickets/:id`

    __Descrição__: Atualiza as informações de um ticket específico.

    __Parâmetros de rota__:

      - `id` (UUID, obrigatório): ID do ticket.

    __Parâmetros no Corpo (JSON)__:

      - `equipment` (string, obrigatório): Nome do equipamento (exemplo: computador)

      - `desciption`(string, obrigatório): Descrição do problema.

      - `user_name` não altera

* __Fechar ticket__:

    __Método__: PATCH

    __URL__: `/tickets/:id/status`

    __Descrição__: Atualiza as informações de um ticket específico.

    __Parâmetros de Rota__:

      - `id` (UUID, obrigatório): ID do ticket.

* __Excluir ticket__:

    __Método__: DELETE

    __URL__: `/tickets/:id`

    __Descrição__: Exclui um ticket específico pelo seu ID

    __Parâmetros de Rota__:
    
      - `id` (UUID, obrigatório): ID do ticket.

## Como inicializar o projeto

Abra o terminal e escreva o comando `npm run dev`.

Utilize o INSOMNIA ou o POSTMAN para conseguir executar cada rota.
