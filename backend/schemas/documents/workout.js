import { BsSun as icon } from 'react-icons/bs';
export default {
  // Setup a 'document' type to house the page builder field
  title: 'Workout',
  name: 'workout',
  type: 'document',
  icon,
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).warning('Title should be longer than 2 characters'),
      description: `The title will be displayed in large type at the top of the page`,
    },
    // {
    //   title: 'Target',
    //   name: 'target',
    //   type: 'target',
    // },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: `This will appear at the top of the page`,
      options: {
        hotspot: true, // Make the image editable
      },
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      description: `You can introduce the workout here and describe some of the excercises and benefits.`,
      validation: (Rule) => [Rule.max(200).error('Description should be shorter than 200 characters')],
    },
    {
      title: 'Set Builder',
      name: 'workoutBuilder',
      type: 'array',
      options: {
        editModal: 'fullscreen',
      },
      of: [
        {
          type: 'object',
          fields: [
            { title: 'Set', name: 'set', type: 'set' },
          ],
          preview: {
            select: {
              excercise1: 'set.excercise.0.excerciseReference.excerciseName',
              excercise2: 'set.excercise.1.excerciseReference.excerciseName',
              excercise3: 'set.excercise.2.excerciseReference.excerciseName',
              excercise4: 'set.excercise.3.excerciseReference.excerciseName',
              setType: 'set.setType.title',
              image: 'set.excercise.0.excerciseReference.cover.asset'
            },
            prepare: ({ excercise1, excercise2, excercise3, excercise4, setType, image }) => {
              const excercises = [excercise1, excercise2, excercise3, excercise4];
              const subtitle = excercises.length > 0 ? `${setType} :  ${excercises.join(' | ')}` : ' ';
              const hasMoreExcercises = Boolean(excercise3);
              return {
                title: excercise1,
                subtitle: Boolean(excercise3) ? `${subtitle}...` : subtitle,
                media: image
              }
            }
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image'
    },
  },
};
