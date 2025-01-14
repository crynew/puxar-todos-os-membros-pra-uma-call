# Discord Selfbot - Mover Membros em Call

Este projeto é um **selfbot** feito para mover todos os membros que estiverem em call para uma call específica em um servidor do Discord.

> **Atenção:** O uso de selfbots vai contra os Termos de Serviço do Discord e pode levar ao banimento da sua conta. Use por sua conta e risco.

---

## Pré-requisitos

1. **Node.js** instalado no seu sistema.
2. Uma conta do Discord (de preferência uma conta alternativa, já que o uso de selfbots é contra as regras).

---

## Configuração

1. **Inicializar o projeto**
   Abra um terminal na pasta onde deseja criar o projeto e execute o seguinte comando:

   ```bash
   npm init -y
   ```

2. **Instalar dependências**
   Instale o pacote `discord.js-selfbot-v13`:

   ```bash
   npm install discord.js-selfbot-v13
   ```
3. **Obtenha o token da sua conta**
   Para que o selfbot funcione, você precisará do token da sua conta do Discord. **Não compartilhe este token com ninguém!**

---

## Uso

1. Abra o terminal na pasta do projeto.
2. Execute o seguinte comando para inicializar o selfbot:

   ```bash
   node .
   ```

3. O selfbot se conectará à sua conta do Discord e moverá os membros da call de origem para a call de destino.
