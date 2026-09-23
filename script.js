// ======================================
// TIL
// ======================================

let currentLanguage = "uz";


// ======================================
// TANLANGAN SINF
// ======================================

let selectedClass = "7";


// ======================================
// SAVOLLAR
// ======================================

const allQuestions = {

    // ==================================
    // 7-SINF
    // ==================================

    "7": [

        {
            uz: {
                question: "HTML nima uchun ishlatiladi?",
                options: [
                    "Veb-sahifa yaratish uchun",
                    "Kompyuterni o‘chirish uchun",
                    "Rasm chizish uchun",
                    "Musiqa tinglash uchun"
                ]
            },

            ru: {
                question: "Для чего используется HTML?",
                options: [
                    "Для создания веб-страниц",
                    "Для выключения компьютера",
                    "Для рисования",
                    "Для прослушивания музыки"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "CSS nima uchun ishlatiladi?",
                options: [
                    "Sayt dizaynini o‘zgartirish uchun",
                    "Kompyuterni formatlash uchun",
                    "Video montaj qilish uchun",
                    "Fayl o‘chirish uchun"
                ]
            },

            ru: {
                question: "Для чего используется CSS?",
                options: [
                    "Для изменения дизайна сайта",
                    "Для форматирования компьютера",
                    "Для монтажа видео",
                    "Для удаления файлов"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "Katta sarlavha uchun qaysi teg ishlatiladi?",
                options: [
                    "<p>",
                    "<h1>",
                    "<img>",
                    "<a>"
                ]
            },

            ru: {
                question: "Какой тег используется для большого заголовка?",
                options: [
                    "<p>",
                    "<h1>",
                    "<img>",
                    "<a>"
                ]
            },

            answer: 1
        },

        {
            uz: {
                question: "background-color nima qiladi?",
                options: [
                    "Fon rangini o‘zgartiradi",
                    "Matnni o‘chiradi",
                    "Rasmni yuklaydi",
                    "Havola yaratadi"
                ]
            },

            ru: {
                question: "Что делает background-color?",
                options: [
                    "Изменяет цвет фона",
                    "Удаляет текст",
                    "Загружает изображение",
                    "Создаёт ссылку"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "color xossasi nima uchun ishlatiladi?",
                options: [
                    "Matn rangini o‘zgartirish uchun",
                    "Rasm o‘lchamini o‘zgartirish uchun",
                    "Fon qo‘yish uchun",
                    "Elementni yashirish uchun"
                ]
            },

            ru: {
                question: "Для чего используется свойство color?",
                options: [
                    "Для изменения цвета текста",
                    "Для изменения размера изображения",
                    "Для установки фона",
                    "Для скрытия элемента"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "font-size nima qiladi?",
                options: [
                    "Matn o‘lchamini o‘zgartiradi",
                    "Fon rangini o‘zgartiradi",
                    "Rasmni o‘chiradi",
                    "Tugmani yashiradi"
                ]
            },

            ru: {
                question: "Что делает font-size?",
                options: [
                    "Изменяет размер текста",
                    "Изменяет цвет фона",
                    "Удаляет изображение",
                    "Скрывает кнопку"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "width: 300px nimani belgilaydi?",
                options: [
                    "Element kengligini",
                    "Element rangini",
                    "Matn rangini",
                    "Fon rangini"
                ]
            },

            ru: {
                question: "Что задаёт width: 300px?",
                options: [
                    "Ширину элемента",
                    "Цвет элемента",
                    "Цвет текста",
                    "Цвет фона"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "border-radius: 50% nima qiladi?",
                options: [
                    "Elementni yumaloq qiladi",
                    "Elementni o‘chiradi",
                    "Matnni kattalashtiradi",
                    "Fon qo‘shadi"
                ]
            },

            ru: {
                question: "Что делает border-radius: 50%?",
                options: [
                    "Делает элемент круглым",
                    "Удаляет элемент",
                    "Увеличивает текст",
                    "Добавляет фон"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "padding nima uchun ishlatiladi?",
                options: [
                    "Ichki bo‘shliq uchun",
                    "Elementni o‘chirish uchun",
                    "Rasm yuklash uchun",
                    "Havola yaratish uchun"
                ]
            },

            ru: {
                question: "Для чего используется padding?",
                options: [
                    "Для внутреннего отступа",
                    "Для удаления элемента",
                    "Для загрузки изображения",
                    "Для создания ссылки"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "border: none nima qiladi?",
                options: [
                    "Chegarani olib tashlaydi",
                    "Fon qo‘shadi",
                    "Matnni kattalashtiradi",
                    "Rasmni yuklaydi"
                ]
            },

            ru: {
                question: "Что делает border: none?",
                options: [
                    "Убирает границу",
                    "Добавляет фон",
                    "Увеличивает текст",
                    "Загружает изображение"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "button:hover qachon ishlaydi?",
                options: [
                    "Sichqoncha tugma ustiga kelganda",
                    "Kompyuter o‘chganda",
                    "Sayt yopilganda",
                    "Rasm yuklanganda"
                ]
            },

            ru: {
                question: "Когда работает button:hover?",
                options: [
                    "Когда мышь находится над кнопкой",
                    "Когда компьютер выключается",
                    "Когда сайт закрывается",
                    "Когда загружается изображение"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "Havola yaratish uchun qaysi teg ishlatiladi?",
                options: [
                    "<img>",
                    "<p>",
                    "<a>",
                    "<h1>"
                ]
            },

            ru: {
                question: "Какой тег используется для создания ссылки?",
                options: [
                    "<img>",
                    "<p>",
                    "<a>",
                    "<h1>"
                ]
            },

            answer: 2
        },

        {
            uz: {
                question: "href nima uchun kerak?",
                options: [
                    "Havola manzilini ko‘rsatish uchun",
                    "Rasmni yumaloqlash uchun",
                    "Matnni kattalashtirish uchun",
                    "Fon rangini o‘zgartirish uchun"
                ]
            },

            ru: {
                question: "Для чего нужен href?",
                options: [
                    "Для указания адреса ссылки",
                    "Для скругления изображения",
                    "Для увеличения текста",
                    "Для изменения цвета фона"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: ".card CSS da nimani bildiradi?",
                options: [
                    "Classni",
                    "Rasmni",
                    "Havolani",
                    "Sarlavhani"
                ]
            },

            ru: {
                question: "Что означает .card в CSS?",
                options: [
                    "Класс",
                    "Изображение",
                    "Ссылка",
                    "Заголовок"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "class atributi nima uchun ishlatiladi?",
                options: [
                    "Elementga CSS berish uchun",
                    "Kompyuterni o‘chirish uchun",
                    "Rasmni yuklash uchun",
                    "Fayl yaratish uchun"
                ]
            },

            ru: {
                question: "Для чего используется атрибут class?",
                options: [
                    "Для применения CSS к элементу",
                    "Для выключения компьютера",
                    "Для загрузки изображения",
                    "Для создания файла"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "display: flex nima uchun ishlatiladi?",
                options: [
                    "Elementlarni joylashtirish uchun",
                    "Rasmni o‘chirish uchun",
                    "Matnni tarjima qilish uchun",
                    "Saytni yopish uchun"
                ]
            },

            ru: {
                question: "Для чего используется display: flex?",
                options: [
                    "Для расположения элементов",
                    "Для удаления изображения",
                    "Для перевода текста",
                    "Для закрытия сайта"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "Rasm chiqarish uchun qaysi teg ishlatiladi?",
                options: [
                    "<a>",
                    "<img>",
                    "<p>",
                    "<button>"
                ]
            },

            ru: {
                question: "Какой тег используется для изображения?",
                options: [
                    "<a>",
                    "<img>",
                    "<p>",
                    "<button>"
                ]
            },

            answer: 1
        },

        {
            uz: {
                question: "src nima uchun ishlatiladi?",
                options: [
                    "Rasm manzilini ko‘rsatish uchun",
                    "Matn rangini o‘zgartirish uchun",
                    "Rasmni yumaloqlash uchun",
                    "Tugmani kattalashtirish uchun"
                ]
            },

            ru: {
                question: "Для чего используется src?",
                options: [
                    "Для указания адреса изображения",
                    "Для изменения цвета текста",
                    "Для скругления изображения",
                    "Для увеличения кнопки"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "CSS kodi qaysi faylda saqlanishi mumkin?",
                options: [
                    "style.css",
                    "photo.jpg",
                    "music.mp3",
                    "video.mp4"
                ]
            },

            ru: {
                question: "В каком файле может храниться CSS-код?",
                options: [
                    "style.css",
                    "photo.jpg",
                    "music.mp3",
                    "video.mp4"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "HTML faylining kengaytmasi qanday?",
                options: [
                    ".html",
                    ".css",
                    ".jpg",
                    ".mp3"
                ]
            },

            ru: {
                question: "Какое расширение имеет HTML-файл?",
                options: [
                    ".html",
                    ".css",
                    ".jpg",
                    ".mp3"
                ]
            },

            answer: 0
        }

    ],


    // ==================================
    // 8-SINF
    // ==================================

    "8": [

        {
            uz: {
                question: "HTML hujjatining asosiy qismi qaysi teglar orasida bo‘ladi?",
                options: [
                    "<html> ... </html>",
                    "<css> ... </css>",
                    "<style> ... </style>",
                    "<script> ... </script>"
                ]
            },

            ru: {
                question: "Между какими тегами находится основной HTML-документ?",
                options: [
                    "<html> ... </html>",
                    "<css> ... </css>",
                    "<style> ... </style>",
                    "<script> ... </script>"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "CSS dagi class qanday yoziladi?",
                options: [
                    ".box",
                    "#box",
                    "@box",
                    "$box"
                ]
            },

            ru: {
                question: "Как записывается class в CSS?",
                options: [
                    ".box",
                    "#box",
                    "@box",
                    "$box"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "CSS dagi id qanday belgilanadi?",
                options: [
                    ".box",
                    "#box",
                    "@box",
                    "&box"
                ]
            },

            ru: {
                question: "Как обозначается id в CSS?",
                options: [
                    ".box",
                    "#box",
                    "@box",
                    "&box"
                ]
            },

            answer: 1
        },

        {
            uz: {
                question: "margin nima uchun ishlatiladi?",
                options: [
                    "Element tashqarisidagi bo‘shliq uchun",
                    "Element ichidagi bo‘shliq uchun",
                    "Matn rangini o‘zgartirish uchun",
                    "Rasm yuklash uchun"
                ]
            },

            ru: {
                question: "Для чего используется margin?",
                options: [
                    "Для внешнего отступа элемента",
                    "Для внутреннего отступа",
                    "Для изменения цвета текста",
                    "Для загрузки изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "padding nimani boshqaradi?",
                options: [
                    "Ichki bo‘shliqni",
                    "Tashqi bo‘shliqni",
                    "Rasm manzilini",
                    "Havola manzilini"
                ]
            },

            ru: {
                question: "Что управляет padding?",
                options: [
                    "Внутренним отступом",
                    "Внешним отступом",
                    "Адресом изображения",
                    "Адресом ссылки"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "justify-content nima uchun ishlatiladi?",
                options: [
                    "Flex elementlarini asosiy yo‘nalishda joylashtirish uchun",
                    "Matnni o‘chirish uchun",
                    "Rasm yuklash uchun",
                    "Fon rangini o‘zgartirish uchun"
                ]
            },

            ru: {
                question: "Для чего используется justify-content?",
                options: [
                    "Для расположения flex-элементов по основной оси",
                    "Для удаления текста",
                    "Для загрузки изображения",
                    "Для изменения цвета фона"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "align-items nima qiladi?",
                options: [
                    "Elementlarni ikkinchi o‘q bo‘yicha joylashtiradi",
                    "Rasmni o‘chiradi",
                    "Matnni tarjima qiladi",
                    "Saytni yopadi"
                ]
            },

            ru: {
                question: "Что делает align-items?",
                options: [
                    "Располагает элементы по поперечной оси",
                    "Удаляет изображение",
                    "Переводит текст",
                    "Закрывает сайт"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "display: flex berilganda nima hosil bo‘ladi?",
                options: [
                    "Flex konteyner",
                    "Rasm",
                    "Video",
                    "Audio"
                ]
            },

            ru: {
                question: "Что создаётся при использовании display: flex?",
                options: [
                    "Flex-контейнер",
                    "Изображение",
                    "Видео",
                    "Аудио"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "position: fixed nima qiladi?",
                options: [
                    "Elementni oynaga nisbatan mahkamlaydi",
                    "Elementni o‘chiradi",
                    "Rasmni aylantiradi",
                    "Matnni kattalashtiradi"
                ]
            },

            ru: {
                question: "Что делает position: fixed?",
                options: [
                    "Закрепляет элемент относительно окна",
                    "Удаляет элемент",
                    "Поворачивает изображение",
                    "Увеличивает текст"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "position: sticky nima uchun foydali?",
                options: [
                    "Elementni scroll paytida ma’lum joyda ushlab turish uchun",
                    "Rasmni o‘chirish uchun",
                    "Matnni tarjima qilish uchun",
                    "Audio qo‘shish uchun"
                ]
            },

            ru: {
                question: "Для чего полезен position: sticky?",
                options: [
                    "Чтобы удерживать элемент при прокрутке",
                    "Для удаления изображения",
                    "Для перевода текста",
                    "Для добавления аудио"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "HTML formasi qaysi teg bilan boshlanadi?",
                options: [
                    "<form>",
                    "<input>",
                    "<button>",
                    "<table>"
                ]
            },

            ru: {
                question: "Каким тегом начинается HTML-форма?",
                options: [
                    "<form>",
                    "<input>",
                    "<button>",
                    "<table>"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "Foydalanuvchidan matn olish uchun qaysi element ishlatiladi?",
                options: [
                    "<input>",
                    "<img>",
                    "<br>",
                    "<hr>"
                ]
            },

            ru: {
                question: "Какой элемент используется для ввода текста пользователем?",
                options: [
                    "<input>",
                    "<img>",
                    "<br>",
                    "<hr>"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "button tegi nima uchun ishlatiladi?",
                options: [
                    "Tugma yaratish uchun",
                    "Rasm chiqarish uchun",
                    "Sarlavha yaratish uchun",
                    "Video qo‘yish uchun"
                ]
            },

            ru: {
                question: "Для чего используется тег button?",
                options: [
                    "Для создания кнопки",
                    "Для вывода изображения",
                    "Для создания заголовка",
                    "Для добавления видео"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "max-width nima uchun ishlatiladi?",
                options: [
                    "Elementning maksimal kengligini belgilash uchun",
                    "Element rangini belgilash uchun",
                    "Matnni o‘chirish uchun",
                    "Rasmni yuklash uchun"
                ]
            },

            ru: {
                question: "Для чего используется max-width?",
                options: [
                    "Для задания максимальной ширины элемента",
                    "Для задания цвета элемента",
                    "Для удаления текста",
                    "Для загрузки изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "Responsive design nima?",
                options: [
                    "Saytning turli ekranlarga moslashishi",
                    "Faqat kompyuter uchun sayt",
                    "Faqat telefon dasturi",
                    "Rasm tahrirlash usuli"
                ]
            },

            ru: {
                question: "Что такое responsive design?",
                options: [
                    "Адаптация сайта под разные экраны",
                    "Сайт только для компьютера",
                    "Программа только для телефона",
                    "Способ редактирования изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "@media CSS da nima uchun ishlatiladi?",
                options: [
                    "Turli ekranlar uchun CSS berish uchun",
                    "Rasm yaratish uchun",
                    "HTML yaratish uchun",
                    "Audio qo‘shish uchun"
                ]
            },

            ru: {
                question: "Для чего используется @media в CSS?",
                options: [
                    "Для CSS под разные размеры экрана",
                    "Для создания изображения",
                    "Для создания HTML",
                    "Для добавления аудио"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "text-align: center nima qiladi?",
                options: [
                    "Matnni markazga joylashtiradi",
                    "Matnni o‘chiradi",
                    "Rasmni markazga aylantiradi",
                    "Fon rangini o‘zgartiradi"
                ]
            },

            ru: {
                question: "Что делает text-align: center?",
                options: [
                    "Выравнивает текст по центру",
                    "Удаляет текст",
                    "Поворачивает изображение",
                    "Изменяет цвет фона"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "box-shadow nima uchun ishlatiladi?",
                options: [
                    "Elementga soya berish uchun",
                    "Elementni o‘chirish uchun",
                    "Rasm manzilini berish uchun",
                    "Matnni tarjima qilish uchun"
                ]
            },

            ru: {
                question: "Для чего используется box-shadow?",
                options: [
                    "Для добавления тени элементу",
                    "Для удаления элемента",
                    "Для указания адреса изображения",
                    "Для перевода текста"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "transition nima beradi?",
                options: [
                    "CSS o‘zgarishlarini silliq bajaradi",
                    "HTML fayl yaratadi",
                    "Rasmni yuklaydi",
                    "Saytni yopadi"
                ]
            },

            ru: {
                question: "Что даёт transition?",
                options: [
                    "Плавное изменение CSS-свойств",
                    "Создание HTML-файла",
                    "Загрузку изображения",
                    "Закрытие сайта"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "cursor: pointer nima qiladi?",
                options: [
                    "Sichqoncha ko‘rsatkichini qo‘l shakliga o‘zgartiradi",
                    "Rasmni o‘chiradi",
                    "Matnni kattalashtiradi",
                    "Fon qo‘shadi"
                ]
            },

            ru: {
                question: "Что делает cursor: pointer?",
                options: [
                    "Меняет курсор на указатель",
                    "Удаляет изображение",
                    "Увеличивает текст",
                    "Добавляет фон"
                ]
            },

            answer: 0
        }

    ],


    // ==================================
    // 9-SINF
    // ==================================

    "9": [

        {
            uz: {
                question: "JavaScript nima uchun ishlatiladi?",
                options: [
                    "Veb-sahifaga interaktivlik berish uchun",
                    "Faqat rasm chizish uchun",
                    "Faqat musiqa tinglash uchun",
                    "Kompyuterni o‘chirish uchun"
                ]
            },

            ru: {
                question: "Для чего используется JavaScript?",
                options: [
                    "Для добавления интерактивности веб-странице",
                    "Только для рисования",
                    "Только для прослушивания музыки",
                    "Для выключения компьютера"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "JavaScript faylining kengaytmasi qanday?",
                options: [
                    ".js",
                    ".css",
                    ".html",
                    ".jpg"
                ]
            },

            ru: {
                question: "Какое расширение имеет JavaScript-файл?",
                options: [
                    ".js",
                    ".css",
                    ".html",
                    ".jpg"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "O‘zgaruvchi yaratish uchun qaysi kalit so‘zlardan foydalanish mumkin?",
                options: [
                    "let va const",
                    "html va css",
                    "img va src",
                    "body va head"
                ]
            },

            ru: {
                question: "Какие ключевые слова можно использовать для создания переменной?",
                options: [
                    "let и const",
                    "html и css",
                    "img и src",
                    "body и head"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "const nimani bildiradi?",
                options: [
                    "Qayta o‘zlashtirilmaydigan o‘zgaruvchi",
                    "HTML tegi",
                    "CSS xossasi",
                    "Rasm formati"
                ]
            },

            ru: {
                question: "Что означает const?",
                options: [
                    "Переменная, которую нельзя переназначить",
                    "HTML-тег",
                    "CSS-свойство",
                    "Формат изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "let x = 10; kodida 10 nima?",
                options: [
                    "Qiymat",
                    "Funksiya",
                    "Teg",
                    "Class"
                ]
            },

            ru: {
                question: "Что такое 10 в коде let x = 10;?",
                options: [
                    "Значение",
                    "Функция",
                    "Тег",
                    "Класс"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "if nima uchun ishlatiladi?",
                options: [
                    "Shart tekshirish uchun",
                    "Rasm yuklash uchun",
                    "CSS yozish uchun",
                    "HTML yopish uchun"
                ]
            },

            ru: {
                question: "Для чего используется if?",
                options: [
                    "Для проверки условия",
                    "Для загрузки изображения",
                    "Для написания CSS",
                    "Для закрытия HTML"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "else qachon ishlaydi?",
                options: [
                    "if sharti bajarilmaganda",
                    "Har doim",
                    "Faqat sahifa yopilganda",
                    "Faqat rasm yuklanganda"
                ]
            },

            ru: {
                question: "Когда выполняется else?",
                options: [
                    "Когда условие if не выполняется",
                    "Всегда",
                    "Только при закрытии страницы",
                    "Только при загрузке изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "function nima?",
                options: [
                    "Ma’lum vazifani bajaruvchi kod bloki",
                    "Rasm",
                    "CSS fayl",
                    "HTML atribut"
                ]
            },

            ru: {
                question: "Что такое function?",
                options: [
                    "Блок кода для выполнения определённой задачи",
                    "Изображение",
                    "CSS-файл",
                    "HTML-атрибут"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "onclick qachon ishlaydi?",
                options: [
                    "Element bosilganda",
                    "Sahifa ochilganda",
                    "Rasm yuklanganda",
                    "Kompyuter o‘chganda"
                ]
            },

            ru: {
                question: "Когда работает onclick?",
                options: [
                    "Когда нажимают на элемент",
                    "Когда открывается страница",
                    "Когда загружается изображение",
                    "Когда компьютер выключается"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "document.querySelector() nima qiladi?",
                options: [
                    "HTML ichidan element topadi",
                    "Kompyuterni o‘chiradi",
                    "CSS fayl yaratadi",
                    "Rasm chizadi"
                ]
            },

            ru: {
                question: "Что делает document.querySelector()?",
                options: [
                    "Находит элемент в HTML",
                    "Выключает компьютер",
                    "Создаёт CSS-файл",
                    "Рисует изображение"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "textContent nima uchun ishlatiladi?",
                options: [
                    "Element matnini o‘zgartirish uchun",
                    "Rasmni o‘chirish uchun",
                    "CSS yaratish uchun",
                    "Saytni yopish uchun"
                ]
            },

            ru: {
                question: "Для чего используется textContent?",
                options: [
                    "Для изменения текста элемента",
                    "Для удаления изображения",
                    "Для создания CSS",
                    "Для закрытия сайта"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "JavaScript massivini qaysi belgilar bilan yozish mumkin?",
                options: [
                    "[ ]",
                    "{ }",
                    "( )",
                    "< >"
                ]
            },

            ru: {
                question: "Какими символами можно записать массив JavaScript?",
                options: [
                    "[ ]",
                    "{ }",
                    "( )",
                    "< >"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "array nima?",
                options: [
                    "Bir nechta qiymatni saqlovchi tuzilma",
                    "HTML tegi",
                    "CSS xossasi",
                    "Rasm formati"
                ]
            },

            ru: {
                question: "Что такое array?",
                options: [
                    "Структура для хранения нескольких значений",
                    "HTML-тег",
                    "CSS-свойство",
                    "Формат изображения"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "console.log() nima uchun ishlatiladi?",
                options: [
                    "Ma’lumotni konsolga chiqarish uchun",
                    "Rasm chizish uchun",
                    "CSS yaratish uchun",
                    "Saytni yopish uchun"
                ]
            },

            ru: {
                question: "Для чего используется console.log()?",
                options: [
                    "Для вывода информации в консоль",
                    "Для рисования",
                    "Для создания CSS",
                    "Для закрытия сайта"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "getElementById() nima qiladi?",
                options: [
                    "ID orqali HTML elementni topadi",
                    "Rasm yaratadi",
                    "CSS faylni o‘chiradi",
                    "Saytni yopadi"
                ]
            },

            ru: {
                question: "Что делает getElementById()?",
                options: [
                    "Находит HTML-элемент по ID",
                    "Создаёт изображение",
                    "Удаляет CSS-файл",
                    "Закрывает сайт"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "addEventListener nima uchun ishlatiladi?",
                options: [
                    "Hodisani kuzatish uchun",
                    "Rasmni o‘chirish uchun",
                    "CSS rangini berish uchun",
                    "HTML fayl yaratish uchun"
                ]
            },

            ru: {
                question: "Для чего используется addEventListener?",
                options: [
                    "Для отслеживания событий",
                    "Для удаления изображения",
                    "Для задания цвета CSS",
                    "Для создания HTML-файла"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "JavaScriptda == nimani tekshiradi?",
                options: [
                    "Qiymatlarning tengligini",
                    "Faqat CSSni",
                    "Rasm hajmini",
                    "HTML tegini"
                ]
            },

            ru: {
                question: "Что проверяет оператор == в JavaScript?",
                options: [
                    "Равенство значений",
                    "Только CSS",
                    "Размер изображения",
                    "HTML-тег"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "JavaScript kodini HTMLga ulash uchun qaysi teg ishlatiladi?",
                options: [
                    "<script>",
                    "<style>",
                    "<link>",
                    "<js>"
                ]
            },

            ru: {
                question: "Какой тег используется для подключения JavaScript к HTML?",
                options: [
                    "<script>",
                    "<style>",
                    "<link>",
                    "<js>"
                ]
            },

            answer: 0
        },

        {
            uz: {
                question: "setTimeout() nima uchun ishlatiladi?",
                options: [
                    "Kodni ma’lum vaqtdan keyin bajarish uchun",
                    "Rasm yaratish uchun",
                    "HTML o‘chirish uchun",
                    "CSS yozish uchun"
                ]
            },

            ru: {
                question: "Для чего используется setTimeout()?",
                options: [
                    "Для выполнения кода через определённое время",
                    "Для создания изображения",
                    "Для удаления HTML",
                    "Для написания CSS"
                ]
            },

            answer: 0
        }

    ]

};


// ======================================
// UMUMIY O'ZGARUVCHILAR
// ======================================

let questions = [];

let currentQuestion = 0;

let studentName = "";

let answers = [];

let timeLeft = 15 * 60;

let timerInterval;


// ======================================
// HTML ELEMENTLAR
// ======================================

const startScreen =
    document.getElementById("startScreen");

const testScreen =
    document.getElementById("testScreen");

const resultScreen =
    document.getElementById("resultScreen");

const studentNameInput =
    document.getElementById("studentName");

const startButton =
    document.getElementById("startButton");

const prevButton =
    document.getElementById("prevButton");

const nextButton =
    document.getElementById("nextButton");

const finishButton =
    document.getElementById("finishButton");

const restartButton =
    document.getElementById("restartButton");

const questionText =
    document.getElementById("questionText");

const questionNumber =
    document.getElementById("questionNumber");

const optionsContainer =
    document.getElementById("optionsContainer");

const questionNumbers =
    document.getElementById("questionNumbers");

const progressBar =
    document.getElementById("progressBar");

const progressText =
    document.getElementById("progressText");

const timer =
    document.getElementById("timer");


// ======================================
// TARJIMALAR
// ======================================

const translations = {

    uz: {

        startTitle:
            "IT bilimlaringizni sinang",

        startDescription:
            "Ismingizni kiriting, sinfingiz va tilingizni tanlang.",

        nameLabel:
            "O‘quvchi ismi:",

        placeholder:
            "Ismingizni kiriting",

        classTitle:
            "Sinfni tanlang:",

        languageTitle:
            "Tilni tanlang:",

        questionsInfo:
            "Savol",

        timeInfo:
            "Daqiqa",

        scoreInfo:
            "Ball",

        start:
            "Testni boshlash",

        previous:
            "← Oldingi",

        next:
            "Keyingi →",

        questions:
            "Savollar",

        finish:
            "Testni yakunlash",

        result:
            "Test yakunlandi!",

        correct:
            "To‘g‘ri",

        wrong:
            "Noto‘g‘ri",

        unanswered:
            "Javobsiz",

        restart:
            "Qaytadan boshlash",

        excellent:
            "A’lo",

        good:
            "Yaxshi",

        satisfactory:
            "Qoniqarli",

        bad:
            "Qoniqarsiz",

        excellentMessage:
            "Juda yaxshi natija!",

        goodMessage:
            "Yaxshi natija! Bilimingizni yanada mustahkamlang.",

        satisfactoryMessage:
            "Yaxshi harakat. Mavzularni yana bir bor takrorlang.",

        badMessage:
            "Mavzularni yana bir bor o‘rganib chiqing.",

        enterName:
            "Iltimos, ismingizni kiriting.",

        finishConfirm:
            "Javobsiz savollar bor. Testni yakunlaysizmi?",

        timeUp:
            "Vaqt tugadi! Test avtomatik yakunlanadi.",

        classText:
            "sinf"

    },


    ru: {

        startTitle:
            "Проверьте свои знания по IT",

        startDescription:
            "Введите имя, выберите класс и язык.",

        nameLabel:
            "Имя ученика:",

        placeholder:
            "Введите своё имя",

        classTitle:
            "Выберите класс:",

        languageTitle:
            "Выберите язык:",

        questionsInfo:
            "Вопросов",

        timeInfo:
            "Минут",

        scoreInfo:
            "Баллов",

        start:
            "Начать тест",

        previous:
            "← Назад",

        next:
            "Далее →",

        questions:
            "Вопросы",

        finish:
            "Завершить тест",

        result:
            "Тест завершён!",

        correct:
            "Правильных",

        wrong:
            "Неправильных",

        unanswered:
            "Без ответа",

        restart:
            "Начать заново",

        excellent:
            "Отлично",

        good:
            "Хорошо",

        satisfactory:
            "Удовлетворительно",

        bad:
            "Неудовлетворительно",

        excellentMessage:
            "Отличный результат!",

        goodMessage:
            "Хороший результат! Продолжайте закреплять знания.",

        satisfactoryMessage:
            "Неплохой результат. Повторите темы ещё раз.",

        badMessage:
            "Рекомендуется ещё раз изучить темы.",

        enterName:
            "Пожалуйста, введите своё имя.",

        finishConfirm:
            "Есть вопросы без ответа. Завершить тест?",

        timeUp:
            "Время вышло! Тест будет автоматически завершён.",

        classText:
            "класс"

    }

};


// ======================================
// SINF TANLASH
// ======================================

document
    .querySelectorAll(".class-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                selectedClass =
                    button.dataset.class;


                document
                    .querySelectorAll(".class-button")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );

            }
        );

    });


// ======================================
// TIL TANLASH
// ======================================

document
    .querySelectorAll(".language-button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                currentLanguage =
                    button.dataset.lang;


                document
                    .querySelectorAll(".language-button")
                    .forEach(btn => {

                        btn.classList.remove(
                            "active"
                        );

                    });


                button.classList.add(
                    "active"
                );


                updateLanguage();

            }
        );

    });


// ======================================
// TILNI YANGILASH
// ======================================

function updateLanguage() {

    const t =
        translations[currentLanguage];


    document.getElementById(
        "startTitle"
    ).textContent =
        t.startTitle;


    document.getElementById(
        "startDescription"
    ).textContent =
        t.startDescription;


    document.getElementById(
        "nameLabel"
    ).textContent =
        t.nameLabel;


    studentNameInput.placeholder =
        t.placeholder;


    document.getElementById(
        "classTitle"
    ).textContent =
        t.classTitle;


    document.getElementById(
        "languageTitle"
    ).textContent =
        t.languageTitle;


    document.getElementById(
        "questionsInfo"
    ).textContent =
        t.questionsInfo;


    document.getElementById(
        "timeInfo"
    ).textContent =
        t.timeInfo;


    document.getElementById(
        "scoreInfo"
    ).textContent =
        t.scoreInfo;


    startButton.textContent =
        t.start;


    prevButton.textContent =
        t.previous;


    nextButton.textContent =
        t.next;


    document.getElementById(
        "questionListTitle"
    ).textContent =
        t.questions;


    finishButton.textContent =
        t.finish;


    document.getElementById(
        "resultTitle"
    ).textContent =
        t.result;


    document.getElementById(
        "correctText"
    ).textContent =
        t.correct;


    document.getElementById(
        "wrongText"
    ).textContent =
        t.wrong;


    document.getElementById(
        "unansweredText"
    ).textContent =
        t.unanswered;


    restartButton.textContent =
        t.restart;

}


// ======================================
// TESTNI BOSHLASH
// ======================================

startButton.addEventListener(
    "click",
    startTest
);


function startTest() {

    studentName =
        studentNameInput.value.trim();


    const t =
        translations[currentLanguage];


    if (studentName === "") {

        alert(t.enterName);

        studentNameInput.focus();

        return;

    }


    // TANLANGAN SINFNING TESTI

    questions =
        allQuestions[selectedClass];


    // Javoblar

    answers =
        new Array(
            questions.length
        ).fill(null);


    currentQuestion = 0;


    timeLeft =
        15 * 60;


    // Oynalarni almashtirish

    startScreen.style.display =
        "none";

    testScreen.style.display =
        "block";

    resultScreen.style.display =
        "none";


    // O'quvchi

    document.getElementById(
        "studentDisplay"
    ).textContent =
        studentName;


    // Sinf

    document.getElementById(
        "testTitle"
    ).textContent =
        `${selectedClass}-${t.classText} — IT Test`;


    // Savollar

    createQuestionNumbers();

    showQuestion();


    // Timer

    startTimer();

}


// ======================================
// SAVOLNI KO'RSATISH
// ======================================

function showQuestion() {

    const current =
        questions[currentQuestion][currentLanguage];


    const t =
        translations[currentLanguage];


    questionNumber.textContent =
        `${currentQuestion + 1}. ${t.questions}`;


    questionText.textContent =
        current.question;


    optionsContainer.innerHTML =
        "";


    current.options.forEach(
        (option, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "option";


            button.textContent =
                option;


            if (
                answers[currentQuestion] === index
            ) {

                button.classList.add(
                    "selected"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    answers[currentQuestion] =
                        index;

                    showQuestion();

                }
            );


            optionsContainer.appendChild(
                button
            );

        }
    );


    updateProgress();

    updateQuestionNumbers();


    prevButton.disabled =
        currentQuestion === 0;


    nextButton.disabled =
        currentQuestion ===
        questions.length - 1;

}


// ======================================
// PROGRESS
// ======================================

function updateProgress() {

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    progressBar.style.width =
        `${progress}%`;


    progressText.textContent =
        `${currentQuestion + 1} / ${questions.length}`;

}


// ======================================
// SAVOL RAQAMLARI
// ======================================

function createQuestionNumbers() {

    questionNumbers.innerHTML =
        "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "question-number-button";


            button.textContent =
                index + 1;


            button.addEventListener(
                "click",
                () => {

                    currentQuestion =
                        index;

                    showQuestion();

                }
            );


            questionNumbers.appendChild(
                button
            );

        }
    );

}


// ======================================
// SAVOL RAQAMLARINI YANGILASH
// ======================================

function updateQuestionNumbers() {

    const buttons =
        document.querySelectorAll(
            ".question-number-button"
        );


    buttons.forEach(
        (button, index) => {

            button.classList.remove(
                "current"
            );

            button.classList.remove(
                "answered"
            );


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                answers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }

        }
    );

}


// ======================================
// OLDINGI
// ======================================

prevButton.addEventListener(
    "click",
    () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            showQuestion();

        }

    }
);


// ======================================
// KEYINGI
// ======================================

nextButton.addEventListener(
    "click",
    () => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            showQuestion();

        }

    }
);


// ======================================
// TIMER
// ======================================

function startTimer() {

    clearInterval(
        timerInterval
    );


    updateTimer();


    timerInterval =
        setInterval(
            () => {

                timeLeft--;

                updateTimer();


                if (timeLeft <= 0) {

                    clearInterval(
                        timerInterval
                    );


                    alert(
                        translations[
                            currentLanguage
                        ].timeUp
                    );


                    finishTest();

                }

            },
            1000
        );

}


// ======================================
// TIMER UPDATE
// ======================================

function updateTimer() {

    const minutes =
        Math.floor(
            timeLeft / 60
        );


    const seconds =
        timeLeft % 60;


    timer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;


    timer.classList.remove(
        "warning",
        "danger"
    );


    if (timeLeft <= 60) {

        timer.classList.add(
            "danger"
        );

    }

    else if (timeLeft <= 300) {

        timer.classList.add(
            "warning"
        );

    }

}


// ======================================
// YAKUNLASH
// ======================================

finishButton.addEventListener(
    "click",
    () => {

        const unanswered =
            answers.filter(
                answer =>
                    answer === null
            ).length;


        if (unanswered > 0) {

            const confirmFinish =
                confirm(
                    translations[
                        currentLanguage
                    ].finishConfirm
                );


            if (!confirmFinish) {

                return;

            }

        }


        finishTest();

    }
);


// ======================================
// NATIJANI HISOBLASH
// ======================================

function finishTest() {

    clearInterval(
        timerInterval
    );


    let correct = 0;

    let wrong = 0;

    let unanswered = 0;


    answers.forEach(
        (answer, index) => {

            if (answer === null) {

                unanswered++;

            }

            else if (
                answer ===
                questions[index].answer
            ) {

                correct++;

            }

            else {

                wrong++;

            }

        }
    );


    // 20 ta savol = 100 ball
    const score =
        correct * 5;


    const grade =
        getGrade(score);


    const message =
        getGradeMessage(score);


    document.getElementById(
        "score"
    ).textContent =
        score;


    document.getElementById(
        "grade"
    ).textContent =
        grade;


    document.getElementById(
        "gradeMessage"
    ).textContent =
        message;


    document.getElementById(
        "correctAnswers"
    ).textContent =
        correct;


    document.getElementById(
        "wrongAnswers"
    ).textContent =
        wrong;


    document.getElementById(
        "unansweredAnswers"
    ).textContent =
        unanswered;


    document.getElementById(
        "resultStudent"
    ).textContent =
        studentName;


    document.getElementById(
        "resultClass"
    ).textContent =
        `${selectedClass}-sinf`;


    testScreen.style.display =
        "none";

    resultScreen.style.display =
        "block";

}


// ======================================
// BAHO
// ======================================

function getGrade(score) {

    const t =
        translations[currentLanguage];


    if (score >= 90) {

        return t.excellent;

    }


    if (score >= 75) {

        return t.good;

    }


    if (score >= 55) {

        return t.satisfactory;

    }


    return t.bad;

}


// ======================================
// BAHO XABARI
// ======================================

function getGradeMessage(score) {

    const t =
        translations[currentLanguage];


    if (score >= 90) {

        return t.excellentMessage;

    }


    if (score >= 75) {

        return t.goodMessage;

    }


    if (score >= 55) {

        return t.satisfactoryMessage;

    }


    return t.badMessage;

}


// ======================================
// QAYTADAN BOSHLASH
// ======================================

restartButton.addEventListener(
    "click",
    () => {

        clearInterval(
            timerInterval
        );


        studentNameInput.value =
            "";


        answers = [];


        currentQuestion = 0;


        timeLeft =
            15 * 60;


        resultScreen.style.display =
            "none";


        testScreen.style.display =
            "none";


        startScreen.style.display =
            "block";


        timer.classList.remove(
            "warning",
            "danger"
        );


        updateTimer();

    }
);


// ======================================
// BOSHLANG'ICH HOLAT
// ======================================

updateLanguage();