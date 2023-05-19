const { Schedule, Airlines, Airport } = require ('../models')
const { Op } = require('sequelize')


class Controller {
    // static async find_all(req, res, next) {
    //     try {
    //         let { search } = req.query;
    //         const whereCondition = {};

    //         if (search) {
    //         whereCondition['$Airline.name$'] = { [Op.iLike]: `%${search}%` };
    //         }

    //         const data = await Schedule.findAll({
    //         where: whereCondition,
    //         include: [
    //             {
    //                 model: Airlines,
    //             },
    //             {
    //                 model: Airport,
    //             }
    //         ],
    //         });
    //         res.status(200).json(data);
    //     } catch (error) {
    //         next(error)
    //     }
    // }

    static async find_all(req, res, next){
        try {
            const { search } = req.query;

            let whereCondition = {};

            if (search) {
            whereCondition = {
                '$Airline.name$': {
                [Op.iLike]: `%${search}%`
                }
            };
            }
            let data = await Schedule.findAll({
                include: ['Airline', "AirportArrive", "AirportDeparture"],
                where: whereCondition
            })
            res.status(200).json(data)
        } catch (error) {
            console.log(error);
            console.log('masuk sini');
            next(error)
        }
    }
}

module.exports = Controller