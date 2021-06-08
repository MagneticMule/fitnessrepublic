import { BsPeopleCircle as icon } from 'react-icons/bs';
import React from 'react';

export default {
  title: 'Client',
  name: 'client',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Active',
      name: 'isActive',
      type: 'boolean',
      description: `Is this person an active client of yours?`,
      validation: (Rule) => Rule.required(),
    },

    {
      title: 'First Name',
      name: 'firstName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('First names should be longer than 2 characters'),
    },
    {
      title: 'Second Name',
      name: 'secondName',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Second names should be longer than 2 characters'),
    },
    {
      title: 'Age',
      name: 'age',
      type: 'number',
    },
    {
      title: 'Avitar',
      name: 'avitar',
      type: 'image',
      description: `Put an image of the person here. This will be shown on the Staff page and a cropped version will be displayed next to any blog post they write.`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Notes',
      name: 'notes',
      type: 'array',
      of: [{ type: 'block' }],
      description: ``,
      validation: (Rule) => Rule.min(10).warning('Notes should be longer than 50 characters'),
    },
    {
      title:'Workouts',
      name: 'workout',
      type: 'object',
      fields: [
        {
          title: 'Assigned Workouts',
          name: 'workout',
          type: 'reference',
          to: [{ type: 'workout' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'firstName',
      subtitle: 'secondName',
      media: 'avitar',
    },
  },
  initialValue: {
    isActive: true,
  },
};
