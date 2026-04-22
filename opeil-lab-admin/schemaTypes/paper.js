export default {
  name: 'paper',
  type: 'document',
  title: 'Research Paper',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Paper Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'year',
      type: 'number',
      title: 'Publication Year',
      validation: Rule => Rule.required().integer().min(1990).max(2030),
    },
    {
      name: 'authors',
      type: 'string',
      title: 'Authors',
    },
    {
      name: 'pdfFile',
      type: 'file',
      title: 'Upload PDF Document',
      options: {
        accept: '.pdf'
      }
    },
  ]
  ,
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