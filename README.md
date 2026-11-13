# Presentations
## Навыки Claude Code

В `.claude/settings.json` подключены 5 плагинов из гайда «Красивая презентация в Claude»:

| Навык | Плагин | Для чего |
|---|---|---|
| Frontend Slides | `frontend-slides@frontend-slides` | собирает слайды |
| UI UX Pro Max | `ui-ux-pro-max@ui-ux-pro-max-skill` | стиль, палитра, шрифты (нужен Python 3) |
| Impeccable | `impeccable@impeccable` | доводит дизайн |
| Humanizer | `humanizer@humanizer` | живой текст |
| PPTX (Document Skills) | `document-skills@anthropic-agent-skills` | файл .pptx для PowerPoint |

При открытии репозитория в Claude Code он предложит доверять проекту и установить эти плагины. Проверка: спроси «Какие навыки у тебя установлены?».

### Локальные копии навыков (`.claude/skills`)

Четыре навыка лежат прямо в проекте, поэтому работают без установки плагинов:

| Папка | Источник | Лицензия |
|---|---|---|
| `frontend-slides` | zarazhangrui/frontend-slides @ 9906a34 | MIT |
| `ui-ux-pro-max` | nextlevelbuilder/ui-ux-pro-max-skill @ 6ae86f6 | MIT |
| `impeccable` | pbakaus/impeccable @ b4bff16 | Apache 2.0 |
| `humanizer` | blader/humanizer @ b48c832 | MIT |

В `ui-ux-pro-max/SKILL.md` пути `${CLAUDE_PLUGIN_ROOT}/.claude/skills/ui-ux-pro-max` заменены на `${CLAUDE_SKILL_DIR}`, чтобы скрипты находились без плагина.
