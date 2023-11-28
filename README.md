# Сайт доступний за посиланням
https://victorchei.github.io/test-ui/

Розробка має вестися у вітці develop пісдя чого мержитися в master і там має виконуватися команда deploy(описано нижче)
!!! не потрбіно мержити з мастер у девелоп !!!

## Запуск проекту
Має бути налаштовані "npm": ">=8.0.0", "node": ">=18.0.0"

1. склонити проект https://github.com/victorchei/diploma.git
2. потрібно в 'src' створити папочку 'validator' - і туди покласти репозиторій дипломного проекту
3. встановити залежності `npm i`

### Запуск в режимі розробки
`npm run start`

### Запуск білду
`npm run build`

### Запуск режимі серверу
`serve -s build`

### Запуск тестів валідатора
`npm run test`

### Деплой з вітки master
`npm run deploy`

## Правила розробки
1) Розробка ведеться виключно на вітці `develop` зі створенням нових віток і подальшого мержу в `develop`
2) деплой виключно з вітки `master`


