const mongoose=require('mongoose');
const pizzaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        enum: ['veg', 'nonveg'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients:
        [
            {
                id:Number,
                iname: String
            }
        ],
    topping: [
        {
            id: Number,
            tname:String,
            price:Number
        }
    ]

})

const Pizza=mongoose.model('Pizza',pizzaSchema);
module.exports=Pizza;

