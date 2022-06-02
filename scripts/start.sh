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
  1. Construir jwt validator injetando req.user

  2. Fix missing user na rota post em orderController

  3. Verificar retorno da postOrder em orderModel
    Se será necessário algum retorno em primeiro lugar

  === NOTES ===

  === BUG LOG ===

  === SRCs ===
  Repo: https://github.com/tryber/sd-016-b-project-trybesmith
  PR: https://github.com/tryber/sd-016-b-project-trybesmith/pull/60

  === README FIX ===

  === === end of log === ===
'

docker-compose up --force-recreate -d;
