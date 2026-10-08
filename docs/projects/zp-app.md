# zp-app — migracja do organizacji KC

## Potwierdzone źródło

Źródło: https://github.com/kasrow12/zp-app

Repozytorium jest na GitHubie, właścicielem jest konto `kasrow12`, a widoczność źródła jest publiczna. Repo nie jest forkiem. Zawartość README potwierdza, że jest to Generator Wniosków o Udzielenie Zamówienia Publicznego dla Samorządu Studentów Politechniki Warszawskiej, więc odpowiada projektowi **Kreator ZP** z portfela KC.

Aktualnie połączone konto `Korniszon99` ma do źródła możliwość zapisu, ale nie ma uprawnień Admin. Oznacza to, że z tego konta nie można wykonać transferu własności repozytorium.

## Wybrany sposób przeniesienia

**Publiczny fork `kasrow12/zp-app` do organizacji `kc-sspw`** został zatwierdzony jako świadomy wyjątek od domyślnej zasady prywatności nowych repozytoriów projektowych.

Powody:

- źródło jest już na GitHubie i ma pozostać nienaruszone,
- chcemy zachować natywną relację fork/upstream,
- fork zachowuje historię Git i pozwala rozwijać wersję KC niezależnie,
- nie wymaga transferu własności źródłowego repozytorium,
- widoczność forka będzie publiczna, co zostało osobno zaakceptowane przez użytkownika 8.10.2026.

Wyjątek dotyczy wyłącznie `zp-app` i nie zmienia zasady, że pozostałe nowe repozytoria projektowe Komisji mają być prywatne.

## Audyt przed migracją — 8.10.2026

Szczegóły: [audyt migracji](zp-app-migration-audit-2026-10-08.md).

Najważniejsze ustalenia:

- domyślna gałąź: `main`,
- dodatkowa gałąź: `develop`,
- `develop` jest przodkiem `main`; `main` jest 13 commitów przed `develop`,
- łącznie wykryto 59 commitów w historii repozytorium,
- brak tagów,
- brak releases,
- brak Issues i Pull Requestów,
- brak rulesetów; obie gałęzie są raportowane jako niechronione,
- brak Git LFS,
- brak submodules,
- na `develop` istnieje workflow Azure Static Web Apps, usunięty później z `main`,
- workflow odwołuje się do sekretów GitHub Actions, ale nie zawiera ich wartości.

Przeprowadzono heurystyczne skanowanie bieżącej zawartości obu gałęzi oraz diffów wszystkich 59 commitów pod kątem typowych wzorców osadzonych sekretów. Nie wykryto wysokiej pewności sekretów zapisanych w kodzie. API GitHub Secret Scanning nie jest dostępne przez obecną integrację, więc wynik nie zastępuje natywnego skanowania sekretów.

## Elementy wymagające osobnej uwagi

### GitHub Actions i sekrety

Workflow na `develop` używa sekretu Azure oraz `GITHUB_TOKEN`. Wartości sekretów nie są widoczne i nie należy ich kopiować automatycznie. Po utworzeniu forka nie uruchamiamy deploymentu ani nie rekonfigurujemy infrastruktury bez osobnego uzgodnienia.

### Wiki

Funkcja Wiki jest w źródłowym repozytorium włączona. Obecna integracja nie potrafi odczytać listy stron wiki, więc nie można potwierdzić, czy wiki zawiera treść wymagającą osobnej migracji.

### Branch protection

Metadane gałęzi wskazują `protected: false`, a repo nie ma rulesetów. Szczegółowy endpoint branch protection jest niedostępny dla podłączonej aplikacji, więc nie można wykonać dodatkowej weryfikacji reguł administracyjnych.

## Stan wykonania

Wyjątek publicznego forka został zatwierdzony. Sam fork nie został jeszcze utworzony, ponieważ podłączona integracja GitHub nie udostępnia operacji tworzenia forka, a w środowisku wykonawczym nie ma uwierzytelnionego GitHub CLI.

Po utworzeniu forka należy zweryfikować:

1. obecność gałęzi `main` i `develop`,
2. zgodność SHA ich głów,
3. historię commitów,
4. brak/presence tagów zgodnie ze źródłem,
5. relację fork → upstream `kasrow12/zp-app`,
6. właściciela `kc-sspw` i widoczność publiczną,
7. stan wiki i workflowów bez uruchamiania deploymentu.
