export default {
  title: 'Muscle Groups',
  name: 'muscleGroup',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fields: [
    {
      name: 'primary',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Deltoids', value: 'deltoids' },
          { title: 'Biceps', value: 'biceps' },
          { title: 'Triceps', value: 'triceps' },
          { title: 'Pectorials', value: 'pectorals' },
          { title: 'Forearms', value: 'foreArms' },
          { title: 'Side abs', value: 'sideAbs' },
          { title: 'Abdominals', value: 'abdominals' },
          { title: 'Quadriceps', value: 'quadriceps' },
          { title: 'Trapezius', value: 'trapezius' },
          { title: 'Tibialis anterior', value: 'tibialisAnterior' },
          { title: 'Glutes', value: 'glutes' },
          { title: 'Hamstrings', value: 'hamstrings' },
          { title: 'Calves', value: 'calves' },
          { title: 'Lats', value: 'lats' },
        ],
      },
    },
    {
      name: 'secondary',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Deltoids', value: 'deltoids' },
          { title: 'Biceps', value: 'biceps' },
          { title: 'Triceps', value: 'triceps' },
          { title: 'Pectorials', value: 'pectorals' },
          { title: 'Forearms', value: 'foreArms' },
          { title: 'Side abs', value: 'sideAbs' },
          { title: 'Abdominals', value: 'abdominals' },
          { title: 'Quadriceps', value: 'quadriceps' },
          { title: 'Trapezius', value: 'trapezius' },
          { title: 'Tibialis anterior', value: 'tibialisAnterior' },
          { title: 'Glutes', value: 'glutes' },
          { title: 'Hamstrings', value: 'hamstrings' },
          { title: 'Calves', value: 'calves' },
          { title: 'Lats', value: 'lats' },
        ],
      },
    },
  ],
};
