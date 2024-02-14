
async function doLogin(req, res) {
    const bcrypt = require('bcrypt');
    const staticUserData = {
        username: 'admin',
        password: '$2a$12$ihDdOYP54kgjkGfEgw8yHe6FRDBaPtxMhYPVPB5ZPf0vGKKcdALa2', // Хэшированный пароль 'jKez2bd6TXNpcqT7kCHh'
    };
    try {
        const { username, password } = req.body;

        // Проверка логина
        if (username !== staticUserData.username) {
            return res.status(401).json({ message: 'Неверные учетные данные' });
        }

        // Проверка пароля
        bcrypt.compare(password, staticUserData.password, (err, result) => {
            if (err || !result) {
                return res.status(401).json({ message: 'Неверные учетные данные' });
            }

            // Вход выполнен успешно
            res.status(200).json({ message: 'Вход выполнен успешно' });
        });

    } catch (e) {

    }
}
module.exports = {
    doLogin,
};
