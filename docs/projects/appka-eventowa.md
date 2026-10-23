# Appka eventowa

> W dotychczasowych źródłach projekt jest opisany jako „appka wyjazdowa”. Nazwa repozytorium `appka-eventowa` wynika z bieżącej instrukcji użytkownika.

## Cel

Organizacja wyjazdu/eventu w jednym miejscu.

## Aktualny stan

Zakres roboczy w źródłach obejmuje wiele oddzielnych wyjazdów, role, harmonogram, uczestników i zdjęcia przypisane do konkretnego wyjazdu.

W planie występuje reguła usuwania zdjęć 30 dni po zakończeniu danego wyjazdu. Dokładne funkcje priorytetowe wymagają potwierdzenia.

## Minimalny zakres pierwszego etapu

- zamknięty zakres MVP,
- odrębne role i wyjazdy/eventy,
- podstawowy scenariusz użytkownika,
- test izolacji między równoległymi wyjazdami,
- test harmonogramu,
- test reguły usuwania zdjęć, jeśli pozostanie w zatwierdzonym zakresie.

## Zależności

- potwierdzenie priorytetów MVP,
- organizatorzy decydujący o pilotażu,
- zasady przetwarzania danych uczestników i zdjęć.

## Następny krok

Zamknąć zakres MVP i kryteria pilotażu na podstawie aktualnych materiałów.

## Repozytorium

`kc-sspw/appka-eventowa` — **publiczne**, `main` chronione aktywnym Rulesetem (stan zweryfikowany 23.10.2026). Kod i zadania projektowe są jawne; dane wydarzeń i poświadczenia nie trafiają do Git. [Instrukcja rozpoczęcia PoC](https://github.com/kc-sspw/appka-eventowa/blob/main/docs/POC_START_HERE.md); zasady współpracy: [Publiczny kod i Rulesets](../public-code-and-rulesets.md).
