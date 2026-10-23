# Model uprawnień

Domyślna zasada: **najmniejsze uprawnienia, które wystarczają do wykonania pracy**.

## Poziomy repozytorium

Praktyczny model:

- **Read** — przeglądanie repozytorium,
- **Triage** — praca z Issues i PR bez zapisu do kodu,
- **Write** — normalna praca programistyczna,
- **Maintain** — opieka nad repozytorium bez pełnej administracji,
- **Admin** — tylko tam, gdzie rzeczywiście jest potrzebny.

## Domyślne dostępy

### `.github`

- Owners: Admin,
- `maintainers`: Maintain,
- pozostali: dostęp wystarczający do zgłaszania zmian przez PR.

### `handbook`

- Owners: Admin,
- `maintainers`: Maintain,
- `members`: Write lub możliwość współpracy przez PR.

### Projekty Komisji

- zespół `project-<nazwa>`: Write,
- wybrani opiekunowie: Maintain,
- Admin: tylko osoby potrzebujące zarządzać ustawieniami repozytorium.

### Repozytoria szkoleniowe uczestników

Workflow ma być lekki.

Dla repozytorium autora szkolenia wystarczy, że autor może swobodnie pushować. Nie wymagamy review ani ochrony `main`, chyba że prowadzący świadomie chce przećwiczyć te mechanizmy.

## Base permissions organizacji

Dla przyjętego modelu **publiczny kod, kontrolowany zapis** rekomendowane **Base permissions: None**. Publiczne repozytoria każdy może czytać bez tej roli, ale zwykłe członkostwo w organizacji nie powinno dawać dostępu Write.

Dostęp do utrzymywanych projektów powinien wynikać z uprawnień Teams, a nie z globalnego przywileju organizacyjnego. Publiczny PR z forka może zaproponować także osoba spoza Teams, lecz bez prawa do push ani merge na `main`.

Ochronę gałęzi, bypass Ownera i weryfikację aktywnego egzekwowania Rulesetów opisuje [Publiczny kod i Rulesets](public-code-and-rulesets.md).

## Tworzenie repozytoriów przez członków

Na szkoleniach uczestnicy mogą potrzebować prawa do samodzielnego tworzenia repozytoriów.

Jeśli to ustawienie jest włączane szerzej na potrzeby szkolenia:

1. ustal konwencję nazw,
2. przypomnij, że repozytoria mają charakter szkoleniowy,
3. po szkoleniu sprawdź nowo utworzone repozytoria,
4. w razie potrzeby przywróć bardziej restrykcyjne ustawienie.

## 2FA

Dla osób posiadających trwały dostęp administracyjny rekomendowane jest obowiązkowe uwierzytelnianie dwuskładnikowe.

Włączenie wymogu 2FA dla całej organizacji powinno być zaplanowane i zakomunikowane wcześniej, żeby nie odciąć przypadkowo potrzebnych kont.

## Przegląd dostępów

Minimum przy zmianie kadencji oraz po większych zmianach personalnych sprawdź:

- Owners,
- członków zespołu `maintainers`,
- zespoły projektowe,
- osoby z Admin/Maintain,
- konta osób, które zakończyły działalność,
- integracje i GitHub Apps.
