export default {
  title: 'Call to Action',
  name: 'cta',
  options: {
    collapsible: true, // Makes the whole fieldset collapsible
    collapsed: false, // Defines if the fieldset should be collapsed by default or not
    columns: 2, // Defines a grid for the fields and how many columns it should have
  },
  type: 'object',
  fieldsets: [{ name: 'ctaoptions', title: 'Call to action Button' }],
  fields: [
    { name: 'Name', type: 'string', title: 'Name' },

    {
      name: 'Type',
      type: 'string',
      title: 'Type',
      options: {
        list: ['general', 'sevendaypass', 'pt', 'membership', 'callback', 'register'],
      },
    },
  ],
};
