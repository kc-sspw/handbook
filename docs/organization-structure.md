# Struktura organizacji i ludzi

Ten dokument opisuje proponowaną strukturę GitHub Organization `kc-sspw`.

Celem jest połączenie trzech rzeczy:

- ciągłości między kadencjami,
- prostego dostępu dla członków Komisji,
- bezpiecznego wpuszczania uczestników szkoleń bez dawania im dostępu do wszystkiego.

## Role na poziomie organizacji

### Owners

To rola administracyjna GitHuba, nie zwykły zespół.

Rekomendacja:

- minimum 2 osoby,
- najlepiej 2–3 osoby pełniące aktualnie odpowiedzialne funkcje,
- każda korzysta z własnego konta,
- wszyscy Owners mają włączone 2FA,
- po zmianie kadencji lista Owners jest przeglądana jako jedna z pierwszych rzeczy.

Owner nie powinien być używany jako zwykły poziom dostępu do projektów. To rola awaryjna i administracyjna.

### Members

Stałe osoby działające w Komisji powinny należeć do organizacji jako Members.

Samo członkostwo nie musi automatycznie oznaczać zapisu do wszystkich repozytoriów. Dostęp do projektów nadajemy przez zespoły.

### Uczestnicy szkoleń

Jeżeli uczestnik musi sam utworzyć repozytorium wewnątrz `kc-sspw`, może zostać tymczasowo dodany jako Member.

Po zakończeniu szkolenia należy zdecydować, czy:

- zostaje członkiem organizacji,
- zostaje tylko przy swoim repozytorium,
- czy jego dostęp do organizacji jest usuwany.

Nie traktujemy uczestnictwa w jednorazowym szkoleniu jako automatycznego stałego członkostwa w Komisji.

## Zespoły

### `maintainers`

Osoby technicznie odpowiedzialne za utrzymywane projekty i standardy organizacji.

Typowe uprawnienia:

- Maintain lub Write do repozytoriów technicznych,
- Maintain do `.github` i `handbook`,
- możliwość pomocy przy review i utrzymaniu CI.

Nie musi obejmować wszystkich członków Komisji.

### `members`

Stałe osoby działające w Komisji.

Zespół służy jako wspólna grupa do nadawania podstawowego dostępu tam, gdzie cały skład Komisji powinien mieć dostęp.

Nie zakładamy, że `members` ma Write do każdego repozytorium.

### `trainers`

Osoby prowadzące lub przygotowujące szkolenia.

Typowe zastosowania:

- Maintain/Write do repozytoriów z materiałami szkoleniowymi,
- pomoc uczestnikom podczas warsztatów,
- utrzymywanie starterów i przykładów.

### `project-<nazwa>`

Dla każdego większego, długowiecznego projektu tworzymy osobny zespół.

Przykłady:

- `project-website`
- `project-event-system`
- `project-discord-bot`

Taki zespół dostaje Write lub Maintain tylko do repozytoriów konkretnego projektu.

To lepsze niż ręczne dodawanie wielu pojedynczych osób do każdego repo.

### `training-<temat>-<edycja>`

Opcjonalny, tymczasowy zespół dla konkretnego szkolenia.

Przykład:

`training-azure-node-2026`

Może zawierać uczestników oraz prowadzących i służyć do wspólnego dostępu do materiałów lub repozytoriów szkoleniowych.

Nie ma potrzeby tworzyć takiego zespołu, jeśli szkolenie jest małe i nie daje żadnego wspólnego dostępu.

## Model odpowiedzialności

Każdy utrzymywany projekt powinien mieć:

- co najmniej jednego aktywnego opiekuna,
- najlepiej co najmniej dwie osoby rozumiejące sposób działania i wdrożenia,
- zespół `project-...`, jeśli projekt ma więcej niż jednego aktywnego współtwórcę.

Wiedza o systemie nie powinna być związana wyłącznie z jedną osobą lub jednym prywatnym kontem.

## Czego unikamy

- jednego Ownera organizacji,
- wspólnych kont GitHub,
- dawania wszystkim uprawnień Admin,
- ręcznego nadawania wyjątków wielu osobom zamiast zespołów,
- pozostawiania szerokich dostępów osobom, które nie działają już przy projekcie,
- budowania struktury zespołów na podstawie konkretnej kadencji zamiast funkcji.
