export default {
  title: 'Plan Workout',
  name: 'planBuilder',
  type: 'object',
  options: { columns: 2 },
  fields: [
    { title: 'Day', name: 'day', type: 'number' },
    { title: 'Workout', name: 'workout', type: 'reference', to: { type: 'workout' } },
  ],
  preview: {
    select: {
      title: `workout.name`,
      subtitle: 'workout.description',
      media: 'workout.image.asset'
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media
      }
    },

  }
}