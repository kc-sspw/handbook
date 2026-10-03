# Prowadzenie projektów Komisji

Ten dokument dotyczy repozytoriów, które mają być realnie utrzymywane przez Komisję.

## Issue jako punkt startowy

Dla większych zmian warto mieć Issue opisujące:

- problem,
- oczekiwany rezultat,
- zakres,
- istotne ograniczenia.

Nie trzeba tworzyć Issue do każdej literówki, ale większa praca nie powinna istnieć wyłącznie w prywatnych wiadomościach.

## Branche

Preferowane prefiksy:

- `feat/` — nowa funkcja,
- `fix/` — poprawka błędu,
- `docs/` — dokumentacja,
- `chore/` — utrzymanie techniczne.

## Pull Request

PR powinien zawierać:

- opis zmiany,
- powód,
- sposób sprawdzenia,
- link do Issue, jeśli istnieje.

Dążymy do małych i czytelnych PR-ów. Duży PR trudniej sprawdzić, zrozumieć i później odtworzyć jego kontekst.

## Code review

W utrzymywanych projektach ważniejsze zmiany powinny otrzymać co najmniej jedno review przed merge.

Review ma kilka celów:

- wykrycie błędów,
- przekazanie wiedzy,
- upewnienie się, że więcej niż jedna osoba rozumie projekt,
- poprawę czytelności i utrzymywalności.

Nie chodzi o formalność ani blokowanie pracy.

## Main

W ważniejszych projektach warto chronić `main` przed przypadkowymi bezpośrednimi pushami. Zakres ochrony dobieramy do znaczenia repozytorium.

Nie stosujemy takich samych zabezpieczeń automatycznie do repozytoriów szkoleniowych.

## Dokumentacja

Każda zmiana wpływająca na uruchamianie, wdrożenie, konfigurację lub API powinna aktualizować dokumentację.

## Własność projektu

Każdy utrzymywany projekt powinien mieć przynajmniej jedną osobę lub zespół odpowiedzialny za jego stan. Dobrze, jeśli wiedza nie jest skupiona wyłącznie u jednej osoby.
