import Test from "src/models/test";

const Tests: Test[] = [
    {
        name: 'Математическая статистика',
        questions: [
            {
            question: 'Что такое выборка в контексте математической статистики?',
            answer:2,
            options: [
                'Набор всех элементов генеральной совокупности.',
                'Набор наблюдений, полученных из генеральной совокупности.',
                'Среднее значение генеральной совокупности.',
                'Стандартное отклонение генеральной совокупности.'
            ]  
            },
            {
                question: 'Что такое статистика?',
                answer:3,
                options: [
                    'Набор данных.',
                    'Описание генеральной совокупности.',
                    'Функция от выборки.',
                    'Среднее значение выборки.'
                ]  
            },
            {
                question: 'Что представляет собой доверительный интервал?',
                answer:1,
                options: [
                    'Интервал, в котором с определенной вероятностью содержится параметр генеральной совокупности.',
                    'Интервал, в котором с определенной вероятностью содержится параметр выборки.',
                    'Интервал, в котором с уверенностью 100% содержится параметр генеральной совокупности.',
                    'Интервал, в котором точно содержится среднее значение выборки.'
                ]
            },
            {
                question: 'Что такое p-значение в контексте статистики?',
                answer:3,
                options: [
                    'Вероятность ошибки первого рода.',
                    'Вероятность ошибки второго рода.',
                    'Вероятность получить наблюдаемый результат или более экстремальный при условии, что нулевая гипотеза верна.',
                    'Уровень значимости.'
                ]
            },
            {
                question: 'Что такое нулевая гипотеза (H0) в статистике?',
                answer:2,
                options: [
                    'Гипотеза, которую мы пытаемся подтвердить.',
                    'Гипотеза, которую мы пытаемся опровергнуть.',
                    'Среднее значение выборки.',
                    'Интервал, в котором содержится параметр генеральной совокупности.'
                ]
            },
            {
                question: 'Какова цель t-критерия в статистике?',
                answer:2,
                options: [
                    'Проверка равенства дисперсий двух выборок.',
                    'Проверка равенства средних значений двух независимых выборок.',
                    'Проверка наличия корреляции между двумя переменными.',
                    'Ранжирование данных выборки.'
                ]
            },
            {
                question: 'Что такое корреляция в статистике?',
                answer:2,
                options: [
                    'Отношение между дисперсией и средним значением выборки.',
                    'Взаимосвязь между двумя (или более) переменными.',
                    'Интервал, в котором с определенной вероятностью содержится параметр генеральной совокупности.',
                    'Способ проверки гипотезы о равенстве средних значений.'
                ]
            },
            {
                question: 'Что такое ошибки первого и второго рода в статистике?',
                answer:3,
                options: [
                    'Ошибки при вычислении среднего значения выборки.',
                    'Ошибки при расчете доверительного интервала.',
                    'Ошибки при принятии или отклонении нулевой гипотезы.',
                    'Ошибки при использовании t-критерия.'
                ]
            },
            {
                question: 'Что такое коэффициент детерминации (R²) в контексте регрессионного анализа?',
                answer:2,
                options: [
                    'Вероятность ошибки первого рода.',
                    'Процент вариации зависимой переменной, объясненный моделью.',
                    'Показатель силы связи между двумя переменными.',
                    'Уровень значимости.'
                ]
            },
            {
                question: 'Что такое множественная регрессия в статистике?',
                answer:3,
                options: [
                    'Анализ среднего значения выборки.',
                    'Анализ дисперсии двух групп.',
                    'Метод анализа влияния нескольких независимых переменных на зависимую переменную.',
                    'Проверка наличия корреляции между двумя переменными.'
                ]
            },
            {
                question: 'Как вычисляется стандартная ошибка среднего значения в статистике?',
                answer:1,
                options: [
                    'Делением стандартного отклонения на квадратный корень из объема выборки.',
                    'Умножением среднего значения на стандартное отклонение.',
                    'Умножением стандартного отклонения на квадратный корень из объема выборки.',
                    'Делением объема выборки на стандартное отклонение.'
                ]
            },
            {
                question: 'Что такое критерий хи-квадрат в статистике?',
                answer:3,
                options: [
                    'Проверка равенства средних значений двух выборок.',
                    'Проверка наличия корреляции между двумя переменными.',
                    'Проверка наличия различий между наблюдаемыми и ожидаемыми частотами в таблице сопряженности.',
                    'Анализ дисперсии.'
                ]
            },
            {
                question: 'Что такое непараметрические тесты в статистике?',
                answer:1,
                options: [
                    'Тесты, не требующие предположений о форме распределения в генеральной совокупности.',
                    'Тесты, использующие параметры распределения для проверки гипотез.',
                    'Тесты, применяемые только для больших выборок.',
                    'Тесты, применяемые только для нормально распределенных данных.'
                ]
            }
        ]
    },
    {
        name: 'Операционные системы',
        questions: [
            {
            question: 'Что представляет собой операционная система?',
            answer:2,
            options: [
                'Программное обеспечение для офисных приложений.',
                'Программное обеспечение, управляющее ресурсами компьютера и обеспечивающее взаимодействие между пользователем и аппаратным обеспечением.',
                'Аппаратное обеспечение компьютера.',
                'Программное обеспечение для разработки веб-приложений.'
            ]  
            },
            {
                question: 'Какая из перечисленных функций не является функцией операционной системы?',
                answer:3,
                options: [
                    'Управление процессами.',
                    'Управление памятью.',
                    'Работа с текстовыми редакторами.',
                    'Управление вводом/выводом.'
                ]  
            },
            {
                question: 'Что такое процесс в операционной системе?',
                answer:2,
                options: [
                    'Метод взаимодействия с пользователем.',
                    'Элементарная единица исполнения, обладающая собственным адресным пространством и выполнением.',
                    'Файловая система.',
                    'Графический интерфейс пользователя.'
                ]  
            },
            {
                question: 'Какой вид планирования используется для определения порядка выполнения процессов в системе с учетом приоритетов?',
                answer:3,
                options: [
                    'Планирование ввода/вывода.',
                    'Круговое (Round Robin) планирование.',
                    'Приоритетное планирование.',
                    'Планирование по событиям.'
                ]  
            },
            {
                question: 'Что такое виртуальная память?',
                answer:3,
                options: [
                    'Дополнительная физическая память, устанавливаемая на компьютер.',
                    'Память, выделенная для хранения виртуальных машин.',
                    'Иллюзия расширенного объема памяти, создаваемая операционной системой при помощи комбинации физической памяти и хранения данных на диске.',
                    'Память, используемая для хранения виртуальных файлов.'
                ]  
            },
            {
                question: 'Что такое многозадачность в контексте операционных систем?',
                answer:2,
                options: [
                    'Возможность одновременного выполнения нескольких задач в пределах одного процесса.',
                    'Возможность одновременного выполнения нескольких задач в пределах одного компьютера.',
                    'Возможность одновременного выполнения нескольких задач на разных уровнях ядра процессора.',
                    'Возможность одновременного выполнения нескольких задач в пределах одного ядра процессора.'
                ]  
            },
            {
                question: 'Что представляет собой системный вызов (system call) в операционной системе?',
                answer:3,
                options: [
                    'Процесс завершения работы операционной системы.',
                    'Запуск нового процесса.',
                    'Механизм, позволяющий программам взаимодействовать с ядром операционной системы и запрашивать выполнение привилегированных задач.',
                    'Функция, обеспечивающая отладку программ.'
                ]  
            },
            {
                question: 'Что такое файловая система в операционной системе?',
                answer:4,
                options: [
                    'Программа для создания и редактирования текстовых файлов.',
                    'Система управления процессами.',
                    'Совокупность программ для управления памятью.',
                    'Способ организации и хранения данных на носителе информации.'
                ]  
            },
            {
                question: 'Какая из перечисленных задач не относится к функциям управления памятью операционной системы?',
                answer:2,
                options: [
                    'Выделение памяти процессам.',
                    'Определение приоритетов процессов.',
                    'Управление обменом данными между оперативной и внешней памятью.',
                    'Освобождение памяти, занятой завершившимися процессами.'
                ]  
            },
            {
                question: 'Что такое динамическая линковка (dynamic linking) в операционных системах?',
                answer:2,
                options: [
                    'Процесс компиляции программы.',
                    'Механизм, позволяющий программам использовать разделяемые библиотеки во время выполнения.',
                    'Процесс создания резервных копий файлов.',
                    'Механизм, позволяющий программам создавать динамические образы дисков.'
                ]  
            },
        ]
    } 
]
export default Tests;