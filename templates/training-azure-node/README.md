# Training Azure Node

> Repozytorium szkoleniowe Komisji Cyfryzacji SSPW.

Minimalna aplikacja Node.js do ćwiczenia GitHub Actions i wdrożenia do Azure.

## Uruchomienie

Wymagany Node.js 20 lub nowszy.

```bash
npm start
```

Aplikacja domyślnie nasłuchuje na porcie z `PORT` albo na `3000`.

## Testy

```bash
npm test
```

## GitHub Actions

Workflow w `.github/workflows/ci.yml` uruchamia testy po pushu na `main` oraz dla Pull Requestów.

Deployment do Azure należy dodać podczas szkolenia zgodnie z wybraną usługą.

## Ważne

Nie commituj prawdziwych sekretów, tokenów ani danych dostępowych.
