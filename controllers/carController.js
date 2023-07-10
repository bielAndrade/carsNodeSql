const carService = require("../services/carServices");

const carController = {

    getAll: async (req, res) => {
        try {

            const response = await carService.getAll();

            res.status(200).json(response);
        } catch (error) {
            console.log(error);
        }
    },

    getOne: async (req, res) => {
        try {
            const id = req.params.id;

            const response = await carService.getOne(id);

            res.status(200).json(response); 
        } catch (error) {
            console.log(error);
        }
    },

    new: async (req, res) => {

        try {
            const car = {
                model: req.body.model,
                plate: req.body.plate
            }
    
            const response = await carService.new(car);
    
            res.status(201).json({car, msg: "Car service created succesfully!"});
        } catch (error) {
            console.log(error);
        }
    },

    update: async (req, res) => {
        try {
            const id = req.params.id;
            
            const car = {
                model: req.body.model,
                plate: req.body.plate
            }
    
            const response = await carService.update(car, id);

            res.status(200).json({car, msg: "Car service updated succesfully!"});
        } catch (error) {
            console.log(error);
        }
    },

    delete: async (req, res) => {
        try {
            const id = req.params.id;

        const resposne = await carService.delete(id);

        res.status(200).json({msg: "Car service deleted succesfully!"});
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = carController;