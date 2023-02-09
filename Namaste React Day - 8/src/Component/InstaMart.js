import "./instamart.css";
import ArrowDown from "../assets/arrowDown.png";
import ArrowUp from "../assets/arrowUp.png";
import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <div className="instamart-container">
        <div>
          <div className="title-container">
            <h2>{title}</h2>

            {isVisible ? (
              <button onClick={() => setIsVisible(false)}>
                <img src={ArrowUp} alt="arrow" className="arrowDown" />
              </button>
            ) : (
              <button onClick={() => setIsVisible(true)}>
                <img src={ArrowDown} alt="arrow" className="arrowDown" />
              </button>
            )}
          </div>
          {isVisible && <p>{description}</p>}
        </div>
      </div>
    </>
  );
};

const Instamart = () => {
  const [config, setConfig] = useState({
    editOrder: false,
    cancelOrder: false,
    valueOrder: false,
    invoiceOrder: false,
  });
  return (
    <>
      <h1>Instamart FAQS</h1>
      <Section
        title={"Can I edit my order?"}
        description={
          "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents"
        }
        isVisible={config.editOrder}
        setIsVisible={() => {
          setConfig({
            editOrder: true,
            cancelOrder: false,
            valueOrder: false,
            invoiceOrder: false,
          });
        }}
      />
      <Section
        title={"I want to cancel my order"}
        description={
          "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed."
        }
        isVisible={config.cancelOrder}
        setIsVisible={() => {
          setConfig({
            editOrder: false,
            cancelOrder: true,
            valueOrder: false,
            invoiceOrder: false,
          });
        }}
      />
      <Section
        title={"Is there a minimum order value?"}
        description={
          "We have no minimum order value and you can order for any amount. "
        }
        isVisible={config.valueOrder}
        setIsVisible={() => {
          setConfig({
            editOrder: false,
            cancelOrder: false,
            valueOrder: true,
            invoiceOrder: false,
          });
        }}
      />
      <Section
        title={"I want an invoice for my order"}
        description={"send an email. We will revert within 24-48 hrs"}
        isVisible={config.invoiceOrder}
        setIsVisible={() => {
          setConfig({
            editOrder: false,
            cancelOrder: false,
            valueOrder: false,
            invoiceOrder: true,
          });
        }}
      />
    </>
  );
};
export default Instamart;
// suppose this is a very big component and it has 1000 of components inside it.

// chapter 11 data is new oil
