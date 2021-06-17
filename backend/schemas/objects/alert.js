import { MdAddAlert as icon } from 'react-icons/md';
export default {
  name: 'alert',
  title: 'Site Alert',
  type: 'document',
  icon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For internal use only.',
    },
    {
      name: 'text',
      title: 'Alert text',
      type: 'text',
    },
    {
      name: 'callToAction',
      title: 'Call to action',
      type: 'object',
      options: {
        columns: 2, // Puts the fields side-by-side
      },
      fields: [
        {
          name: 'text',
          title: 'Link text',
          type: 'string',
        },
        {
          name: 'url',
          title: 'Link URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'style',
      title: 'Banner style',
      type: 'string',
      options: {
        // Creates a dropdown to select the strings
        list: ['Sale', 'Promo', 'Breaking'],
      },
    },
  ],
};
