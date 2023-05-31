import React, { useContext, useEffect, useState } from "react";
import { Formik } from "formik";
import shortid from "shortid";
import {
  FormLayout,
  FormWrapper,
  Form,
  SubmitLabel,
  SubmitInput,
  SubmitBtn,
  ErrorText,
  FormCart,
  SubmitBtnBlock,
  FormText,
  FormCardDelBtn,
  FormCardImg,
  FormCardInput,
  FormCardInputWrapper,
  FormCardTitle,
  FormCardWrapper,
} from "./ShoppingCart.styled";
import { MealsContext } from "../App";
import { FiTrash2 } from "react-icons/fi";
const MealsValuesContext = React.createContext();

const ShoppingCart = () => {
  const nameID = shortid.generate();
  const emailID = shortid.generate();
  const phoneID = shortid.generate();
  const adressID = shortid.generate();
  const { meals, setMeals } = useContext(MealsContext);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const currentValue = meals.reduce(
      (accumulator, el) => accumulator + el.price * 100 * +el.quantity,
      0
    );
    const roundedValue = Math.round(currentValue) / 100;
    setTotalValue(roundedValue);
  }, [meals]);

  const handleChangeValue = (event, itemId) => {
    setMeals((prev) => {
      const currentMeal = prev.find((meal) => meal.itemId === itemId);
      const objIndex = prev.indexOf(currentMeal);
      currentMeal.quantity = event.target.value;
      prev.splice(objIndex, 1, currentMeal);
      return [...prev];
    });
  };

  const deleteFormCard = (id) => {
    const resetMeals = meals.filter((el) => el.itemId !== id);
    setMeals(resetMeals);
  };

  return (
    <FormLayout>
      <FormWrapper>
        <Formik
          initialValues={{ name: "", email: "", phone: "", adress: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.name) {
              errors.name = "This is a required field";
            }
            if (!values.email) {
              errors.email = "This is a required field";
            }
            if (!values.phone) {
              errors.phone = "This is a required field";
            }
            if (!values.adress) {
              errors.adress = "This is a required field";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            const order = {
              ...values,
              meals: JSON.stringify(meals),
              totalValue,
            };
            console.log(order);
            resetForm();
            setSubmitting(false);
            setMeals([]);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <SubmitLabel htmlFor={nameID}>Name:</SubmitLabel>
              <SubmitInput
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                id={nameID}
                placeholder="Shrek"
              />
              <ErrorText>{errors.name && touched.name}</ErrorText>
              <SubmitLabel htmlFor={emailID}>Email:</SubmitLabel>
              <SubmitInput
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                id={emailID}
                placeholder="Email@mail.com"
              />
              <ErrorText>{errors.email && touched.email}</ErrorText>
              <SubmitLabel htmlFor={phoneID}>Phone:</SubmitLabel>
              <SubmitInput
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                id={phoneID}
                placeholder="067 555 55 55"
              />
              <ErrorText>{errors.phone && touched.phone}</ErrorText>
              <SubmitLabel htmlFor={adressID}>Adress:</SubmitLabel>
              <SubmitInput
                type="adress"
                name="adress"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.adress}
                id={adressID}
                placeholder="Park Avenue 12"
              />
              <ErrorText>{errors.adress && touched.adress}</ErrorText>
              <SubmitBtnBlock>
                <FormText>
                  Total:<span>{totalValue}</span>{" "}
                </FormText>
                <SubmitBtn type="submit" disabled={isSubmitting}>
                  Submit
                </SubmitBtn>
              </SubmitBtnBlock>
            </Form>
          )}
        </Formik>
        <FormCart>
          {meals.map(({ itemId, photo, name, price, quantity }) => (
            <FormCardWrapper key={name}>
              <FormCardImg src={`${photo}`} alt={`${photo}`} />
              <FormCardInputWrapper>
                <FormCardTitle>{name}</FormCardTitle>
                <FormCardTitle>{price}</FormCardTitle>
                <FormCardInput
                  type="number"
                  value={quantity}
                  onChange={(event) => handleChangeValue(event, itemId, price)}
                  step="1"
                  min="0"
                  max="10"
                />
                <FormCardDelBtn onClick={() => deleteFormCard(itemId)}>
                  <FiTrash2 />
                </FormCardDelBtn>
              </FormCardInputWrapper>
            </FormCardWrapper>
          ))}
        </FormCart>
      </FormWrapper>
    </FormLayout>
  );
};

export default ShoppingCart;
export { MealsValuesContext };
