export default {
  name: 'poster',
  type: 'document',
  title: 'Posters',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
    },
    {
      name: 'year',
      type: 'number',
      title: 'Year',
      validation: Rule => Rule.required().integer().min(1990).max(2030),
    },
    {
      name: 'pdfFile',
      type: 'file',
      title: 'PDF File',
      options: {
        accept: '.pdf',
      },
      validation: Rule => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      year: 'year',
    },
    prepare({ title, year }) {
      return {
        title,
        subtitle: year ? String(year) : 'No year set',
      }
    },
  },
}