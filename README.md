[English Version](README_en.md)

# Material Remnawave Subscription page

Данный репозиторий содержит исходный код страницы подписки для панели прокси Remnawave, выполненной в современном стиле Material Design 3. Страница предоставляет пользователям удобный доступ к информации о подписке, инструкциям по подключению и ссылкам. Код написан с помощью нейросети Claude Sonnet 4.

## Ключевые особенности

* **Дизайн Material 3:** Современный и интуитивно понятный пользовательский интерфейс, разработанный в соответствии с новейшими принципами Material Design 3.

* **Поддержка темной и светлой темы:** Автоматическое или ручное переключение между светлой и темной темами для комфортного использования в любых условиях освещения.

* **Гибкая настройка приложений:** Поддержка стандартного списка рекомендованных приложений для подключения, а также возможность легкой интеграции сторонних клиентов через [настраиваемый `app-config.json`](https://remna.st/docs/install/remnawave-subscription-page#custom-app-configjson-custom-apps).

* **Копирование индивидуальных ссылок:** Возможность копировать отдельные ссылки (например, `vless://`, `trojan://` ) непосредственно со страницы, помимо общей ссылки подписки.

* **Многоязычная поддержка:** Доступность страницы на русском и английском языках с автоматическим определением языка браузера.

## Скриншоты

<div align="center">
  <img src="./screenshots/apps-sections-select.jpg" width="75%" />
  <img src="./screenshots/apps-sections.jpg" width="75%" />
  <img src="./screenshots/user-status-sections.jpg" width="75%" />
  <img src="./screenshots/settings-sections.jpg" width="75%" />
  <img src="./screenshots/sub-links-sections.jpg" width="75%" />
</div>

## Установка

1. **Загрузка файла страницы:**
   Скачайте файл `index.html` в ту же папку, где находится ваш `docker-compose.yml`, используя `curl`:

```bash
curl -o index.html https://raw.githubusercontent.com/legiz-ru/material-remnawave-subscription-page/refs/heads/main/index.html
```

2. **Настройка Docker Compose:**
Пропишите путь к скачанному `index.html` в вашем `docker-compose.yml` через проброс `volumes` в контейнер `remnawave-subscription-page`.

Пример для стандартной установки:

```yaml
services:
  remnawave-subscription-page:
    image: remnawave/subscription-page:latest
    volumes:
      - ./index.html:/opt/app/frontend/index.html
```

Если вы планируете использовать [кастомный список приложений](https://remna.st/docs/install/remnawave-subscription-page#custom-app-configjson-custom-apps) (`app-config.json`), добавьте соответствующий `volume`:

```yaml
services:
  remnawave-subscription-page:
    image: remnawave/subscription-page:latest
    volumes:
      - ./index.html:/opt/app/frontend/index.html
      - ./app-config.json:/opt/app/frontend/assets/app-config.json
```

Вы можете воспользоваться одним из моих кастомных списков приложений, доступных по ссылке: [Список кастомных приложений](https://github.com/legiz-ru/my-remnawave/blob/main/README.md#remnawave-subscription-page-%D1%81lient-configuration)

3. **Перезапуск контейнера:**
Для применения изменений перезапустите контейнер Docker:

```bash
docker compose down remnawave-subscription-page && docker compose up -d remnawave-subscription-page
```

## Связь

* [[Telegram-канал](https://t.me/legiz_trashbag)]

## Поддержка проекта

Если вам нравится этот проект и вы хотите поддержать его развитие, вы можете сделать пожертвование:

* [[Tribute on Telegram](https://t.me/tribute/app?startapp=drzu)]