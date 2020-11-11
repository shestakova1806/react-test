export const reducer = (state, action) => {
  if (state === undefined) {
    return {
      employees: [],
      loading: true,
      error: null,
    };
  }

  switch (action.type) {
    case "FETCH_EMPLOYEES_REQUEST":
      return {
        employees: [],
        loading: true,
        error: null,
      };
    case "FETCH_EMPLOYEES_SUCCESS":
      return {
        employees: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_EMPLOYEES_FAILURE":
      return {
        employees: [],
        loading: false,
        error: action.payload,
      };
    case "CHANGED_VACATION":
      return {
        employees: [],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
