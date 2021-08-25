import { RiCalendarTodoLine as icon } from 'react-icons/ri';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Plan',
  name: 'plan',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The plan name will be displayed at the top of the page. Be descriptive here e.g. "5 Day Muscle Builder"`,
    },
  ]
};
