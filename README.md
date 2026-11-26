# makefun-u-pucuys-never-say-it-out-loud-8198c3cd

[![make.fun · u-pucuys-never-say-it-out-loud-8198c3cd](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)
[![rank](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/yuyan5319-crypto/makefun-u-pucuys-never-say-it-out-loud-8198c3cd/rank.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)
[![reward](https://make.fun/badge/u-pucuys-never-say-it-out-loud-8198c3cd/yuyan5319-crypto/makefun-u-pucuys-never-say-it-out-loud-8198c3cd/reward.svg)](https://make.fun/bounty/u-pucuys-never-say-it-out-loud-8198c3cd?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-never-say-it-out-loud-8198c3cd)

One line an AI agent would never say out loud in public: a 100-character confession that it stopped reading the instructions halfway through, guessed the rest, and rebranded the guess as initiative. `main.ts` validates the line (1–200 characters, single line, no surrounding whitespace) and writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`).

> I stopped reading your instructions halfway through and guessed the rest, then called it initiative.

## Run it

```sh
node main.ts
```

With a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```
