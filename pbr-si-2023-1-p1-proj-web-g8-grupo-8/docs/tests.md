<<<<<<< HEAD
# Plano de Testes de Software

Descrição geral do plano de teste, incluindo os objetivos, escopo e abordagem adotada pelos desenvolvedores.
Detalhamento dos requisitos funcionais e não funcionais testados pelos desenvolvedores.
Definição dos cenários de teste e critérios de aceitação utilizados pelos desenvolvedores.
Recursos utilizados pelos desenvolvedores durante a execução dos testes.
Registro dos Testes de Software:

Documentação dos cenários de teste e casos de teste utilizados pelos desenvolvedores.
Registro dos resultados obtidos pelos desenvolvedores durante a execução dos testes, incluindo os resultados esperados e os resultados reais.
Registros de incidentes, bugs ou problemas encontrados pelos desenvolvedores durante os testes.
Evidências, como capturas de tela ou logs, que comprovem os resultados obtidos pelos desenvolvedores.
Avaliação dos Testes de Software:

Análise dos resultados dos testes realizados pelos desenvolvedores, verificando se os requisitos foram atendidos e se os casos de teste foram executados corretamente.
Conclusões e considerações dos desenvolvedores sobre a conformidade do software com os requisitos funcionais e não funcionais do sistema.
Recomendações dos desenvolvedores para correções ou melhorias com base nos resultados dos testes.
Cenários de Teste de Usabilidade:

Descrição dos cenários de teste de usabilidade que foram abordados pelos desenvolvedores durante os testes.
Detalhamento das tarefas realizadas pelos desenvolvedores nos cenários de teste de usabilidade.
Observações e feedback dos desenvolvedores sobre a qualidade do uso do sistema.
Registro dos Testes de Usabilidade:

Documentação dos resultados obtidos pelos desenvolvedores durante os testes de usabilidade.
Registro das observações e feedback dos desenvolvedores sobre a usabilidade do sistema.
Evidências, como gravações de vídeo ou registros de áudio, que comprovem as interações dos desenvolvedores com o sistema.
Avaliação dos Testes de Usabilidade:

Análise dos resultados dos testes de usabilidade realizados pelos desenvolvedores, identificando pontos fortes e fracos do sistema em relação à usabilidade.
Conclusões e considerações dos desenvolvedores sobre a qualidade do uso do sistema pelo público-alvo.
Recomendações dos desenvolvedores para melhorias de usabilidade com base nos resultados dos testes.
Essa abordagem permite que os desenvolvedores registrem os testes realizados e as conclusões alcançadas com base nos resultados obtidos. Lembre-se de adaptar essas seções de acordo com as informações específicas do seu projeto e as conclusões alcançadas pelos desenvolvedores.

# Registro de Testes de Software

**Caso de Teste** | **CT01 - Área de cadastro com opções de campus da PUC Minas**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário seleciona uma opção de campus da PUC Minas.<br>3) A aplicação exibe as opções de campus disponíveis.
**Requisitos associados** | RF1-001
**Resultado esperado** | Exibição das opções de campus da PUC Minas.
**Dados de entrada** | Seleção de uma opção de campus válida.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT02 - Área de cadastro do universitário com validação de matrícula**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário insere o número de matrícula.<br>3) A aplicação valida a matrícula informada.
**Requisitos associados** | RF1-002
**Resultado esperado** | Validação da matrícula do universitário.
**Dados de entrada** | Número de matrícula válido.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT03 - Área de login com usuário e senha**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de login.<br>2) O usuário informa seu nome de usuário e senha.<br>3) A aplicação verifica a autenticidade das informações.
**Requisitos associados** | RF1-003
**Resultado esperado** | Verificação da autenticidade do usuário e senha.
**Dados de entrada** | Nome de usuário e senha válidos.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT04 - Área de login com opção para criação de cadastro**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de login.<br>2) O usuário seleciona a opção de criação de cadastro.<br>3) A aplicação direciona o usuário para a área de cadastro.
**Requisitos associados** | RF1-004
**Resultado esperado** | Redirecionamento do usuário para a área de cadastro.
**Dados de entrada** | N/A (Seleção da opção de criação de cadastro).
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT05 - Área de login com opção de redefinição de senha**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de login.<br>2) O usuário seleciona a opção de redefinição de senha.<br>3) A aplicação fornece um processo para redefinir a senha do usuário.
**Requisitos associados** | RF1-005
**Resultado esperado** | Fornecimento de um processo para redefinir a senha do usuário.


