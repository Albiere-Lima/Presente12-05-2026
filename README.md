# 🕵️‍♀️ Projeto Duskwood - Especial Dia dos Namorados

Um web app interativo de mistério e romance inspirado no estilo do jogo "Duskwood", desenvolvido como um presente especial e personalizado de Dia dos Namorados. 

A aplicação simula um terminal/chat que foi "interceptado" por um remetente desconhecido. O usuário precisa interagir com o bot e desvendar senhas e enigmas baseados na história do casal para descriptografar o sistema e liberar a declaração final.

## ✨ Funcionalidades

- **Interface de Terminal Hacker:** Fundo escuro, fonte monoespaçada e design imersivo que simula um sistema invadido.
- **Bot Interativo com Delay:** Mensagens simuladas com efeito de "Digitando..." para aumentar a tensão e o realismo.
- **Sistema de Enigmas:** O chat pausa e aguarda inputs específicos do usuário. As respostas são validadas (case-insensitive) para permitir o avanço do roteiro.
- **Auto-Scroll Inteligente:** O chat rola automaticamente para a mensagem mais recente usando `useRef`.
- **Renderização Condicional (Surpresa Final):** Transição suave da interface hacker para a tela romântica (`RomanticScreen`) ao finalizar os enigmas, revelando fotos e a declaração de Dia dos Namorados.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com as seguintes tecnologias:

- **React** (Biblioteca para renderização da UI)
- **TypeScript (TSX)** (Tipagem estática para maior segurança no roteiro de mensagens)
- **CSS3** (Estilização inline e global reset)
- **Git & GitHub** (Versionamento de código)
