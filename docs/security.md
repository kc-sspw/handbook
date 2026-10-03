# Bezpieczeństwo

Ten dokument zawiera podstawowe zasady bezpieczeństwa wspólne dla projektów i szkoleń.

## Sekrety

Do repozytorium nie commitujemy:

- haseł,
- tokenów dostępowych,
- kluczy API,
- kluczy prywatnych,
- plików `.env` zawierających prawdziwe dane dostępowe.

Do repozytorium można dodać plik typu `.env.example` zawierający nazwy wymaganych zmiennych, ale bez prawdziwych wartości.

## Jeśli sekret trafił do repo

Samo usunięcie go w kolejnym commicie nie wystarcza.

Należy:

1. unieważnić lub obrócić sekret,
2. sprawdzić, gdzie był używany,
3. dopiero potem porządkować historię, jeśli jest to potrzebne.

Traktuj ujawniony sekret jako przejęty.

## Dostępy

Uprawnienia powinny być nadawane zgodnie z rzeczywistą potrzebą. W miarę możliwości korzystamy z zespołów i ról zamiast ręcznie nadawać wyjątki każdej osobie.

Po zmianie kadencji lub odejściu osoby z projektu należy przejrzeć dostęp do repozytoriów i usług powiązanych z projektem.

## Dane

Nie używaj prawdziwych danych osobowych w przykładach i środowiskach szkoleniowych, jeśli nie jest to konieczne.

## Zgłaszanie podatności

Problemy bezpieczeństwa, których nie powinno się publikować publicznie, zgłaszaj na:

**kc@samorzad.pw.edu.pl**
