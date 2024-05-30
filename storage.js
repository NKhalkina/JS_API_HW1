// Необходимо создать веб-страницу с динамическими элементами с расписанием занятий.

// На странице должна быть таблица с расписанием занятий, на основе JSON-данных.
// Каждая строка таблицы должна содержать информацию о занятии, а именно:
// - название занятия
// - время проведения занятия
// - максимальное количество участников
// - текущее количество участников
// - кнопка "записаться"
// - кнопка "отменить запись"

// Если максимальное количество участников достигнуто, либо пользователь уже записан на занятие, сделайте кнопку "записаться" неактивной.
// Кнопка "отменить запись" активна в случае, если пользователь записан на занятие, иначе она должна быть неактивна.

// Пользователь может записаться на один курс только один раз.

// При нажатии на кнопку "записаться" увеличьте количество записанных участников.
// Если пользователь нажимает "отменить запись", уменьшите количество записанных участников.
// Обновляйте состояние кнопок и количество участников в реальном времени.

// Если количество участников уже максимально, то пользователь не может записаться, даже если он не записывался ранее.

// Сохраняйте данные в LocalStorage, чтобы они сохранялись и отображались при перезагрузке страницы.

const scheduleLsKey = 'schedule';
const workoutLsKey = 'workouts';

const initialSchedule = [
    {
        "id": 1,
        "name": "Пилатес",
        "time": "10:00 - 11:00",
        "maxParticipants": 16,
        "currentParticipants": 7
    },
    {
        "id": 2,
        "name": "Йога",
        "time": "15:30 - 16:30",
        "maxParticipants": 10,
        "currentParticipants": 4
    },

    {
        "id": 3,
        "name": "Танцы",
        "time": "17:00 - 17:45",
        "maxParticipants": 18,
        "currentParticipants": 5
    },
    {
        "id": 4,
        "name": "Таеквон-до",
        "time": "18:00 - 19:00",
        "maxParticipants": 15,
        "currentParticipants": 8
    }
];

function getWorkouts() {
    const workouts = localStorage.getItem(workoutLsKey);
    if (!workouts) {
        return [];
    }
    return JSON.parse(workouts);
};

function getSchedule() {
    const schedule = localStorage.getItem(scheduleLsKey);
    if (!schedule) {
        localStorage.setItem(scheduleLsKey, JSON.stringify(initialSchedule));
    }
    return JSON.parse(schedule);
};

function saveСhange(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

export { getSchedule, saveСhange, getWorkouts };