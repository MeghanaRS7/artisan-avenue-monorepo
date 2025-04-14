import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const CheckoutTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

const FormContainer = styled.form`
  display: grid;
  gap: 2rem;
`;

const FormSection = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #2c5282;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;

const SubmitButton = styled.button`
  padding: 1rem;
  background-color: #2c5282;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  
  &:hover {
    background-color: #1a365d;
  }
  
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ModalTitle = styled.h2`
  margin-bottom: 1rem;
`;

const ModalButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #2c5282;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #1a365d;
  }
`;

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: ''
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Simulate successful checkout
    setShowModal(true); // Show the modal
    setTimeout(() => {
      navigate('/order-confirmation');
    }, 1000);
  };

  const isFormValid = Object.values(formData).every(value => value.trim() !== '');

  return (
    <CheckoutContainer>
      <CheckoutTitle>Checkout</CheckoutTitle>
      <FormContainer onSubmit={handleSubmit}>
        <FormSection>
          <SectionTitle>Shipping Information</SectionTitle>
          <Row>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Row>
            <FormGroup>
              <Label>City</Label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>State</Label>
              <Input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label>ZIP Code</Label>
            <Input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </FormGroup>
        </FormSection>

        <FormSection>
          <SectionTitle>Payment Information</SectionTitle>
          <FormGroup>
            <Label>Card Number</Label>
            <Input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>Name on Card</Label>
            <Input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Row>
            <FormGroup>
              <Label>Expiry Date</Label>
              <Input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label>CVV</Label>
              <Input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
        </FormSection>

        <SubmitButton type="submit" disabled={!isFormValid}>
          Place Order
        </SubmitButton>
      </FormContainer>

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalTitle>Thank You for Your Order!</ModalTitle>
            <p>Your order has been placed successfully.</p>
            <p>We appreciate your business and will process your order shortly.</p>
            <ModalButton onClick={() => setShowModal(false)}>Close</ModalButton>
          </ModalContainer>
        </ModalOverlay>
      )}
    </CheckoutContainer>
  );
};

export default CheckoutPage; 