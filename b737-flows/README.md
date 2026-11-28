# B737 Normal Procedures — flows (OM-B SCAT, Issue 06 Rev 01)

- `data/batch*.txt` — дословные выписки из OM-B (единственный источник содержания).
- `build.py` — собирает `site/data.js` и страницу сверки `site/sverka.html`.
- `site/index.html` — сайт: Classic / NG, оглавление, «Проверь себя», макеты с метками.
- `tools/verify.py` — автоматическая сверка: каждая строка PDF найдена в данных и наоборот.
- `tools/pdf.js` — печать `Classic.pdf`, `NG.pdf`, `Сверка.pdf`.

Пересборка: `python3 build.py && node tools/pdf.js $PWD/site $PWD`
