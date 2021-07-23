export default {
  title: 'Call to Action',
  name: 'cta',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 1, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fieldsets: [{ name: 'ctaoptions', title: 'Call to action Button' }],
  fields: [
    { name: 'Name', type: 'string', title: 'Name' },
    { name: 'Description', type: 'text', title: 'Description', rows: 5 },

    {
      name: 'Type',
      type: 'string',
      title: 'Type',
      options: {
        list: ['general', 'Seven Day Pass', 'Personal Training', 'Membership', 'Arrange a Call Back'],
      },
    },
  ],
};
