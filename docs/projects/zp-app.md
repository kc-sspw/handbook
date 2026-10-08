# zp-app — migracja do organizacji KC

## Stan

W dostępnych źródłach portfela występuje projekt **Kreator ZP**: feedback i bieżące poprawki; najbliższy wynik to zebranie uwag, połączenie powtarzających się tematów i wybór trzech poprawek.

Nie ma jednak potwierdzenia, że wskazane przez użytkownika repozytorium `zp-app` jest tym samym projektem ani gdzie dokładnie się znajduje.

## Informacje wymagane przed migracją

- dokładny URL źródłowego repozytorium,
- platforma źródłowa,
- właściciel,
- widoczność,
- poziom dostępu umożliwiający migrację.

## Dobór sposobu przeniesienia

- **Fork** — jeśli źródło jest na GitHubie i ma pozostać aktywny upstream.
- **Transfer** — jeśli istniejące repozytorium GitHub ma po prostu zmienić właściciela na `kc-sspw`.
- **Migracja Git** — jeśli źródło jest na innej platformie.

## Kontrola przed migracją

Przed zmianą należy osobno sprawdzić:

- historię commitów,
- branche,
- tagi,
- issues,
- wiki,
- releases,
- Git LFS,
- submodules,
- automatyzacje/workflows,
- reguły repozytorium,
- obecność sekretów lub danych dostępowych.

Sekretów nie wyświetlamy ani nie kopiujemy do dokumentacji.

Źródła nie usuwamy i nie nadpisujemy istniejącego repozytorium docelowego.
