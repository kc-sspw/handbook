# Repozytoria szkoleniowe

Repozytoria szkoleniowe mają przede wszystkim umożliwiać naukę przez praktykę. Nie traktujemy ich tak samo jak produkcyjnych projektów Komisji.

## Repozytoria uczestników

Podczas szkolenia uczestnicy mogą tworzyć własne repozytoria w organizacji `kc-sspw`, jeżeli taki jest format zajęć.

W tych repozytoriach:

- można pracować bezpośrednio na `main`,
- Pull Requesty nie są obowiązkowe,
- code review nie jest obowiązkowe,
- kod może być nieukończony, eksperymentalny lub celowo uproszczony,
- uczestnik może swobodnie testować Git, branche, commity i inne mechanizmy omawiane na zajęciach.

Prowadzący może ustalić inne zasady dla konkretnego szkolenia.

## Bieżące przykłady

Dla szkolenia z wdrożeń Node.js do Azure przy użyciu GitHub Actions zobacz:

- [Azure + Node.js + GitHub Actions](trainings/azure-node-github-actions.md)
- [minimalny starter Node.js](../templates/training-azure-node/)

## Oznaczenie repozytorium

README powinno zawierać informację, że repo powstało w ramach szkolenia. Dzięki temu nie zostanie przypadkiem potraktowane jako oficjalnie utrzymywany system Komisji.

Warto podać:

- nazwę szkolenia,
- datę lub edycję,
- krótki opis zadania,
- informację, że repo ma charakter edukacyjny.

Można skorzystać z [szablonu README](../templates/TRAINING_README.md).

## Sekrety

Luźniejszy workflow nie oznacza luźniejszych zasad bezpieczeństwa.

Nigdy nie commituj:

- haseł,
- aktywnych tokenów,
- kluczy API,
- prywatnych kluczy SSH,
- danych osobowych użytych tylko na potrzeby ćwiczenia.

Do demonstracji używaj fikcyjnych danych i przykładowych wartości.

## Po szkoleniu

Repozytorium może:

- pozostać jako pamiątka i materiał edukacyjny,
- być dalej rozwijane przez autora,
- zostać zarchiwizowane po zakończeniu edycji.

Jeżeli projekt szkoleniowy zaczyna być używany jako realny system Komisji, powinien zostać uporządkowany i przejść na zasady opisane w [Prowadzeniu projektów](projects.md).
