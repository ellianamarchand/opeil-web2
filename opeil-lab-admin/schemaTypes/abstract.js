export default {
  name: 'abstract',
  type: 'document',
  title: 'Abstracts',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required(),
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
}