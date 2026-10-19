# M&S | Delivery

Protótipo de delivery em HTML, CSS e JavaScript, sem dependências de build.

## Executar

Abra `index.html` no navegador ou use a extensão Live Server do VS Code. O catálogo, carrinho, configurações e pedidos ficam no `localStorage` do navegador atual. Os dados iniciais são exemplos; limpar os dados do site restaura a demonstração.

## Fluxos disponíveis

- Buscar e filtrar produtos, escolher adicionais, informar observações e favoritar itens.
- O cardápio de demonstração traz sabores variados de panquecas, burritos e crepes; a primeira abertura migra os antigos itens de exemplo sem remover pedidos, clientes ou produtos personalizados.
- A página **Sobre nós** apresenta a história da marca, o endereço e informações atuais da loja. O texto institucional inicial é demonstrativo e deve ser personalizado.
- Selecionar bairro, calcular taxa e pedido mínimo, aplicar os cupons de demonstração `BEMVINDO10` e `VILA5` e registrar um pedido.
- Acompanhar os pedidos neste navegador.
- Abrir **Painel da loja** e entrar com o código local `1234` para gerenciar produtos, categorias, pedidos, clientes, regiões e configurações. O painel também apresenta indicadores e permite exportar CSV.

## Limites importantes

Este projeto é uma demonstração front-end, não um sistema pronto para receber pedidos reais. O `localStorage` não é banco de dados compartilhado, não protege dados pessoais e pode ser alterado pelo usuário. O código `1234` apenas esconde a tela do painel; não é autenticação. Não solicite nem armazene dados de pagamento reais. Nenhum pagamento é processado ou aprovado pelo site.

Autenticação segura, permissões, persistência centralizada, estoque transacional, confirmação de pedidos, notificações em tempo real, backups e controles LGPD exigem uma API e banco de dados no servidor. Pix/cartão online requer integração a um provedor com credenciais guardadas somente no servidor, confirmação de pagamento por webhook assinado e tratamento de idempotência. WhatsApp precisa do número e de uma integração configurados pela loja. Não há `.env` neste protótipo porque não existe servidor para consumir variáveis; não coloque chaves secretas nos arquivos públicos.

Antes de produção, configure domínio HTTPS, API, PostgreSQL, autenticação, armazenamento de imagens e integrações oficiais. Atualize também os dados de endereço, horários, taxas, fotos e contato que hoje são exemplos.
