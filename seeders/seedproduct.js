const Product = require('../app/store/models/Product')
const img_cable = '/public/cable/img_cable.png';
const vvg = '/public/cable/img_cable.png';
const img_cross = '/public/cable/cros_optical.png';
const image_def = '/public/cable/cros_optical.png';
const image_patch1 = '/public/cable/cros_optical.png';
const image_patch2 = '/public/cable/cros_optical.png';


module.exports = {
    up: async (queryInterface, Sequelize) => {
        await Product.bulkCreate([
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC/UPC OM4 4 PORT укомплектованный',
                price: 16200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC/UPC OM4 8 PORT укомплектованный',
                price: 19700,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC/UPC OM4 12 PORT  укомплектованный',
                price: 23100,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC/UPC OM4 16 PORT укомплектованный',
                price: 27000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-1U-24-FC/UPC OM4 24 PORT  укомплектованный',
                price: 34000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-2U-48-FC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-2U-48-FC/UPC OM4 32 PORT укомплектованный',
                price: 53530,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-2U-48-FC/UPC OM4 48 PORT укомплектованный',
                price: 67840,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'FDF 4U-SP-FC-144port ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-4U-144-FC/UPC OM4 96 PORT укомплектованный',
                price: 135200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ4)',
                name: 'OK-FDF-4U-144-FC/UPC OM4 144 PORT укомплектованный',
                price: 175320,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-DIN-12SC ПУСТОЙ (крепление на дин-рейку)',
                price: 8900,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-4SC ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-8SC ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-4FC ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-8FC ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-4SC SC или LC 4 PORT укомплектованный',
                price: 10300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-8SC SC или LC 8 PORT укомплектованный',
                price: 15300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-4FC FC/UPC 4 PORT укомплектованный',
                price: 10300,
                count:1,description:'',
                image: img_cross,
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'ОК-ОРБ-8-8FC FC/UPC до 8 PORT укомплектованный',
                price: 15300,
                count:1,description:'',
                image: img_cross,
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC SC/UPC OM4 4 PORT укомплектованный',
                price: 16200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC SC/UPC OM4 8 PORT укомплектованный',
                price: 19700,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC SC/UPC OM4 12 PORT укомплектованный',
                price: 23100,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC SC/UPC OM4 16 PORT укомплектованный',
                price: 27000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-SC SC/UPC v 24 PORT укомплектованный',
                price: 34000,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-2U-48-SC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-2U-48-SC SC/UPC OM4 32 PORT укомплектованный',
                price: 53530,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-2U-48-SC SC/UPC OM4 48 PORT укомплектованный',
                price: 67840,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-4U-144-SC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-4U-144-SC SC/UPC OM4 96 PORT укомплектованный',
                price: 135200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'OK-FDF-4U-144-SC SC/UPC OM4 144 PORT  укомплектованный',
                price: 175320,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-48-LC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 4 PORT  укомплектованный',
                price: 16300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 8 PORT  укомплектованный',
                price: 19800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 12 PORT  укомплектованный',
                price: 23700,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 16 PORT  укомплектованный',
                price: 27400,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 24 PORT  укомплектованный',
                price: 34800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 32 PORT укомплектованный (доп.кассета 1шт)',
                price: 43150,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-1U-24-LC LC/UPC OM4 48 PORT укомплектованный (доп.кассета 1шт)',
                price: 57770,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-2U-96-LC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-2U-72-LC LC/UPC OM4 72 PORT укомплектованный (доп.кассета 1шт)',
                price: 90300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-2U-96-LC LC/UPC OM4 96 PORT укомплектованный (доп.кассета 2шт)',
                price: 113950,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'OK-FDF-4U-144-LC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM4',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'FDF 4U SP LC/UPC OM4 144 PORT ALL SET укомплектованный (используется 72 порта - адаптеры дуплекс LC)',
                price: 177300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC/UPC OM3 4 PORT укомплектованный',
                price: 15645,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC/UPC OM3 8 PORT укомплектованный',
                price: 19100,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC/UPC OM3 12 PORT укомплектованный',
                price: 22400,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC/UPC OM3 16 PORT укомплектованный',
                price: 25600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-1U-24-FC/UPC OM3 24 PORT укомплектованный',
                price: 32550,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-2U-48-FC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-2U-48-FC/UPC OM3 32 PORT укомплектованный',
                price: 50925,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-2U-48-FC/UPC OM3 48 PORT укомплектованный',
                price: 63980,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                name: 'кросс оптический FDF 4U-SP-FC-144port ПУСТОЙ',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-4U-144-FC/UPC SM 96 PORT укомплектованный',
                price: 127155,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ3)',
                name: 'OK-FDF-4U-144-FC/UPC SM 144 PORT укомплектованный',
                price: 166530,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-DIN-12SC ПУСТОЙ (крепление на дин-рейку)',
                price: 8900,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC (FC simplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC (FC simplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC SC или LC 4 PORT укомплектованный',
                price: 10080,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC SC или LC 8 PORT укомплектованный',
                price: 14680,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC FC/UPC 4 PORT укомплектованный',
                price: 10080,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC FC/UPC до 8 PORT укомплектованный',
                price: 14680,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC OM3 4 PORT укомплектованный',
                price: 15645,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC OM3 8 PORT укомплектованный',
                price: 19100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC OM312 PORT укомплектованный',
                price: 22400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC OM3 16 PORT укомплектованный',
                price: 25600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC OM3 24 PORT укомплектованный',
                price: 32550,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC OM3 32 PORT укомплектованный',
                price: 50925,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC OM3 48 PORT укомплектованный',
                price: 63980,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-SC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-SC SC/UPC OM3 96 PORT укомплектованный',
                price: 127155,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-SC SC/UPC OM3 144 PORT укомплектованный',
                price: 166530,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-48-LC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 4 PORT  укомплектованный',
                price: 15600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 8 PORT  укомплектованный',
                price: 19215,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 12 PORT  укомплектованный',
                price: 22680,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 16 PORT  укомплектованный',
                price: 25935,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 24 PORT  укомплектованный',
                price: 32970,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 32 PORT укомплектованный (доп.кассета 1шт)',
                price: 40500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC OM3 48 PORT укомплектованный (доп.кассета 1шт)',
                price: 53235,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-72-LC LC/UPC OM3 72 PORT укомплектованный (доп.кассета 1шт)',
                price: 87255,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC LC/UPC OM3 96 PORT укомплектованный (доп.кассета 2шт)',
                price: 106890,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-LC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF OM3',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'кросс оптический FDF 4U SP LC/UPC OM3 144 PORT ALL SET укомплектованный (используется 72 порта - адаптеры дуплекс LC)',
                price: 168945,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC ММ 4 PORT укомплектованный',
                price: 15600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC ММ 8 PORT укомплектованный',
                price: 18500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC ММ 12 PORT  укомплектованный',
                price: 21400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC ММ 16 PORT укомплектованный',
                price: 24500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC ММ 24 PORT  укомплектованный',
                price: 30600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-2U-48-FC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-2U-48-FC/UPC ММ 32 PORT укомплектованный',
                price: 48300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-2U-48-FC/UPC ММ 48 PORT укомплектованный',
                price: 60000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'кросс оптический FDF 4U-SP-FC-144port ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-4U-144-FC/UPC ММ 96 PORT укомплектованный',
                price: 121300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Кросс оптический OK-FDF-4U-144-FC/UPC ММ 144 PORT укомплектованный',
                price: 155500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-DIN-12SC  ПУСТОЙ (крепление на дин-рейку)',
                price: 8900,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC (FC simplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC (FC simplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC  SC или LC  4 PORT  укомплектованный',
                price: 9400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC SC или LC  8 PORT   укомплектованный',
                price: 14100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC FC/UPC 4 PORT  укомплектованный',
                price: 9400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC  FC/ UPC до 8 PORT  укомплектованный',
                price: 14100,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC ММ 4 PORT укомплектованный',
                price: 15600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC ММ 8 PORT укомплектованный',
                price: 18500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC ММ 12 PORT укомплектованный',
                price: 21400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC ММ 16 PORT укомплектованный',
                price: 24500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC ММ 24 PORT укомплектованный',
                price: 30600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC ММ 32 PORT укомплектованный',
                price: 48300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC ММ 48 PORT укомплектованный',
                price: 60000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/UPC ММ 96 PORT укомплектованный',
                price: 121300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/UPC ММ 144 PORT  укомплектованный',
                price: 155500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-48-LC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 4 PORT  укомплектованный',
                price: 15200,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 8 PORT  укомплектованный',
                price: 18400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 12 PORT  укомплектованный',
                price: 21500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 16 PORT  укомплектованный',
                price: 24600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 24 PORT  укомплектованный',
                price: 31000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 32 PORT укомплектованный (доп.кассета 1шт)',
                price: 38085,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC ММ 48 PORT укомплектованный (доп.кассета 1шт)',
                price: 51100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-72-LC LC/UPC ММ 72 PORT укомплектованный (доп.кассета 1шт)',
                price: 81400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC LC/UPC ММ 96 PORT укомплектованный (доп.кассета 2шт)',
                price: 102500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-LC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF ОМ1-ОМ2',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'кросс оптический FDF 4U SP LC/UPC ММ 144 PORT ALL SET укомплектованный (используется 72 порта - адаптеры дуплекс LC)',
                price: 180800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC SM 4 PORT укомплектованный',
                price: 15000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC SM 8 PORT укомплектованный',
                price: 17800,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC SM 12 PORT  укомплектованный',
                price: 20650,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC SM 16 PORT укомплектованный',
                price: 23550,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-1U-24-FC/UPC SM 24 PORT  укомплектованный',
                price: 29400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-2U-48-FC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-2U-48-FC/UPC SM 32 PORT укомплектованный',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-2U-48-FC/UPC SM 48 PORT укомплектованный',
                price: 57700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'кросс оптический FDF 4U-SP-FC-144port ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-4U-144-FC/UPC SM 96 PORT укомплектованный',
                price: 116700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки FC/UPC невыдвижные (SM-Одномодовые)',
                name: 'Кросс оптический OK-FDF-4U-144-FC/UPC SM 144 PORT укомплектованный',
                price: 149600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-DIN-12SC  ПУСТОЙ (крепление на дин-рейку)',
                price: 8900,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC (SC simplex или LC Duplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC (FC simplex адаптеры) ПУСТОЙ',
                price: 6300,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC (FC simplex адаптеры) ПУСТОЙ',
                price: 8000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4SC  SC или LC  4 PORT  укомплектованный',
                price: 9100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8SC SC или LC  8 PORT   укомплектованный',
                price: 13600,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-4FC FC/UPC 4 PORT  укомплектованный',
                price: 9100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки настенные (мини-боксы)',
                name: 'Оптический бокс ОК-ОРБ-8-8FC  FC/ UPC до 8 PORT  укомплектованный',
                price: 13600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC SM 4 PORT укомплектованный',
                price: 15000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC SM 8 PORT  укомплектованный',
                price: 17800,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC SM 12 PORT укомплектованный',
                price: 20650,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC SM 16 PORT укомплектованный',
                price: 23550,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/UPC SM 24 PORT укомплектованный',
                price: 29400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC SM 32 PORT укомплектованный',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/UPC SM 48 PORT укомплектованный',
                price: 57700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/UPC SM 96 PORT укомплектованный',
                price: 116700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/UPC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/UPC SM 144 PORT  укомплектованный',
                price: 149600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/APC SM 4 PORT ALL SET  укомплектованный',
                price: 15000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/APC SM 8 PORT ALL SET  укомплектованный',
                price: 17800,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/APC SM 12 PORT ALL SET  укомплектованный',
                price: 20650,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/APC SM 16 PORT ALL SET  укомплектованный',
                price: 23550,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-SC SC/APC SM 24 PORT ALL SET  укомплектованный',
                price: 29400,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/APC SM 32 PORT укомплектованный',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-48-SC SC/APC SM 48 PORT укомплектованный',
                price: 57700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/APC SM 96 PORT  укомплектованный',
                price: 116700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки SC/APC невыдвижные',
                name: 'Кросс оптический  OK-FDF-4U-144-SC SC/APC SM 144 PORT  укомплектованный',
                price: 149600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-48-LC ПУСТОЙ',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 4 PORT  укомплектованный',
                price: 15100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 8 PORT  укомплектованный',
                price: 18000,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 12 PORT  укомплектованный',
                price: 21100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 16 PORT  укомплектованный',
                price: 24200,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 24 PORT  укомплектованный',
                price: 29700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 32 PORT укомплектованный (доп.кассета 1шт)',
                price: 36880,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-1U-24-LC LC/UPC SM 48 PORT укомплектованный (доп.кассета 1шт)',
                price: 48615,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC ПУСТОЙ',
                price: 23500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-72-LC LC/UPC SM 72 PORT укомплектованный (доп.кассета 1шт)',
                price: 76800,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-2U-96-LC LC/UPC SM 96 PORT укомплектованный (доп.кассета 2шт)',
                price:

                    95900,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'Кросс оптический OK-FDF-4U-144-LC ПУСТОЙ',
                price: 46500,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы FDF SM',
                type: 'Кроссы/Оптические распределительные полки LC/UPC невыдвижные',
                name: 'кросс оптический FDF 4U SP LC/UPC SM 144 PORT ALL SET укомплектованный (используется 72 порта - адаптеры дуплекс LC)',
                price: 152800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32-1U-SC/LC (с кассетой)',
                price: 5850,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 4 порта укомплектованный (SM)',
                price: 8700,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 8 портов укомплектованный (SM)',
                price: 11550,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 12 портов укомплектованный (SM)',
                price: 14200,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 16 портов укомплектованный (SM)',
                price: 17100,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 24 портов укомплектованный (SM)',
                price: 22650,
                count:1,description:'',
                image: img_cross
            },

            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (SM-Одномодовые)',
                name: 'Оптическая полка ОРП-32 32 портов укомплектованный (SM)',
                price: 28350,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 4 порта укомплектованный (OM1/OM2)',
                price: 8800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 8 портов укомплектованный (OM1/OM2)',
                price: 11700,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 12 портов укомплектованный (OM1/OM2)',
                price: 14400,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 16 портов укомплектованный (OM1/OM2)',
                price: 17350,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 24 порта укомплектованный (OM1/OM2)',
                price: 22950,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ1/ОМ2)',
                name: 'Оптическая полка ОРП-32 32 порта укомплектованный (OM1/OM2)',
                price: 28900,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 4 порта укомплектованный (OM3)',
                price: 9200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 8 портов укомплектованный (OM3)',
                price: 12500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 12 портов укомплектованный (OM3)',
                price: 15600,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 16 портов укомплектованный (OM3)',
                price: 19150,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 24 портов укомплектованный (OM3)',
                price: 25500,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ3)',
                name: 'Оптическая полка ОРП-32 32 порта укомплектованный (OM3)',
                price: 31800,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 4 порта укомплектованный (OM4)',
                price: 9450,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 8 портов укомплектованный (OM4)',
                price: 12900,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 12 портов укомплектованный (OM4)',
                price: 16400,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 16 портов укомплектованный (OM4)',
                price: 20200,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 24 портов укомплектованный (OM4)',
                price: 27300,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Кроссы ОРП-32',
                type: 'Кроссы/Оптические распределительные полки ОРП-32 невыдвижные (MM-Многомодовые ОМ4)',
                name: 'Оптическая полка ОРП-32 32 порта укомплектованный (OM4)',
                price: 33950,
                count:1,description:'',
                image: img_cross
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг 5*2,5 (ож)-0,66',
                price: 875,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг 4*4 (ож)-0,66',
                price: 1048,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П 2*1,5 (ож)-0,66',
                price: 229,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П 2*2,5 (ож)-0,66',
                price: 360,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П 2*4 (ож)-0,66',
                price: 530,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П 3*1,5 (ож)-0,66',
                price: 336,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П 3*2,5 (ож)-0,66',
                price: 521,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П LS 3*1,5 (ож)-0,66',
                price: 360,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель ВВГнг-П LS 3*2,5 (ож)-0,66',
                price: 548,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель АВВГнг-П  3*2,5 (ож)-0,66',
                price: 128,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение',
                name: 'Кабель АВВГнг-П LS 3*2,5 (ож)-0,66',
                price: 141,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение и не содержащие галогенов',
                name: 'Кабель ППГнг(А)-HF 3Х1.5ок(N,РЕ)-0,66',
                price: 489,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провода силовые не распространяющие горение и не содержащие галогенов',
                name: 'Кабель ППГнг(А)-HF 3Х2.5ок(N,РЕ)-0,66',
                price: 657,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провод ПВ-3 медный (заземление)',
                name: 'ПРОВОД пв 3 6 ж/з',
                price: 353,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Провод ПВ-3 медный (заземление)',
                name: 'провод ПВ 3 4 Ж/З',
                price: 243,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 2*16 -0,6/1',
                price: 267,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 2*25-0,6/1',
                price: 383,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 4*16 -0,6/1',
                price: 524,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 4*25-0,6/1',
                price: 754,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 4х35-0,6/1',
                price: 984,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 4х50-0,6/1',
                price: 1327,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП 4 4х70-0,6/1',
                price: 1890,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-4 4*95-0,6/1',
                price: 2590,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-4 4*120-0,6/1',
                price: 3195,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*35-20Кв',
                price: 318,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*50-20Кв',
                price: 404,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*70-20Кв',
                price: 559,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*95-20Кв',
                price: 748,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*120-20Кв',
                price: 958,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*35-35Кв',
                price: 335,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*50-35Кв',
                price: 421,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*70-35Кв',
                price: 576,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*95-35Кв',
                price: 765,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Эл.Провода',
                type: 'Оболочка из сшитого полиэтилена (силаносшитого)',
                name: 'Провод СИП-3 1*120-35Кв',
                price: 975,
                count:1,description:'',
                image: vvg
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А2-2.7',
                price: 251,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А4-2.7',
                price: 258,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А6-2.7',
                price: 269,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А8-2.7',
                price: 280,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А12-2.7',
                price: 306,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-А16-2.7',
                price: 332,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М2П-А2-2.7',
                price: 250,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М2П-А4-2.7',
                price: 257,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М2П-А8-2.7',
                price: 279,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М2П-А16-2.7',
                price: 331,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М3П-А12-2.7',
                price: 305,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М3П-А24-2.7',
                price: 387,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М3П-А32-2.7',
                price: 461,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М3П-А36-2.7',
                price: 507,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А4-2.7',
                price: 316,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А6-2.7',
                price: 328,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А8-2.7',
                price: 340,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А12-2.7',
                price: 369,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А16-2.7',
                price: 400,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А24-2.7',
                price: 422,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А32-2.7',
                price: 501,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А36-2.7',
                price: 561,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-А48-2.7',
                price: 582,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М6П-А20-2.7',
                price: 460,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М6П-А64-2.7',
                price: 730,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М6П-А72-2.7',
                price: 795,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М8П-А96-2.7',
                price: 992,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М12П-А128-2.7',
                price: 1330,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛ-М12П-А144-2.7',
                price: 1370,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-Т-А2-2.7',
                price: 357,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-Т-А4-2.7',
                price: 364,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-Т-А6-2.7',
                price: 375,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-Т-А8-2.7',
                price: 385,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-Т-А12-2.7',
                price: 418,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М2П-А2-2.7',
                price: 357,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М2П-А4-2.7',
                price: 364,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М2П-А6-2.7',
                price: 375,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М2П-А8-2.7',
                price: 385,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М3П-А12-2.7',
                price: 418,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М2П-А16-2.7',
                price: 420,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М3П-А24-2.7',
                price: 499,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М4П-А32-2.7',
                price: 573,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М4П-А48-2.7',
                price: 676,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М8П-А96-2.7',
                price: 1120,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М12П-А128-2.6',
                price: 1407,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКСЛ с броней из стальной гофрированной ленты и двумя продольными проволоками (легкая броня)',
                name: 'Кабель волоконно-оптический ОКСЛНГ(А)-HF-М12П-А144-2.7',
                price: 1494,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А2-3.0',
                price: 240,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А4-3.0',
                price: 248,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А8-3.0',
                price: 269,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А12-3.0',
                price: 303,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А4-6.0',
                price: 277,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А8-6.0',
                price: 307,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А12-6.0',
                price: 343,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А16-6.0',
                price: 393,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А4-8.0',
                price: 285,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А8-8.0',
                price: 311,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А12-8.0',
                price: 343,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-Т-А16-8.0',
                price: 394,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А2-8.0',
                price: 416,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А4-8.0',
                price: 427,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А8-8.0',
                price: 452,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А12-8.0',
                price: 483,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А16-8.0',
                price: 505,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А20-8.0',
                price: 539,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А24-8.0',
                price: 584,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А32-8.0',
                price: 626,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А36-8.0',
                price: 662,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А48-8.0',
                price: 726,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М4П-А64-8.0',
                price: 825,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М8П-А96-8.0',
                price: 1129,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБ с броней из повива стальных проволок. (Тяжелая броня)',
                name: 'Кабель волоконно-оптический ОКБ-М12П-А144-8.0',
                price: 1598,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-Т-А2-3.0',
                price: 262,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-Т-А4-3.0',
                price: 269,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-Т-А8-3.0',
                price: 291,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-Т-А12-3.0',
                price: 323,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБН(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБН(А)-HF-Т-А4-8.0',
                price: 354,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБН(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБН(А)-HF-Т-А8-8.0',
                price: 376,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБН(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБН(А)-HF-Т-А12-8.0',
                price: 408,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А4-8,0',
                price: 560,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А8-8,0',
                price: 581,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А12-8,0',
                price: 603,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А16-8,0',
                price: 628,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А24-8,0',
                price: 670,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А32-8,0',
                price: 713,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКБНГ(А)-HF с броней из повива стальных проволок.',
                name: 'Кабель волоконно-оптический ОКБНГ(А)-HF-М4П-А48-8.0',
                price: 798,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А2-3.5',
                price: 171,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А4-3.5',
                price: 180,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А8-3.5',
                price: 210,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А12-3.5',
                price: 263,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А4-4.0',
                price: 182,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А8-4.0',
                price: 230,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А16-4.0',
                price: 305,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А24-4.0',
                price: 351,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А2-6.0',
                price: 252,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А4-6.0',
                price: 258,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А8-6.0',
                price: 278,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А12-6.0',
                price: 301,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А4-6.0',
                price: 325,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А8-6.0',
                price: 344,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А12-6.0',
                price: 369,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А16-6.0',
                price: 392,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А24-6.0',
                price: 428,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А32-6.0',
                price: 479,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А48-6.0',
                price: 590,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А2-8.0',
                price: 277,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А4-8.0',
                price: 284,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А8-8.0',
                price: 302,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-Т-А12-8.0',
                price: 350,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А4-8.0',
                price: 352,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А8-8.0',
                price: 379,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А12-8.0',
                price: 401,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А16-8.0',
                price: 422,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А24-8.0',
                price: 463,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А32-8.0',
                price: 514,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М4П-А48-8.0',
                price: 616,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М6П-А64-8.0',
                price: 892,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М6П-А72-8.0',
                price: 1160,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М8П-А96-8.0',
                price: 1235,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Т с тросом для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Т-М12П-А144-8.0',
                price: 1605,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А4-4.0',
                price: 306,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А8-4.0',
                price: 329,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А12-4.0',
                price: 355,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А16-4.0',
                price: 379,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А24-4.0',
                price: 438,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А32-4.0',
                price: 501,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А48-4.0',
                price: 561,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А4-7.0',
                price: 360,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А8-7.0',
                price: 381,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А12-7.0',
                price: 402,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А16-7.0',
                price: 454,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А24-7.0',
                price: 519,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А32-7.0',
                price: 569,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д со стекплопластиковым прутком (диэлектрический) для подвеса на городских опорах связи и электричества (кабель тип 8-ка)',
                name: 'Кабель волоконно-оптический ОК/Д-М4П-А48-7.0',
                price: 665,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-А2-1.2',
                price: 133,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-А4-1.2',
                price: 141,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-А6-1.2',
                price: 152,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-А8-1.2',
                price: 158,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-А12-1.2',
                price: 184,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т2-А16-1.2',
                price: 233,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т2-А24-1.2',
                price: 269,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С1-1.0 (К) - круглый',
                price: 105,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С2-1.0 (К) - круглый',
                price: 118,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С4-1.0 (К) - круглый',
                price: 142,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С8-1.0 (К) - круглый',
                price: 162,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С12-1.0 (К) - круглый',
                price: 202,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С16-1.0 (К) - круглый',
                price: 220,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С1-1.5 (К) - круглый',
                price: 155,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С2-1.5 (К) - круглый',
                price: 160,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С4-1.5 (К) - круглый',
                price: 169,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С8-1.5 (К) - круглый',
                price: 189,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК/Д2 самонесущий (диэлектрический) для подвеса на городских опорах связи и электричества (кабель типа FTTH, для подвеса последней мили)',
                name: 'Кабель волоконно-оптический ОК/Д2-Т-С12-1.5 (К) - круглый',
                price: 214,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А2-2.7',
                price: 226,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А4-2.7',
                price: 233,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А6-2.7',
                price: 245,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А8-2.7',
                price: 256,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А12-2.7',
                price: 282,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А16-2.7',
                price: 303,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А20-2.7',
                price: 323,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А24-2.7',
                price: 341,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А32-2.7',
                price: 386,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А36-2.7',
                price: 422,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А48-2.7',
                price: 474,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А4-3.1',
                price: 249,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А8-3.1',
                price: 271,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А12-3.1',
                price: 296,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А16-3.1',
                price: 319,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А20-3.1',
                price: 337,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А24-3.1',
                price: 355,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А32-3.1',
                price: 400,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А36-3.1',
                price: 437,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОК для задува и прокладки в ПЭТ трубах методом пневмопрокладки',
                name: 'Кабель волоконно-оптический ОК-М6П-А48-3.1',
                price: 488,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А2-1.0',
                price: 286,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А4-1.0',
                price: 293,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А6-1.0',
                price: 304,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А8-1.0',
                price: 315,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А12-1.0',
                price: 340,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А16-1.0',
                price: 364,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А24-1.0',
                price: 403,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А32-1.0',
                price: 445,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-А48-1.0',
                price: 538,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М8П-А96-1.0',
                price: 918,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М12П-А96-1.0',
                price: 986,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКН для прокладки внутри помещений, зданий и сооружений, а также для прокладки внутри шахт (оболочка из материала нераспространяющего горение)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М12П-А144-1.0',
                price: 1377,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А4-3.0 (Л)',
                price: 260,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А8-3.0 (Л)',
                price: 285,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А12-3.0 (Л)',
                price: 310,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А16-3.0 (Л)',
                price: 338,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А24-3.0 (Л)',
                price: 404,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А32-3.0 (Л)',
                price: 458,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А4-3.0 (Л)',
                price: 262,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А8-3.0 (Л)',
                price: 287,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А12-3.0 (Л)',
                price: 312,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А16-3.0 (Л)',
                price: 340,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А24-3.0 (Л)',
                price: 406,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А32-3.0 (Л)',
                price: 460,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А2-4.0',
                price: 297,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А4-4.0',
                price: 305,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А8-4.0',
                price: 331,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А12-4.0',
                price: 353,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А16-4.0',
                price: 391,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А24-4.0',
                price: 456,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А32-4.0',
                price: 512,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А36-4.0',
                price: 547,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А4-7.0 (Л)',
                price: 300,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А8-7.0 (Л)',
                price: 323,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А12-7.0 (Л)',
                price: 348,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А16-7.0 (Л)',
                price: 371,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А24-7.0 (Л)',
                price: 422,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А32-7.0 (Л)',
                price: 466,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М5П-А48-7.0 (Л)',
                price: 569,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А4-7.0',
                price: 377,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А8-7.0',
                price: 399,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А12-7.0',
                price: 425,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А16-7.0',
                price: 454,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А24-7.0',
                price: 495,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А32-7.0',
                price: 561,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А36-7.0',
                price: 579,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А48-7.0',
                price: 661,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А64-7.0',
                price: 780,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М6П-А72-7.0',
                price: 883,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А8-8.0',
                price: 403,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А12-8.0',
                price: 437,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А24-8.0',
                price: 514,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А48-8.0',
                price: 681,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М8П-А96-8.0',
                price: 967,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А24-8.0',
                price: 514,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А12-12.0',
                price: 498,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М4П-А24-12.0',
                price: 587,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКА самонесущий (диэлектрический) для подвеса на опоры ЛЭП, городских сетей и магистралей, между зданиями (броня и усиление из стекловоринга)',
                name: 'Кабель волоконно-оптический ОКА-М8П-А96-12.0',
                price: 1287,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки OK-OPTIC-FTTH-1D-LSZH-0,7 DROP-Cable кабель с тремя диэлектрическими прутками и полимерным покрытием нераспространяющим горение',
                name: 'Кабель оптический OK-OPTIC-FTTH-1D-LSZH-0,7',
                price: 51,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки OK-OPTIC-FTTH-2D-LSZH-0,7 DROP-Cable кабель с тремя диэлектрическими прутками и полимерным покрытием нераспространяющим горение',
                name: 'Кабель оптический OK-OPTIC-FTTH-2D-LSZH-0,7',
                price: 58,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ-Т-С1-0.4 (В/П2) DROP-Cable кабель с двумя стеклонитями и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С1-0.4 (В/П2)',
                price: 81,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ-Т-С2-0.4 (В/П2) DROP-Cable кабель с двумя стеклонитями и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С2-0.4 (В/П2)',
                price: 84,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ-Т-С4-0.4 (В/П2) DROP-Cable кабель с двумя стеклонитями и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С4-0.4 (В/П2)',
                price: 92,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ(А)-HF-Т-С1-1.0 (В/П3) DROP-Cable кабель с двумя стеклонитями и стеклопластиковым прутком с полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т-С1-1.0 (В/П3)',
                price: 101,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ(А)-HF-Т-С2-1.0 (В/П3) DROP-Cable кабель с двумя стеклонитями и стеклопластиковым прутком с полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т-С2-1.0 (В/П3)',
                price: 109,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ-Т-С1-1.0 (В/Т3) DROP-Cable кабель с тремя стальными проволоками и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С1-1.0 (В/Т3)',
                price: 101,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ-Т-С2-1.0 (В/Т3) DROP-Cable кабель с тремя стальными проволоками и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С2-1.0 (В/Т3)',
                price: 108,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ-Т-С4-1.0 (В/Т3) DROP-Cable кабель с тремя стальными проволоками и полимерным покрытием нераспространяющим горение',
                name: 'Кабель волоконно-оптический ОКНГ-Т-С4-1.0 (В/Т3)',
                price: 111,
                count:1,description:'',
                image: img_cable
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-М4-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-М8-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-М4-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-М8-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-М12-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-М16-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-М24-2.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-М4-0.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-М8-0,5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-М12-0.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-М16-0.5 (50/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-В4-2.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-Т-В8-2.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-В8-2.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-В4-2.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-В12-2,5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКСЛ-М4П-В16-2.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-В4-0.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-В8-0.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-В12-0.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабели с многомодовым волокно (тип волокна М-50/125, В-62,5/125)',
                name: 'Кабель волоконно-оптический ОКНГ(А)-HF-М4П-В16-0.5 (62,5/125)',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель марки ОКНГ-Т (станционный/распределительный) предназначен для прокладки внутри объектов ЖКХ, серверных, и шахтах (из материала не поддерживающего горение)',
                name: 'Кабель волоконно-оптический ОКНГ-Т8-С8-0.5 (ВП)  – кабель с двумя прутками в оболочке 8 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ-Т12-С12-1.0 (ВП)',
                name: 'Кабель с двумя прутками в оболочке 12 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т4-С4-1.0 (ВА)',
                name: 'Кабель усиленный стеклонитями в оболочке 4 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т4-С8-1.0 (ВА)',
                name: 'Кабель усиленный стеклонитями в оболочке 8 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т12-С12-1.0 (ВА)',
                name: 'Кабель усиленный стеклонитями в оболочке 12 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т16-С16-1.0 (ВА)',
                name: 'Кабель усиленный стеклонитями в оболочке 16 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: 'Оптический кабель',
                type: 'Кабель волоконно-оптический ОКНГ(А)-HF-Т24-С24-1.0 (ВА)',
                name: 'Кабель усиленный стеклонитями в оболочке 24 отдельных волокон - каждое волокно в плотном буферном покрытии',
                image: img_cable,
                count:1,description:'',
                price: 0
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-500m - SC/UPC (тип упаковки - пластиковый кейс)	",
                price: 60000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-500m - SC/APC (тип упаковки - пластиковый кейс)	",
                price: 60000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-500m -  FC/UPC (тип упаковки - пластиковый кейс)	",
                price: 60000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-500m - LC/UPC (тип упаковки - пластиковый кейс)	",
                price: 60000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-1000m - SC/UPC (тип упаковки - пластиковый кейс)	",
                price: 66000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-1000m - SC/APC (тип упаковки - пластиковый кейс)	",
                price: 66000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-1000m -  FC/UPC (тип упаковки - пластиковый кейс)	",
                price: 66000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Катушка	",
                name: "	Нормализующая катушка OK-OTDR-SM-1000m - LC/UPC (тип упаковки - пластиковый кейс)	",
                price: 66000,
                count:1,description:'',
                image: image_def
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл SC/UPC SM 9/125 0,9 mm -1,5 m	",
                price: 515,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл SC/APC SM 9/125 0,9 mm -1,5 m	",
                price: 515,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл LC/UPC SM 9/125  0,9 mm -1,5 m	",
                price: 515,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл FC/UPC SM 9/125 0,9 mm -1,5 m	",
                price: 515,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл LC/UPC MM OM1 или OM2 0,9 mm -1,5 m	",
                price: 585,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл FC/UPC MM OM1 или OM2 0,9 mm -1,5 m	",
                price: 585,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл SC/UPC MM OM1 или OM2 0,9 mm -1,5 m	",
                price: 585,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл LC/UPC MM OM3 50/125 0,9 mm -1,5 m	",
                price: 665,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл FC/UPC MM OM3 50/125 0,9 mm -1,5 m	",
                price: 665,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл SC/UPC MM OM3 50/125 0,9 mm -1,5 m	",
                price: 665,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл LC/UPC MM OM4 50/125 0,9 mm -1,5 m	",
                price: 725,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл FC/UPC MM OM4 50/125 0,9 mm -1,5 m	",
                price: 725,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические пигтейлы СТАНДАРТ	",
                name: "	Оптический пигтейл SC/UPC MM OM4 50/125 0,9 mm -1,5 m	",
                price: 725,
                count:1,description:'',
                image: image_patch1
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-SC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-SC/APC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-FC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-LC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-FC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-LC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-SC/APC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-SC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-SC/APC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-FC/UPC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-LC/UPC  SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-LC/UPC  SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-SC/UPC  SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды SIMPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-SC/APC SM Simplex 2,0mm (9/125) - 1 метр	",
                price: 1020,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-SC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-SC/APC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-FC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/UPC-LC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-FC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-LC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд SC/APC-SC/APC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-SC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-SC/APC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-FC/UPC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд FC/UPC-LC/UPC  SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-LC/UPC  SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-SC/UPC  SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },
            {
                mainType: "	Оптические патчкорды	",
                type: "	Оптические Патчкорды DUPLEX SINGLEMODE (9/125).	",
                name: "	Оптический патчкорд LC/UPC-SC/APC SM DUPLEX 2,0mm (9/125) - 1 метр	",
                price: 1700,
                count:1,description:'',
                image: image_patch2
            },


        ])
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Products', null, {})
    }
}