const users = require('./users')

const main = async () => {
    const email = await users.form('Email: ')
    const namaTur = await users.form('Nama turnamen: ')
    const password = await users.form('Password baru: ')

    users.simpanUser(email, namaTur, password)
}

main()