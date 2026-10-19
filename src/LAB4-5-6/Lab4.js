
import React, { useReducer, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Danh sach san pham
const products = [
  { id: 1, name: 'Keyboard', price: 500000 },
  { id: 2, name: 'Mouse', price: 200000 },
  { id: 3, name: 'Headphone', price: 800000 }
];

// Gio hang ban dau
const initialState = [];

// Xu ly gio hang bang if
function cartReducer(state, action) {
  if (action.type === 'ADD') {
    const found = state.find(
      item => item.id === action.product.id
    );

    if (found) {
      return state.map(item =>
        item.id === action.product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...state,
      { ...action.product, quantity: 1 }
    ];
  }

  if (action.type === 'REMOVE') {
    return state.filter(
      item => item.id !== action.id
    );
  }

  if (action.type === 'UPDATE_QUANTITY') {
    return state.map(item =>
      item.id === action.id
        ? {
            ...item,
            quantity: Math.max(
              1,
              Number(action.quantity) || 1
            )
          }
        : item
    );
  }

  if (action.type === 'CLEAR') {
    return [];
  }

  return state;
}

export default function Lab4() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  const [order, setOrder] = useState(null);

  // Tinh tong so luong
  const totalQuantity = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Tinh tong tien
  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  // Validation bang Yup
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(2, 'Name must have at least 2 characters')
      .required('Full name is required'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    phone: Yup.string()
      .matches(
        /^[0-9]{10}$/,
        'Phone must contain exactly 10 digits'
      )
      .required('Phone is required'),

    address: Yup.string()
      .required('Address is required'),

    paymentMethod: Yup.string()
      .oneOf(
        ['COD', 'Card'],
        'Please choose COD or Card'
      )
      .required('Payment method is required'),

    agreeTerms: Yup.boolean()
      .oneOf([true], 'You must agree to the terms')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
      agreeTerms: false
    },

    validationSchema,

    onSubmit: values => {
      // Luu thong tin don hang
      setOrder({
        customer: values,
        items: cart,
        totalQuantity: totalQuantity,
        totalPrice: totalPrice
      });

      // Xoa gio hang sau khi dat hang thanh cong
      dispatch({ type: 'CLEAR' });
      formik.resetForm();
    }
  });

  return (
    <div
      style={{
        maxWidth: '850px',
        margin: '30px auto',
        padding: '20px',
        fontFamily: 'Arial'
      }}
    >
      <h1>Shopping Cart</h1>

      <h2>Product List</h2>

      {products.map(product => (
        <div
          key={product.id}
          style={{ marginBottom: '10px' }}
        >
          <span>
            {product.name} -{' '}
            {product.price.toLocaleString()} VND
          </span>

          {' '}

          <button
            type="button"
            onClick={() =>
              dispatch({
                type: 'ADD',
                product: product
              })
            }
          >
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>My Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div
            key={item.id}
            style={{ marginBottom: '12px' }}
          >
            <strong>{item.name}</strong>
            {' - '}
            {item.price.toLocaleString()} VND

            {' | Quantity: '}

            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={event =>
                dispatch({
                  type: 'UPDATE_QUANTITY',
                  id: item.id,
                  quantity: event.target.value
                })
              }
              style={{ width: '60px' }}
            />

            {' '}

            <button
              type="button"
              onClick={() =>
                dispatch({
                  type: 'REMOVE',
                  id: item.id
                })
              }
            >
              Remove
            </button>
          </div>
        ))
      )}

      <p> Total quantity: {totalQuantity}</p>

      <p>
        <strong>
          Total price: {totalPrice.toLocaleString()} VND
        </strong>
      </p>

      <hr />

      <h2>Checkout Form</h2>

      <form onSubmit={formik.handleSubmit}>
        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="fullName">Full name</label>
          <br />

          <input
            id="fullName"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.fullName &&
            formik.errors.fullName && (
              <p style={{ color: 'red' }}>
                {formik.errors.fullName}
              </p>
            )}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="email">Email</label>
          <br />

          <input
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.email &&
            formik.errors.email && (
              <p style={{ color: 'red' }}>
                {formik.errors.email}
              </p>
            )}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="phone">Phone</label>
          <br />

          <input
            id="phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.phone &&
            formik.errors.phone && (
              <p style={{ color: 'red' }}>
                {formik.errors.phone}
              </p>
            )}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="address">Address</label>
          <br />

          <input
            id="address"
            name="address"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {formik.touched.address &&
            formik.errors.address && (
              <p style={{ color: 'red' }}>
                {formik.errors.address}
              </p>
            )}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label htmlFor="paymentMethod">
            Payment method
          </label>
          <br />

          <select
            id="paymentMethod"
            name="paymentMethod"
            value={formik.values.paymentMethod}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <option value="">
              Choose payment method
            </option>
            <option value="COD">COD</option>
            <option value="Card">Card</option>
          </select>

          {formik.touched.paymentMethod &&
            formik.errors.paymentMethod && (
              <p style={{ color: 'red' }}>
                {formik.errors.paymentMethod}
              </p>
            )}
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>
            <input
              type="checkbox"
              name="agreeTerms"
              checked={formik.values.agreeTerms}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            {' '}I agree to the terms
          </label>

          {formik.touched.agreeTerms &&
            formik.errors.agreeTerms && (
              <p style={{ color: 'red' }}>
                {formik.errors.agreeTerms}
              </p>
            )}
        </div>

        <button
          type="submit"
          disabled={cart.length === 0}
        >
          Submit Order
        </button>
      </form>

      {order && (
        <div
          style={{
            marginTop: '25px',
            padding: '15px',
            border: '1px solid #999'
          }}
        >
          <h2>Order Confirmation</h2>

          <p>
            Name: {order.customer.fullName}
          </p>

          <p>
            Email: {order.customer.email}
          </p>

          <p>
            Phone: {order.customer.phone}
          </p>

          <p>
            Address: {order.customer.address}
          </p>

          <p>
            Payment: {order.customer.paymentMethod}
          </p>

          <h3>Ordered items</h3>

          {order.items.map(item => (
            <p key={item.id}>
              {item.name} x {item.quantity} ={' '}
              {(item.price * item.quantity).toLocaleString()} VND
            </p>
          ))}

          <p>
            Total quantity: {order.totalQuantity}
          </p>

          <p>
            Total price: {order.totalPrice.toLocaleString()} VND
          </p>
        </div>
      )}
    </div>
  );
}