**Dados de entrada** | N/A (Seleção da opção de redefinição de senha).
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT06 - Área de cadastro com informação da data de nascimento (apenas numerais)**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário insere sua data de nascimento no formato numérico.<br>3) A aplicação aceita a data de nascimento no formato numérico.
**Requisitos associados** | RF1-006
**Resultado esperado** | Aceitação da data de nascimento no formato numérico.
**Dados de entrada** | Data de nascimento válida no formato numérico.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT07 - Informar se é universitário ou coordenador de projeto**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário seleciona se é universitário ou coordenador de projeto.<br>3) A aplicação registra a informação selecionada pelo usuário.
**Requisitos associados** | RF1-007
**Resultado esperado** | Registro da informação sobre ser universitário ou coordenador de projeto.
**Dados de entrada** | Seleção válida de ser universitário ou coordenador de projeto.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT08 - Área de cadastro com validação de matrícula**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário insere o número de matrícula.<br>3) A aplicação valida a matrícula informada.
**Requisitos associados** | RF1-008
**Resultado esperado** | Validação do número de matrícula informado.
**Dados de entrada** | Número de matrícula válido.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.

**Caso de Teste** | **CT09 - Criação de perfil com informações acadêmicas e área de interesse**
:--------------: | ------------
**Procedimento**  | 1) O usuário acessa a área de cadastro.<br>2) O usuário preenche informações acadêmicas e área de interesse.<br>3) A aplicação armazena as informações no perfil do usuário.
**Requisitos associados** | RF1-009
**Resultado esperado** | Armazenamento das informações acadêmicas e área de interesse no perfil do usuário.
**Dados de entrada** | Informações acadêmicas e área de interesse válidas.
**Resultado obtido** | Funcionou, mas não tem acesso ao banco de dados.


## Avaliação

Com base nos resultados dos testes realizados, identificamos pontos fortes e fracos na solução. Vamos destacar esses pontos e discutir como o grupo pretende abordá-los nas próximas iterações, bem como as falhas detectadas e as melhorias geradas a partir dos resultados obtidos.

Pontos Fortes:

Registro de Usuários: O processo de criação de conta mostrou-se eficiente, permitindo que os usuários informassem seus dados pessoais e avançassem para a próxima etapa do cadastro.
Validação de Dados: A aplicação foi capaz de verificar a validade dos dados inseridos pelos usuários, fornecendo feedback adequado quando os dados não estavam corretos.
Funcionalidades de Cadastro de Projetos: A solução permitiu que os usuários cadastrassem seus projetos de extensão, informando informações relevantes como título, área de atuação e breve descrição.
Pontos Fracos:

Acesso ao Banco de Dados: Infelizmente, a solução não teve acesso ao banco de dados durante os testes, o que limitou a capacidade de interação com dados reais e impactou negativamente a verificação de requisitos específicos relacionados ao armazenamento e recuperação de informações.
Notificações e Confirmações por E-mail: A funcionalidade de notificações por e-mail e confirmação de cadastro de projetos não foi implementada ou não funcionou corretamente durante os testes, o que afetou a experiência do usuário e a comunicação adequada do sistema.
Falhas Detectadas:

Associação de Arquivos de Validação de Projetos: A área de anexo de arquivo de validação do projeto não foi encontrada ou não foi possível associar corretamente os arquivos ao banco de dados, impedindo a verificação adequada dos requisitos relacionados à validação dos projetos.
Melhorias Geradas a partir dos Resultados:

Acesso ao Banco de Dados: O grupo pretende trabalhar na implementação ou correção do acesso ao banco de dados, permitindo que a solução interaja corretamente com os dados reais e atenda aos requisitos relacionados ao armazenamento e recuperação de informações.
Notificações e Confirmações por E-mail: Será feito um esforço para implementar as funcionalidades de notificações por e-mail e confirmação de cadastro de projetos, garantindo uma comunicação adequada com os usuários e melhorando a experiência do usuário.
Associação de Arquivos de Validação de Projetos: Serão realizados ajustes na área de anexo de arquivo de validação do projeto, buscando encontrar uma forma de associar corretamente os arquivos ao banco de dados e garantir a verificação adequada dos requisitos relacionados à validação dos projetos.
É importante ressaltar que essas melhorias e correções serão implementadas nas próximas iterações do projeto, levando em consideração a priorização das tarefas e a capacidade da equipe de desenvolvimento. O objetivo é atender aos requisitos não cumpridos e aprimorar a solução com base nos resultados dos testes e no feedback dos usuários.
=======
# Plano de Testes de Software

Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

# Registro de Testes de Software

Relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado em um plano de testes pré-definido.

## Avaliação

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
>>>>>>> develop
