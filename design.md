# Ags Solutions — direção visual

Site institucional web de uma página, em português do Brasil. Sem autenticação ou banco adicional.

## Identidade
- Fundo #080e1b; superfícies #101a2b; bordas #243044.
- Ciano #35d6eb; texto #f5f7fb; secundário #a0adbf.
- Poppins para títulos e corpo; rótulos monoespaçados. Títulos grandes, peso 500–600 e tracking negativo.
- Marca AGS com símbolo geométrico de circuitos e assinatura SOLUTIONS.
- Estética tecnológica sóbria: grade sutil, fotografia real de hardware, detalhes técnicos pequenos.

## Layout e componentes
- Container de 1200px, header 88px, respiro vertical de 90px.
- Hero assimétrico: texto à esquerda e fotografia à direita integrada por gradiente.
- Serviços em três cartões numerados com bordas discretas.
- Processo horizontal e orçamento em duas colunas.
- Botões ciano, cantos de 6px, setas; secundários com borda.
- Formulário: nome, WhatsApp, serviço e descrição; validação nativa.
- Mobile: uma coluna e menu colapsável. Foco visível e reduced-motion respeitado.

## Fluxos
Navegação por âncoras. CTA de serviço pré-seleciona opção no formulário. Formulário abre WhatsApp com mensagem preenchida; o usuário confirma o envio no WhatsApp. Nenhum dado é armazenado.

Contato: +55 45 99146-8649; ag290331@gmail.com. Cidade confirmada: Foz do Iguaçu — PR, exibida no destaque inicial e na seção de contato. Não inventar endereço, números, avaliações ou depoimentos.

## Arquitetura
Página em src/web/pages/home.tsx, composta por pages/index.tsx. CSS global em styles.css. Arquivos estáticos apenas em public. Nenhuma rota API ou tabela adicional necessária.
