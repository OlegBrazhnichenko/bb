export const STEPS = {
  SUBURB_SELECT        : 'suburb-select',
  SERVICE_SELECT       : 'service-select',
  LOCATION_TIME_SELECT : 'location-time-select',
  SETTINGS_REVIEW      : 'settings-review',
  PAYMENT              : 'payment'
};

export const getStepByIndex = (index) => {
  return STEPS[Object.keys(STEPS)[index]];
};

export const getNextStep = (currentStep) => {
  return getStepWithShift(currentStep, 1);
};

export const getPreviousStep = (currentStep) => {
  return getStepWithShift(currentStep, -1);
};

const getStepWithShift= (currentStep, shift) => {
  const currentStepIndex = Object.values(STEPS).indexOf(currentStep);
  const stepsCount = Object.keys(STEPS).length;

  return getStepByIndex(((shift % stepsCount) + currentStepIndex + stepsCount) % stepsCount);
};
