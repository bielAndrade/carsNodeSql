const db = require("../db/connection");

const carService = {
    
    getAll:  () => {
 
        return new Promise((accepted, rejected) => {
            db.query('SELECT * FROM cars', (error, results) => {
                if(error) {
                    rejected(error);
                    return;
                }
                return accepted(results);
            })
        })
    },

    getOne: (recievedId) => {

        const id = recievedId;

        return new Promise((accepted, rejected) => {
            db.query(`SELECT * FROM cars WHERE id = ${id}`, (error, results) => {
                if(error) {
                    rejected(error);
                    return;
                }
                return accepted(results);
            })
        })
    },

    new: (car) => {

        const {model , plate} = car;

        return new Promise((accepted, rejected) => {
            db.query(`INSERT INTO cars (model, license_plate) VALUES (?, ?)`, [model, plate], (error, results) => {
                if(error){
                    rejected(error);
                    return;
                }
                return accepted(results);
            })
        })
    },

    update: (car, recievedId) => {
        const {model, plate} = car;
        const id = recievedId;

        return new Promise((accepted, rejected) => {
            db.query("UPDATE cars SET model = ?, license_plate = ? WHERE id = ?", [model, plate, id], (error, results) => {
                if(error){
                    rejected(error);
                    return;
                }
                return accepted(results);
            })
        })
    },

    delete: (recievedId) => {
        const id = recievedId;

        return new Promise((accepted, rejected) => {
            db.query('DELETE FROM cars WHERE id = ?', [id], (error, results) => {
                if(error){
                    rejected(error);
                    return;
                }
                return accepted(results);
            })
        })
    }

}

module.exports = carService;