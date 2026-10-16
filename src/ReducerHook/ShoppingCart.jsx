export default function ShoppingCart(){
    //shopping cart: item in cart, total quantity, total price

    const initialState = {
        items: [],
        totalQuantity: 0,
        totalPrice: 0
    }

    //tạo Reducer xử lý action
    function cartReducer(state, action){
        if(action.type === "ADD_ITEM"){
            return{
                items: [state.items, action.product],
                totalQuantity: state.totalQuantity + 1,
                totalPrice: state.totalPrice + action.product.price
            };
        }
        throw Error("Wrong type input")
    }
    return (
        <>
        <h1>Reducer Hook</h1>
        <h3>Product List</h3>
        <button>Item 1 -$5</button>
        <button>Item 2 - $10</button>

        <h3>Shopping cart: </h3>
        <ul>
            <l1>Item 1 - $5</l1>
            <l2>Item 2 - $10</l2>
        </ul>
        <ul>
            <label>Total Quantity: ?</label>
            <label>Total Price: ?</label>
        </ul>
        </>
    )
}