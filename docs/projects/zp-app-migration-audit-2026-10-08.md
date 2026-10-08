# Audyt migracji zp-app — 8.10.2026

## Źródło

- Repozytorium: `kasrow12/zp-app`
- Platforma: GitHub
- Właściciel: `kasrow12`
- Widoczność: public
- Źródło jest forkiem: nie
- Domyślna gałąź: `main`
- Aktualne konto integracji: `Korniszon99`
- Uprawnienia integracji do źródła: push/triage/pull; bez Admin/Maintain

## Git

### Gałęzie

- `main` → `2b3e674dbf6995ea077326fc1ab2dbf45ae422d4`
- `develop` → `f49bf6dc230a59fc05a79ca44931827a9428cb2c`

Porównanie wskazuje, że `develop` jest merge-base i `main` jest 13 commitów przed `develop`; `develop` nie ma commitów unikalnych względem `main`.

### Historia

Wyszukiwanie historii zwróciło 59 commitów. Źródło pozostaje nienaruszone.

### Tagi

Namespace `refs/tags` nie istnieje — brak tagów.

## Metadane repozytorium

- Issues: 0
- Pull Requests: 0
- Releases: 0
- Rulesets: 0
- Wiki: funkcja włączona; zawartość niezweryfikowana z powodu ograniczenia integracji
- Pages: wyłączone według metadanych repozytorium
- Licencja repozytorium: brak rozpoznanej licencji w metadanych GitHuba

Nie dodajemy nowej licencji podczas przenoszenia.

## LFS i submodules

`.gitattributes` zawiera wyłącznie normalizację tekstu i nie definiuje filtrów Git LFS. Drzewa `main` i `develop` nie zawierają wpisów submodule (`160000`). Wynik: brak wykrytego LFS i submodules.

## Automatyzacje

Na `main` nie ma katalogu `.github/workflows`.

Na `develop` istnieje workflow Azure Static Web Apps. Workflow jest skonfigurowany na zdarzenia dotyczące `main` i używa referencji do sekretu Azure oraz `GITHUB_TOKEN`. Wartości sekretów nie znajdują się w pliku workflow.

Nie uruchamiamy ani nie rekonfigurujemy tej automatyzacji podczas migracji.

## Sekrety

Wykonano skan heurystyczny:

- wszystkich tekstowych plików obecnych na `main`,
- wszystkich tekstowych plików obecnych na `develop`,
- diffów wszystkich 59 commitów.

Sprawdzono typowe wzorce prywatnych kluczy, PAT GitHuba, kluczy AWS, connection stringów Azure, jawnych przypisań haseł/tokenów/API keys i URI baz danych zawierających poświadczenia.

Nie wykryto wysokiej pewności osadzonych sekretów.

Ograniczenie: obecna integracja nie ma dostępu do GitHub Secret Scanning API ani do wartości GitHub Actions Secrets. Ten audyt jest kontrolą heurystyczną, a nie gwarancją braku sekretów.

## Wybór migracji

Rekomendacja: **transfer `kasrow12/zp-app` do `kc-sspw`**.

Repozytorium jest kanonicznym projektem SSPW, nie forkiem zewnętrznego upstreamu. Transfer przenosi odpowiedzialność organizacyjną bez tworzenia drugiej kopii i bez zmiany widoczności istniejącego publicznego repozytorium. Fork byłby nowym publicznym repozytorium, co kolidowałoby z zasadą tworzenia nowych repozytoriów projektowych jako prywatnych.

Transfer nie może zostać wykonany przez aktualnie połączone konto, ponieważ nie ma ono Admin do źródła.

## Blokada narzędziowa

Podłączony konektor GitHub nie udostępnia operacji:

- utworzenia forka,
- utworzenia nowego repozytorium,
- transferu repozytorium.

Z tego powodu transfer nie został wykonany. Nie zastosowano alternatywnego kopiowania historii ani forka, ponieważ tworzyłoby to drugie repozytorium zamiast przenieść własność istniejącego projektu.
