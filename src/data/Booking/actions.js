export function SetBookingType(bookingType) {
  return {
    type: 'SET_BOOKING_TYPE',
    data: {
      booking: bookingType
    }
  };
}

export function SetStep(step) {
  return {
    type: 'SET_STEP',
    data: {
      step: step
    }
  };
}

export function SetLocation(location) {
  return {
    type: 'SET_LOCATION',
    data: {
      location: location
    }
  };
}

export function SetCategory(category) {
  return {
    type: 'SET_CATEGORY',
    data: {
      category: category,
    }
  };
}

export function SetService(service) {
  return {
    type: 'SET_SERVICE',
    data: {
      service: service,
    }
  };
}

export function SetAddress(address) {
  return {
    type: 'SET_ADDRESS',
    data: {
      address: address,
    }
  };
}

export function SetTime(time) {
  return {
    type: 'SET_TIME',
    data: {
      time: time,
    }
  };
}

export function SetDate(date) {
  return {
    type: 'SET_DATE',
    data: {
      date: date,
    }
  };
}
