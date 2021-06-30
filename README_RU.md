# expo-template-ts-eslint-prettier

Шаблонный проект с настроенными модулями, дебагером, линтерами, тестами и много чем еще!

Использование данного репозитория - простой способ быстро запустить проект с нуля, протестировать гипотезу/сделать `MVP`. Он также подходит для production-ready продукта/готовой базы компонентов на реакте при переносе на React Native с использованием фреймворка `Expo`.

Репозиторий основан на пустом шаблоне, сгенерированом с помощью [Expo-cli](https://docs.expo.io/workflow/expo-cli/). В проекте настроена поддержка TypeScript.

### Внедренные фичи на данный момент:

1. EsLint, Prettier, TypeScript;
2. Unit тестирование настроено по рекомендациям [Expo документации](https://docs.expo.io/guides/testing-with-jest/);
3. Стандартная конфигурация коммитов через Commitizen с поддержкой CLI: [Офф. документация](https://commitizen.github.io/cz-cli/). Для ее использования глобальная установка `не требуется`;
4. React-devtools - специальный модуль, позволяющий проводить процесс отладки приложения. Подробнее о запуске читать в разделе о командах (scripts из package.json).
5. Поддержка Styled-Components. Официальная документация [рекомендует](https://docs.expo.io/guides/using-styled-components/#getting-started) использовать пакет `styled-components/native` вместо `styled-components`:
   > Use `styled-components/native` instead of `styled-components`

Репозиторий поставляется как есть.
