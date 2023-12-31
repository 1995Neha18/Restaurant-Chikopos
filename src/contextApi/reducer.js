export const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_ORDER_ITEMS":
      let slug = Object.keys(payload)[0];
      // console.log(slug);
      return {
        ...state,
        orderItems: {
          ...state.orderItems,
          [slug]: {
            ...state.orderItems[slug],
            ...payload[slug],
          },
        },
      };
    case "SET_ORDER_PRICE":
      return {
        ...state,
        orderPrice: payload,
      };
    case "SET_INITIAL_ORDER_ITEMS":
      return {
        ...state,
        initial: payload,
      };
    default:
      return state;
  }
};
