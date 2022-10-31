# Word Guesser

O **Word Guesser** é um jogo baseado no famoso Wordle, onde se deve adivinhar uma palavra de cinco letras em, no máximo 6 tentativas, e conforme a entrada de palavras cada letra pode possuir uma cor sendo: cinza aquela que não aparece na palavra final, amarelo aquela que está presente mas não na posição correta e por fim, verde quando se acerta a letra e a posição. O **Word Guesser** foi criado para se tornar um jogo mais móvel e flexível, atualmente se encontrando somente na versão em inglês.

![Aplicativo](/screenshots/all-screens.png)

## Ambiente de desenvolvimento

Criado utilizando o React Native CLI, as seguintes dependências e suas versões foram usadas:

- Node >= 16
- Java >= 11
- React Native CLI <= 9.2.1

Foi utilizado a API [Random Words](https://rapidapi.com/sheharyar566/api/random-words5) com o intuito de conseguir múltiplas palavras aleatórias para sua utilização no jogo. Para seu fucionamento será necessário que adquira uma chave RapidAPI, necessitando de uma conta e a inscrição dessa API. Com isso em mãos, crie um arquivo `` .env `` na raíz do projeto com a seguinte chave `` RAPID_API_KEY=YOUR_RAPID_API_KEY `` (arquivo de exemplo pode ser encontrado no projeto com a extensão `` .sample ``), substituindo o valor `` YOUR_RAPID_API_KEY `` com sua chave adquirida.

O aplivativo foi validado em dois dispositivos Android diferentes, sendo eles:

- Emulador de Pixel 3A
- Redmi Note 11 Pro+ físico

Para rodar utilizando o CLI, são necessários os dois seguintes comandos, o de inicialização do servidor de desenvolvimento e o de construção do aplicativo no dispositivo conectado à máquina:

```bash
npx react-native start
npx react-native run-android
```

## Limitações, bugs e próximos passos

- Limitação: Não possuir verificação de existência da palavra de entrada (solução seria utilizar uma API de discionário);
- *Bug*: Se a palavra secreta possuir uma letra e a de entrada mais de uma dessa mesma letra, todas aparecerão em amarelo. Portanto falta a verificação de letras únicas e aparecimento múltiplo;
- Todo: Persistência de informações como *highscore* e lista de palavras secretas (se ainda não for utilizada, manter para a próxima sessão, assim evitanto requisição a API) para utilização Offline;
- Todo: Adicionar avisos e mensagens sobre o estado do jogo.