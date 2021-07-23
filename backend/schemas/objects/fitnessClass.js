import { HiUserGroup as icon } from 'react-icons/hi';
export default {
  title: 'Fitness Class',
  name: 'fitnessClass',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Will this Fitness Class be displayed on the website?`,
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Class Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().warning('We need a name for this class.'),
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
      description: `Try and be as descriptive as possible here. Remember, the person looking at this class may have no idea what the excercises are involved. Let them know what to expect. Is the class cardio or strength building? What equipment will be used? What muscle group does the class target? Is the class suitable for begginners? WHat are the benefits of doing the class? `,
      validation: (Rule) => Rule.min(50).warning('Descriptions should be longer than 50 characters'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: ``,
      options: {
        hotspot: true, // Make the image editable
      },
    },
  ],
  initialValue: {
    isActive: true,
  },
};
