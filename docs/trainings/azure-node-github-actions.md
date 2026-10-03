# Szkolenie: wdrażanie Node.js do Azure z GitHub Actions

Ten dokument opisuje proponowaną organizację repozytoriów uczestników podczas szkolenia wdrożeniowego.

## Cel

Każdy uczestnik tworzy własne, proste repozytorium z aplikacją Node.js i używa GitHub Actions do przećwiczenia procesu CI/CD oraz wdrożenia do Azure.

Repozytoria te mają charakter edukacyjny — nie wymagamy code review ani pracy przez Pull Requesty.

## Nazwy repozytoriów

Domyślny schemat:

`training-azure-node-<github-login>`

Przykład:

`training-azure-node-korniszon99`

Jeśli szkolenie będzie powtarzane w kolejnych edycjach, można dodać rok lub oznaczenie edycji, np. `training-azure-node-2026-korniszon99`.

## Zalecane ustawienia

- repozytorium publiczne, chyba że ćwiczenie wymaga inaczej,
- domyślna gałąź `main`,
- bez obowiązkowego branch protection,
- bez obowiązkowych review,
- GitHub Actions włączone,
- żadnych prawdziwych sekretów w kodzie ani historii Git.

## Minimalny zakres ćwiczenia

1. utworzenie repozytorium w organizacji `kc-sspw`,
2. dodanie prostej aplikacji Node.js,
3. uruchomienie jej lokalnie,
4. dodanie workflow GitHub Actions,
5. uruchomienie testów lub prostego checku w CI,
6. skonfigurowanie bezpiecznego uwierzytelnienia do Azure,
7. wykonanie wdrożenia,
8. sprawdzenie działania aplikacji po wdrożeniu.

## Starter

W folderze [starter-node](../../templates/training-azure-node/) znajduje się minimalny przykład aplikacji oraz workflow CI.

Starter celowo nie zawiera gotowego workflow wdrożeniowego do konkretnej usługi Azure. Sposób deploymentu zależy od wybranego celu, np. App Service, Container Apps lub innej usługi, i powinien być elementem ćwiczenia.

## Sekrety i Azure

Nie commituj do repo:

- client secretów,
- connection stringów,
- publish profiles,
- tokenów,
- zawartości plików `.env`.

Jeżeli szkolenie wykorzystuje GitHub Actions do logowania do Azure, preferuj rozwiązanie bez długowiecznych sekretów, jeśli konfiguracja środowiska na to pozwala.

## Po szkoleniu

Repozytorium może zostać w organizacji jako materiał edukacyjny. Jeżeli zacznie być rozwijane jako realny projekt Komisji, należy uporządkować README, właścicieli, bezpieczeństwo i workflow zgodnie z zasadami dla projektów utrzymywanych.
