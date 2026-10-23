# Publiczny kod projektów i ochrona gałęzi KC SSPW

**Decyzja organizacyjna: 23.10.2026.** Docelowy model dla utrzymywanych projektów Komisji to **publiczne repozytoria, kontrolowany zapis przez uprawnienia Teams, review PR oraz ochrona gałęzi**. Dane osobowe, bazy, sekrety, prywatne pliki środowiska i dostęp do infrastruktury nie mogą trafić do repo. Ta decyzja sama **nie zmienia widoczności repozytoriów ani ustawień GitHuba**; poniżej podano sposób wdrożenia i weryfikacji.

## Zakres wdrożenia

| Repo KC | Stan zweryfikowany przed wdrożeniem | Docelowy stan | Rola |
|---|---|---|---|
| `kc-sspw/appka-eventowa` | private | **public + chroniona główna gałąź** | docelowy produkt eventowy |
| `kc-sspw/moj-akademik` | private | **public + chroniona główna gałąź** | produkt akademikowy |
| `kc-sspw/system-wypozyczen` | private | **public + chroniona główna gałąź** | system wypożyczeń |
| `kc-sspw/zp-app` | public | **public + chroniona główna gałąź** | fork Kreatora ZP |
| `kc-sspw/apka-wyjazdowa` | public | **public + chroniona główna gałąź** | referencyjny Poligon, nie główna appka |
| `kc-sspw/.github` | public | **public + chroniona główna gałąź** | standardy organizacji |
| `kc-sspw/handbook` | public | **public + chroniona główna gałąź** | dokumentacja |

**Poza zakresem:** `kc-sspw/training-azure-102026`, repozytoria uczestników szkoleń, PW Hub oraz konta prywatne. Nie narzucamy tym repozytoriom gotowych workflowów ani Rulesetów.

## Publiczne czy otwarte do modyfikacji?

Publiczna widoczność daje dowolnej osobie wgląd w kod oraz możliwość utworzenia własnego forka i zaproponowania Pull Requesta. **Nie daje prawa do push, zatwierdzania PR ani merge w repo KC.** Te prawa wynikają z ustawień **Teams, Base permissions, bezpośrednich collaboratorów oraz bypassów**. Nie da się użyć samego Rulesetu, żeby uniemożliwić osobom spoza Teams *zaproponowanie* PR do publicznego repozytorium.

W ustawieniach organizacji:
- **Base permissions: None** — żaden członek organizacji nie otrzymuje automatycznie Write do wszystkich repozytoriów; publiczne repo i tak pozostaje czytelne dla każdego.
- Zespoły `project-*` → **Write** wyłącznie do własnych repo.
- `maintainers` → **Maintain** do utrzymywanych repozytoriów (zweryfikować rzeczywisty zakres; do bypassu nie dodawać całej roli Maintain).
- Owners → Admin z obowiązkiem 2FA i przeglądem innych Owners.
- Sprawdzić **Outside collaborators**, bezpośrednie uprawnienia, zakładanie repozytoriów przez Members i dostęp dotychczasowych uczestników szkoleń.

## Repozytoryjny Ruleset na GitHub Free

**Nazwa:** `KC SSPW — protected main`

GitHub Free dla organizacji obsługuje egzekwowanie Rulesets dla **publicznych repozytoriów**. Jeden Ruleset obejmujący wiele repozytoriów na **poziomie organizacji** wymaga GitHub Team/Enterprise. Na obecnym planie reguły tworzymy **osobno w każdym repo**, korzystając z tego samego [szablonu JSON](../templates/kc-protected-main-ruleset.json). Publiczność repo należy potwierdzić przed konfiguracją: w prywatnych repo GitHub Free Ruleset nie jest egzekwowany.

