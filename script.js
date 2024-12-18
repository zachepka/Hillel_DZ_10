const user = prompt('Введіть N:');

if (user === null || user.trim() === '' || isNaN(user) || !Number.isInteger(Number(user))) {
    console.log('Помилка');
} else {
    const N = Number(user.trim());

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        }
    }
}