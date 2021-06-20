const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

const dirPath = './data'
if(!fs.existsSync(dirPath)){
    fs.mkdirSync(dirPath)
}

const dataPath = './data/users.json'
if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const form = (qs) => {
    return new Promise((resolve, reject) => {
        rl.question(qs, (pertanyaan) => {
            resolve(pertanyaan)
        })
    })
}

const simpanUser = (email, namaTur, password) => {
    const user = { email, namaTur, password }
    const file = fs.readFileSync('data/users.json', 'utf8')
    const users = JSON.parse(file)

    users.push(user)

    fs.writeFileSync('data/users.json', JSON.stringify(users))

    console.log('Success ...')

    rl.close()
}

module.exports = { form, simpanUser }