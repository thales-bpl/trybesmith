echo $' === === project log === ===
  === START ===
  1. Iniciar aplicação:
    na raíz do projeto: scripts/nodeterminal.sh
    no terminal do container node: npm start | npm run debug
  2. Para acessar mysql-db:
    na raíz do projeto: scripts/dbterminal.sh
    no terminal do container db: mysql -u root -p
    no terminal do container db: password

  === TO DO LIST ===
  Teste 2 não passa. Não faz nenhuma verificação

  === NOTES ===

  === BUG LOG ===

  === SRCs ===
  Repo: https://github.com/tryber/sd-016-b-project-trybesmith
  PR: https://github.com/tryber/sd-016-b-project-trybesmith/pull/60

  === README FIX ===

  === === end of log === ===
'

docker-compose up --force-recreate -d;
