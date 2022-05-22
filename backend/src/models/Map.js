const db = require("../database/db")

class Map {
    constructor(data) {
        this.data = data
    }

    async registerLocation() {
        const sql = `

        `

        return await db.execute(sql)
    }

    async getAllLocations() {
        const sql = `

        `

        return await db.execute(sql)
    }
}

module.exports = Map