Docelowe reguły:
- **Enforcement:** Active
- **Branch target:** default branch, istniejący `develop` i gałęzie `release/*`
- **Restrict deletions:** tak
- **Block force pushes:** tak
- **Require a pull request before merging:** tak
- **Required approvals:** 1 od uprawnionego reviewera
- **Dismiss stale pull request approvals when new commits are pushed:** tak
- **Require approval of the most recent reviewable push:** tak (przez osobę inną niż wykonująca push)
- **Require conversation resolution before merging:** tak
- **Require linear history:** tak; merge wyłącznie **Squash** (należy upewnić się, że repo dopuszcza squash merge)
- **Bypass:** tylko **Organization owners → For pull requests only**; bypass nie daje prawa do bezpośredniego push na gałąź chronioną
- **Require code owner review:** dopiero po weryfikacji rzeczywistych Teams i dodaniu prawidłowego `CODEOWNERS` (na razie wyłączone)
- **Require status checks / deployments / Actions:** na razie wyłączone; nie istnieje wspólne sprawdzone CI dające statusy. Wdrożenia produkcyjne obsługuje odrębna infrastruktura CI, nie GitHub Actions. Po pojawieniu się stabilnego zewnętrznego checka można go wymagać.
- **Require signed commits, restrict updates, lock branch:** na start **nie włączamy**: mogłyby blokować legalny merge i współpracę bez dodatkowej korzyści operacyjnej.

W szczególności nie dodajemy bypass dla wszystkich `maintainers` ani całego `project-*`. Jeśli rzeczywiście potrzebny jest merge bez akceptacji, Owner może użyć PR-only bypass, z zachowaniem śladu zmian.

## Wykonanie przez Ownera

1. Potwierdź własne uprawnienia Owner i rzeczywiste dostępy Teams. W UI: **Organization → Settings → Member privileges → Base permissions**, a potem **Organization → Teams** i **Repository → Settings → Collaborators and teams**.
2. W trzech prywatnych repo: **Settings → General → Danger Zone → Change repository visibility → Make public**. GitHub wymaga potwierdzenia konsekwencji (cały kod i historia będą widoczne, podobnie dostępne logi Actions).
3. Dla każdego z siedmiu repo: **Settings → Rules → Rulesets → New ruleset → Import a ruleset**. Wgraj `templates/kc-protected-main-ruleset.json`. Sprawdź w formularzu target, Owner bypass PR-only, 1 review, sposób merge i status Active; zapisz.
4. W **Settings → General → Pull Requests** włącz **Allow squash merging** i, jeżeli chcecie konsekwentnej historii, wyłącz merge commits/rebase według przyjętego procesu. Nie zmieniaj niczego w repo szkoleniowym.
5. Otwórz w repo **Settings → Rules → Rulesets**: sprawdź, że reguła pochodzi z poziomu repo, jest Active i obejmuje `main`; w odczycie API `/repos/{owner}/{repo}/rules/branches/main` i `/branches/main` sprawdź rzeczywistą ochronę. Sam komunikat **Ruleset created** nie wystarcza.
6. Zrób test: osoba z uprawnieniami Write spróbuje normalnego push na `main` — powinien zostać odrzucony; PR bez wymaganej akceptacji nie powinien dać się scalić. Testuj **bez obchodzenia zasad i bez wdrożenia**.
7. Dopiero po potwierdzeniu zmień opis portfela i profil organizacji z „repo prywatne” na „publiczne”. Nie wpisuj wdrożenia jako ukończonego na podstawie samej decyzji.

Przy potrzebie szybkiego wdrożenia można użyć GitHub CLI z autoryzacją Ownera oraz repozytoryjnego REST API; szablon JSON nadaje się do importu pojedynczo i stanowi wspólne źródło konfiguracji. Nie należy uruchamiać skryptów na produkcyjnym Azure ani przestawiać repo z powrotem na private po publikacji historii.

## Repozytoria i licencje

Publiczny kod **nie oznacza automatycznie licencji open source**. Własność i prawa do komponentów referencyjnych mają być zachowane. O rodzaju licencji, jeśli ma być wprowadzona, należy podjąć odrębną decyzję.

## Granice infrastruktury

Nie commitujemy prawdziwych baz danych, danych mieszkańców, prywatnych zdjęć, loginów, certyfikatów, sekretów ani konfiguracji wdrożeniowej. GitHub służy kodowi i pracy projektowej. Osobny CI odpowiada za wdrożenia; nie dodajemy domyślnych GitHub Actions do projektów KC ani do repo szkoleniowych tylko z racji publikacji.

## Weryfikacja zmian

W dniu decyzji (23.10.2026) trzy repozytoria wymienione wyżej były nadal **private**, a w sprawdzonych repozytoriach publicznych nie było aktywnych Rulesets. Dopóki Owner nie wykona procedury i nie potwierdzimy nowego stanu, **nie oznaczamy ich jako publicznych ani chronionych**.

Dokumentacja GitHub: [widoczność repo](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility), [tworzenie Rulesets](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/creating-rulesets-for-a-repository), [reguły](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets).
