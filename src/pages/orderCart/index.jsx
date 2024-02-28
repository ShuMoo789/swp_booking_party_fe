import { Button, Input } from '@material-ui/core';
import GoogleIcon from 'react-google-material-icons';
import ApplePayIcon from '../orderCart/apple_pay.png';
import MoMoIcon from '../orderCart/MoMo.png';
import MasterCardIcon from '../orderCart/MasterCard.png';
import VisaIcon from '../orderCart/Visa.png';
import "../../pages/orderCart/index.scss";

const OrderCart = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="cart">
          <h2>Shopping cart</h2>
          <p>Review your cart, make any changes, or enter discount codes. Once everything looks good, proceed to checkout by clicking the Checkout button.</p>
        </div>
        <div className="empty-cart">
          <p>Oops! Looks like you don&apos;t have any products in your cart ...</p>
        </div>
      </div>
      <div className="cart-details">
        <h3>My cart</h3>
        <ul>
          <li>
            <span>Products (0)</span><span>$0.00</span>
          </li>
          <li>
            <span>Discount (0)</span>
            <div className="discount-code">
              <Input type="text" placeholder="Enter the discount code" />
              <Button variant="contained">
                <GoogleIcon icon="add" /> ADD
              </Button>
            </div>
          </li>
          <li>
            <span>Sales tax</span><span>$0.00</span>
          </li>
        </ul>
        <div className="total">
          Total: $0.00
        </div>
        <div className="cancel-button">
          <Button variant="contained" style={{ backgroundColor: 'red', color: 'white' }}>
            <GoogleIcon icon="cancel" /> CLEAR CART
          </Button>
        </div>
        <div className="checkout-button">
          <Button variant="contained" color="primary">
            <GoogleIcon icon="payment" /> CHECKOUT
          </Button>
        </div>
        <div className="payment-options">
          <Button variant="contained" style={{ backgroundColor: 'black', marginTop: '10px', marginRight: '5px' }}>
            <img src={ApplePayIcon} alt="Apple Pay" style={{ width: '50px' }} />
          </Button>
          <Button variant="contained" style={{ backgroundColor: '#fff', marginTop: '10px', marginRight: '5px' }}>
            <img src={VisaIcon} alt="Visa" style={{ width: '50px' }} />
          </Button>
          <Button variant="contained" style={{ backgroundColor: 'black', marginTop: '10px', marginRight: '5px' }}>
            <img src={MasterCardIcon} alt="MasterCard" style={{ width: '50px' }} />
          </Button>
          <Button variant="contained" style={{ backgroundColor: '#fff', marginTop: '10px', marginRight: '5px' }}>
            <img src={MoMoIcon} alt="MoMo" style={{ width: '50px' }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderCart;