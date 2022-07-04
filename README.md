# nodejs-sandbox
typescript, node, postgres, prisma

## system reqs
make sure you have the following installed:
- docker
- node v18
- yarn v1
- vscode
- postgres

## spinning up your env
make sure you create a new `.env` file (just copy over whats in `.env.example`)
```
yarn rebuild:be
```

### testing
you can test that this is working by running `curl http://localhost:8000 | jq` or visit `localhost:8000` in your browser

## tearing down your env
```
docker compose down
```
