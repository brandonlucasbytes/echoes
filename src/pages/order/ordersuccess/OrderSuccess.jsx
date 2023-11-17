import './ordersuccess.scss'

function OrderSuccess() {
  return (
    <div className="order-success">
      <div>
        <h2 className="success">Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your order has been placed successfully.</p>
        <p>We will send you a confirmation email shortly with the details of your order.</p>
        <p>Estimated delivery time: 3-5 business days.</p>
      </div>
    </div>
  );
}

export default OrderSuccess;