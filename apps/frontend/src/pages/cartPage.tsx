import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import mugsImage from '../images/mugs.svg';
import platesImage from '../images/plates.svg';

const CartContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CartTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const CartItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr auto auto;
  gap: 1rem;
  align-items: center;
  padding: 1rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`;

const ItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ItemTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
`;

const ItemPrice = styled.div`
  color: #2c5282;
  font-weight: bold;
`;

const QuantityControl = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityButton = styled.button`
  padding: 0.5rem;
  border: 1px solid #ddd;
  background-color: white;
  cursor: pointer;
  border-radius: 4px;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const RemoveButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ff4444;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #cc0000;
  }
`;

const CartSummary = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const TotalRow = styled(SummaryRow)`
  font-size: 1.2rem;
  font-weight: bold;
  border-top: 1px solid #ddd;
  padding-top: 1rem;
  margin-top: 1rem;
`;

const CheckoutButton = styled(Link)`
  display: block;
  text-align: center;
  padding: 1rem;
  background-color: #2c5282;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 1rem;
  
  &:hover {
    background-color: #1a365d;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  padding: 2rem;
`;

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Handcrafted Ceramic Mug",
      price: 29.99,
      quantity: 1,
      image: mugsImage
    },
    {
      id: 2,
      name: "Artisan Plate Set",
      price: 49.99,
      quantity: 1,
      image: platesImage
    }
  ]);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <CartContainer>
        <CartTitle>Your Cart</CartTitle>
        <EmptyCart>
          <h2>Your cart is empty</h2>
          <p>Start shopping to add items to your cart</p>
          <Link to="/">Continue Shopping</Link>
        </EmptyCart>
      </CartContainer>
    );
  }

  return (
    <CartContainer>
      <CartTitle>Your Cart</CartTitle>
      <CartItems>
        {cartItems.map(item => (
          <CartItem key={item.id}>
            <ItemImage src={item.image} alt={item.name} />
            <ItemDetails>
              <ItemTitle>{item.name}</ItemTitle>
              <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
            </ItemDetails>
            <QuantityControl>
              <QuantityButton onClick={() => handleQuantityChange(item.id, -1)}>-</QuantityButton>
              <span>{item.quantity}</span>
              <QuantityButton onClick={() => handleQuantityChange(item.id, 1)}>+</QuantityButton>
            </QuantityControl>
            <RemoveButton onClick={() => handleRemoveItem(item.id)}>Remove</RemoveButton>
          </CartItem>
        ))}
      </CartItems>
      
      <CartSummary>
        <SummaryRow>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </SummaryRow>
        <SummaryRow>
          <span>Shipping</span>
          <span>${shipping.toFixed(2)}</span>
        </SummaryRow>
        <TotalRow>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </TotalRow>
        <CheckoutButton to="/checkout">Proceed to Checkout</CheckoutButton>
      </CartSummary>
    </CartContainer>
  );
};

export default CartPage; 