
# OpenSea Discord Bot

Discord bot built with Discord.js and OpenSea API




## Installation

Create Directory and Clone Github

```bash
  mkdir my-project
  cd my-project
  git clone https://github.com/brokecollegekidwithaclothingobsession/nft-discord-bot.git
```

Install Dependencies via NPM or Yarn

```bash
  npm Install
```
```bash
  yarn install
```

Edit & Save botconfig.json 

```json
{
  "token": "TOKEN_HERE"
}
```

Start Discord Bot 
```bash
 npm run start
```
```bash 
 yarn start
```
## Bot Commands

### Moderation

- !ban <user#1234> 
- !kick <user#1234> 
- !clear <amount>
- !unban <user#1234> 

### All Users

- !asset <The address of the owner of the assets>
- !contract <Address of the contract>
