// reducer: an arrow fn that recieves state and action
// should return a NEW state

const cartReducer = (state = [], action) => {
        switch (action.type)
        {
            case 'ADD_PRODUCT':
                var copy = [...state];

                
                        
                    /*** if this product id (action.payload.product.id) does not exist inside the cart
                     * * then add id
                     * * but if it exist (there is a product on the cart with the same product id),
                     * * then, just increase the quantity of the product in the cart
                     * ** FOR each item inside copy
                     * * if(action.payload.product.id === item.product.id)
                     * *    increase item.quantity
                     * * else
                     * *    push the product to copy*/

                
                copy.push(action.payload);
                return copy;
                
                
               

            case 'REMOVE_PRODUCT':
                break;

            default:
                return state;

        }
    return state;
};

export default cartReducer;