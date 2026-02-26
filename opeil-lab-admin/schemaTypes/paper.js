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
      type: 'string',
      title: 'Publication Year',
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
}