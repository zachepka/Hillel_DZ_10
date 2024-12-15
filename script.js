let user = prompt('Введіть N:');

if (!user === null || user.trim() === '' || isNaN(user.trim()) || !Number.isInteger(Number(user.trim()))) {
    console.log('Помилка');
} else {
    let N = Number(user.trim());

    for (let i = 1; i <= 100; i++) {
        if (i * i <= N) {
            console.log(i);
        }
    }
}