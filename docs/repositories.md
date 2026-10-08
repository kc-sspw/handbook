# Repozytoria i nazewnictwo

## Kiedy tworzyć osobne repozytorium

Osobne repozytorium ma sens, gdy kod:

- jest samodzielną aplikacją lub narzędziem,
- ma osobny cykl życia lub wdrożenie,
- będzie utrzymywany przez konkretny zespół,
- stanowi materiały do konkretnego szkolenia,
- jest projektem uczestnika szkolenia, który ma funkcjonować niezależnie.

Nie twórz osobnego repo tylko dla kilku plików, które logicznie należą do istniejącego projektu.

## Nazwy

Preferujemy krótkie nazwy w kebab-case, np.:

- `event-registration`
- `website`
- `discord-bot`
- `training-git-basics`

Dla repozytoriów uczestników szkolenia warto stosować wspólny prefiks związany z wydarzeniem lub szkoleniem, jeśli repozytoriów będzie dużo, np.:

- `training-2026-web-anna`
- `training-2026-web-piotr`

Nie ma potrzeby wymuszać jednego schematu dla wszystkich przyszłych szkoleń — ważniejsza jest spójność w ramach konkretnej edycji.

## Widoczność

Domyślnie:

- materiały szkoleniowe i projekty open source mogą być publiczne,
- nowe repozytoria utrzymywanych projektów Komisji tworzymy prywatne, jeśli nie ma zatwierdzonego wyjątku,
- repozytoria zawierające dane lub integracje, których nie należy ujawniać, powinny być prywatne.

### Zatwierdzony wyjątek 2026/2027

Dla `zp-app` zatwierdzono publiczny fork źródła `kasrow12/zp-app` do organizacji `kc-sspw`. Wyjątek wynika z potrzeby zachowania relacji GitHub fork/upstream dla istniejącego publicznego projektu i nie zmienia domyślnej zasady dla pozostałych nowych repozytoriów projektowych.

Sama prywatność repozytorium nie zastępuje poprawnego zarządzania sekretami.

## README jest obowiązkowe

Każde utrzymywane repozytorium powinno wyjaśniać przynajmniej:

- czym jest projekt,
- dla kogo jest przeznaczony,
- jak go uruchomić,
- kto lub jaki zespół go utrzymuje,
- gdzie zgłaszać problemy.

Repozytoria szkoleniowe powinny dodatkowo jasno zaznaczać swój edukacyjny charakter.

## Archiwizacja

Jeżeli projekt nie jest już rozwijany i nie planujemy jego wznowienia:

1. dopisz w README status projektu,
2. upewnij się, że nie ma potrzebnych sekretów ani aktywnych zależności organizacyjnych,
3. zarchiwizuj repozytorium zamiast je usuwać.

Historia może być cenna dla kolejnych kadencji.
