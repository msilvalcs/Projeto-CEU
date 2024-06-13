# Especificações do Projeto

O CEU é um projeto de aplicação na web de fácil entendimento visando facilitar a busca e a divulgação por projetos de extensão curricular. 

## Personas

Valentina Barone tem 22 anos e está começando sua graduação. Valentina descobriu que para concluir sua graduação ela precisará de horas em projetos de extensão curricular, porém ela não sabe como, nem onde encontrar.

João Carlos tem 47 anos, trabalha na área de TI há 10 anos e no momento decidiu tirar seu diploma em uma universidade. Ele havia se cadastrado em um projeto de extensão na área da robótica, porém ele não conseguiu adaptar-se e deseja trocar para um projeto mais adequado a si.

Pedro Felipe está no 7° período da sua faculdade e encontra-se em um momento sufocante, onde não consegue dar continuidade em seu projeto de extensão, decide sair de sua atividade, para conseguir focar nos estudos.

Vitor Ferreira acabou de completar 28 anos e está em seu último período na faculdade de Sistema de Informações. Ele já concluiu seus projetos de extensão, mas gosta de observar os projetos com o intuito de estar mais inteirado na sociedade e no mercado de trabalho.

Vitória Régia é coordenadora de um projeto em uma escola do fundamental 1. Seu projeto consiste em utilizar atividades lúdicas nas aulas de informática, precisa de uma plataforma para ampliar o alcance do seu projeto e consequentemente encontrar mais estudantes para auxiliá-la.

Suzete Alvarenga é uma professora de informática do ensino médio. Ela é responsável por ensinar programação, desenvolvimento de jogos e design de interfaces para seus alunos. Suzete é apaixonado por educação e acredita que a tecnologia pode ser uma ferramenta poderosa para ajudar a transformar a vida das pessoas. Suzete tem um projeto de tecnologia cadastrado, precisa de uma aplicação para gerenciá-lo melhor e acompanhar seu progresso.

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|João Carlos| Editar sua atividade no projeto | Trocar o projeto de extensão |
|Valentina Barone| Encontrar uma atividade | Ingressar em um projeto de extensão |
|Pedro Felipe| Editar sua atividade no projeto| Desistir de um projeto de extensão |
|Vitor Ferreira| Acessar a aplicação | Procurar projetos de extensão |
|Vitória Régia| Permissão para criar | Encontrar universitários |
|Suzete Alvarenga| Permissão para supervisionar | Gerenciar com mais eficiência |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição dos requisito de login/cadastro/perfil  | Prioridade |  Responsável |
|------|-----------------------------------------|----| ----|
|RF1-001|Área de cadastro com opções de campus da PUC Minas.| ALTA | A definir |
|RF1-002|Área de cadastro do universitário com validação de matrícula.| ALTA | A definir |
|RF1-003|Área de login com usuario e senha.| ALTA | A definir |
|RF1-004|Área de login com opção para criação cadastro.| ALTA | A definir |
|RF1-005|Área de login com opção de redefinição de senha.| ALTA | A definir |
|RF1-006|Área de cadastro com informação da data de nascimento. (apenas numerais)| ALTA | A definir |
|RF1-007|Informar se é universitário ou coordenador de projeto. | ALTA | A definir |
|RF1-008|Área de cadastro com validação de matrícula.| ALTA | A definir |
|RF1-009|Criação de perfil com informaçoes academicas e area de interesse. | ALTA | A definir |


|ID    | Descrição dos requisito para gestão de projetos  | Prioridade |  Responsável |
|------|-----------------------------------------|----| ----|
|RF2-001|Solicitar cadastro do projeto na aplicação informando o titulo do projeto, a área de atuação e breve descrição.  | ALTA | A definir |
|RF2-002|Area para anexo do arquivo de validação do projeto de extensão emitido pelo CEP PUC Minas.  | ALTA | A definir |
|RF2-003|Ter a autonomia de aceitar, recusar ou excluir universitários do projeto.  | ALTA | A definir |
|RF2-004|Complementação do cadastro do projeto pós aprovação informando tags, publico alvo, localização e periodo de execução.  | ALTA | A definir |
|RF2-005|Poder editar o projeto informando as especificações.  | MÉDIO | A definir |
|RF2-006|Receber notificação quando houver aplicação em seu projeto. | MÉDIO | A definir |
|RF2-007|Confirmação de cadastro do projeto por e-mail.  | MÉDIO | A definir |


|ID    | Descrição dos requisito para busca, visualização e aplicação dos projetos  | Prioridade |  Responsável |
|------|-----------------------------------------|----| ----|
|RF3-001|Permitir que o usuario se inscreva em projetos de extensão. | ALTA | A definir |
|RF3-002|Colocar filtros de horario e area de estudo que facilite a busca do usuário. | ALTA | A definir |
|RF3-003|Espaço para retornar a área HOME.| MÉDIA | A definir |
|RF3-004|Notificaçao de novos projetos na area de interresse. | BAIXA | A definir |
|RF3-005|Permitir que o usuario favorite seus projetos de extensão. | BAIXA | A definir |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001|Espaço com informações sobre o grupo e o projeto| ALTA |
|RNF-002|O sistema deverá garantir a segurança dos dados do usuário. | ALTA |
|RNF-003|O sistema deve ser responsivo para diferentes tamanhos/resoluções de telas.  | ALTA  |
|RNF-004|Deve estar disponível 24h por dia.| ALTA |
|RNF-005|Deve ser compatível em todos os sistemas operacionais/navegadores. | ALTA  |
|RNF-006|Deve permitir a correção de possíveis falhas e a inclusão de novas funcionalidades. | ALTA  |
|RNF-007|Interface dinâmica e intuitiva.  | MÉDIA |
|RNF-008|Layouts e cores pré-definidos de acordo com a área de atuação.  | MÉDIA |
|RNF-009|Ter modo noturno. | BAIXA |

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01|O projeto deverá ser entregue até o final do semestre |
|02|O Projeto tera que ter acesso gratuito |
|03|Restrição para cursos de tecnologia da informação|
|04|Restrito a acadêmicos da PUC Minas|
