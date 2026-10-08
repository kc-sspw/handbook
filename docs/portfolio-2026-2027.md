# KC SSPW — portfel projektów 2026/2027

Ten dokument opisuje zakres GitHubowy dla czterech projektów Komisji Cyfryzacji w kadencji 2026/2027.

## Projekty w zakresie

1. **Mój Akademik** — repo: `kc-sspw/moj-akademik` (private).
2. **Appka eventowa** — repo: `kc-sspw/appka-eventowa` (private). W dotychczasowych źródłach projekt był opisywany jako „appka wyjazdowa”.
3. **System wypożyczania istniejącego sprzętu** — repo: `kc-sspw/system-wypozyczen` (private).
4. **zp-app** — publiczny fork `kc-sspw/zp-app` źródła `kasrow12/zp-app`, z zachowaniem relacji upstream.

**PWHub jest poza zakresem tego portfela GitHub i nie należy zmieniać jego repozytoriów ani konfiguracji w ramach tego zadania.**

## Zasady

- GitHub służy pracy zespołowej, kodowi i zadaniom technicznym.
- Todoist pozostaje osobistym systemem zadań.
- Google Calendar pozostaje miejscem bloków czasu.
- Nie synchronizujemy automatycznie tych systemów.
- Nowe repozytoria projektowe mają być prywatne; wyjątek: zatwierdzony publiczny fork `zp-app`.
- Nie dodajemy licencji bez potwierdzenia praw do kodu.
- Nie narzucamy technologii przed uzgodnieniem wymagań i właściciela technicznego.

## Wspólny GitHub Project

Docelowy Project: **KC SSPW — kadencja 2026/2027**.

Statusy:
- Backlog
- Gotowe do pracy
- W toku
- Zablokowane
- Do sprawdzenia
- Zrobione

Każdy z czterech projektów powinien mieć osobny widok filtrowany po repozytorium lub polu projektu.

> Utworzenie i konfiguracja GitHub Projects wymaga funkcji administracyjnych niewystawionych przez aktualnie podłączoną integrację GitHub. Nie tworzymy zastępczego prywatnego backlogu w Todoist.

## Pierwsze wyniki

### Mój Akademik

Najpierw należy uzgodnić problem, ograniczony pierwszy etap, lidera, zależności i miarę wykonania. Nie dopisujemy funkcji bez specyfikacji.

### Appka eventowa

Zakres źródłowy: wiele oddzielnych wyjazdów, role, harmonogram, uczestnicy i zdjęcia przypisane do konkretnego wyjazdu. W planie występuje reguła usuwania zdjęć po 30 dniach od zakończenia danego wyjazdu. Priorytety funkcji nadal wymagają potwierdzenia.

### Wypożyczalnia sprzętu

Projekt dotyczy istniejącego sprzętu; zakupy nie są warunkiem. Minimalny proces: inwentaryzacja oraz rezerwacja → wydanie → zwrot, wraz z rolami i obsługą opóźnień/uszkodzeń.

### zp-app

Źródło zostało potwierdzone jako publiczne repozytorium GitHub `kasrow12/zp-app`. Audyt wykazał gałęzie `main` i `develop`, brak tagów/releases/issues oraz historyczny workflow Azure na `develop`. Fork `kc-sspw/zp-app` został utworzony i zweryfikowany. Relacja upstream wskazuje `kasrow12/zp-app`; gałęzie `main` i `develop` mają identyczne SHA jak źródło, a historia zawiera 59 commitów.
