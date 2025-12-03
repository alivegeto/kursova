document.getElementById('contact-form').addEventListener('submit', function (event) {
    // Перевірка: якщо браузер не підтримує mailto або хочеш показати повідомлення
    const status = document.getElementById('status');
    status.innerText = "Відкривається поштовий клієнт…";

    // Трохи затримка, щоб користувач побачив повідомлення
    setTimeout(() => {
        status.innerText = "";
        this.reset(); // очищаємо всі поля форми
    }, 2000);
});
