# Cykl życia projektu

## 1. Pomysł

Nowy projekt zaczyna się od opisania:

- problemu,
- odbiorców,
- minimalnego zakresu,
- osoby odpowiedzialnej,
- przewidywanego utrzymania.

Do tego można użyć szablonu Issue „Propozycja projektu”.

## 2. Start

Przy tworzeniu repozytorium:

1. nadaj krótką nazwę w kebab-case,
2. dodaj README,
3. wskaż opiekuna lub zespół,
4. ustal widoczność repozytorium,
5. skonfiguruj CI, jeśli ma sens,
6. utwórz zespół `project-<nazwa>`, jeśli projekt rozwija kilka osób.

## 3. Rozwój

Dla utrzymywanych projektów:

- większe zadania zapisujemy jako Issues,
- zmiany robimy na branchach,
- ważniejsze zmiany przechodzą przez PR i review,
- dokumentację aktualizujemy razem z kodem.

## 4. Utrzymanie

Projekt powinien mieć opis:

- uruchomienia,
- wdrożenia,
- konfiguracji,
- zależności zewnętrznych,
- odpowiedzialności za system.

Jeśli nikt nie wie, jak projekt wdrożyć bez autora, projekt nie jest jeszcze dobrze przekazywalny.

## 5. Zmiana opiekuna

Użyj checklisty z [Przekazania projektu](handover.md).

Przekazanie obejmuje nie tylko kod, ale też:

- infrastrukturę,
- dostępy,
- sekrety,
- integracje,
- wiedzę operacyjną.

## 6. Koniec projektu

Jeśli projekt przestaje być używany:

1. oznacz jego status w README,
2. wyłącz niepotrzebne wdrożenia i integracje,
3. unieważnij nieużywane sekrety,
4. zarchiwizuj repozytorium.

Nie usuwaj historii bez konkretnego powodu.
