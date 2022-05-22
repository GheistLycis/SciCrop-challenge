const db = require("../database/db")

class Map {
    constructor(data) {
        this.data = data
    }

    async registerLocation() {
        const sql = `
            INSERT INTO locations VALUES (
                "${this.data.name}",
                "${this.data.longitude}",
                "${this.data.latitude}"
            )
        `

        return db.promise().query(sql)
            .then(([rows]) => rows)
            .catch(error => {
                throw error
            })
    }

    async getAllLocations() {
        const sql = "SELECT * FROM locations"

        return db.promise().query(sql)
            .then(([rows]) => rows)
            .catch(error => {
                throw error
            })
    } 
}
 
module.exports = Map