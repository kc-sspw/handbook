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

## Widoczność i bezpieczeństwo

**Decyzja KC z 23.10.2026:** utrzymywane projekty Komisji docelowo rozwijamy jako **publiczne repozytoria kodu**, z kontrolowanym zapisem przez Teams i ochroną gałęzi przez repozytoryjne Rulesets. Szczegóły, plan przejścia i weryfikacja: [Publiczny kod i Rulesets](public-code-and-rulesets.md).

- Kod projektu, dokumentacja i niewrażliwe przykłady mogą być publiczne.
- Dane osobowe, rzeczywiste bazy, prywatne zdjęcia, sekrety, certyfikaty i poufne informacje organizacyjne **nie mogą** być przechowywane w publicznym repo.
- Jeśli projekt wymaga rzeczywiście poufnych plików, wydziel je poza repo lub użyj odpowiednio chronionego zasobu; nie wystawiaj ich tylko dla ujednolicenia widoczności.
- Repozytoria szkoleniowe zachowują osobne zasady pracy i nie dziedziczą automatycznie restrykcyjnego Rulesetu projektowego.
- Repozytorium `zp-app` pozostaje publicznym forkiem `kasrow12/zp-app` z zachowaniem relacji upstream.

**Ważne:** decyzja o publicznym kodzie nie jest informacją, że trzy repo zostały już przełączone. Zmiana widoczności wymaga potwierdzenia Ownera w UI lub przez autoryzowane API. Sama publiczność repo nie daje postronnym prawa push/merge.

Prawa autorskie i licencje są oddzielnymi zagadnieniami. Bez decyzji o licencji nie dodajemy jej automatycznie.

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
