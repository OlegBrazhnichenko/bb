export function GetCategories() {
  return {
    type: "GET_CATEGORIES",
    payload: {
      request:{
        url:'/categories'
      }
    }
  };
}

export function GetServices() {
  return {
    type: "GET_SERVICES",
    payload: {
      request: {
        url: '/services'
      }
    }
  };
}
