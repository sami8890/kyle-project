import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'ctaSection',
  title: 'Call to Action Section',
  type: 'document',
  description: 'Customize the call-to-action section for booking consultations',
  fields: [
    defineField({
      name: 'badge',
      title: 'Blue Badge Text',
      type: 'string',
      description: 'Text in the blue badge at the top',
      initialValue: 'Free Growth Blueprint',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heading',
      title: 'Main Heading',
      type: 'text',
      rows: 2,
      description: 'The main heading text',
      initialValue: 'Ready to Attract Premium Clients?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'highlightedText',
      title: 'Highlighted Text',
      type: 'string',
      description: 'The text that appears in blue',
      initialValue: 'Premium Clients',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Short description below the heading',
      initialValue: 'Book a free Growth Blueprint Session to discover how our specialized SEO strategy can help your software development agency scale predictably.',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'benefitsTitle',
      title: 'Benefits Title',
      type: 'string',
      description: 'Title above the benefits list',
      initialValue: "What You'll Get:",
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits List',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'List of benefits to show',
      validation: Rule => Rule.min(3),
      initialValue: [
        "Custom growth strategy tailored to your agency",
        "Competitor analysis and opportunity assessment",
        "Technical SEO audit of your current website",
        "Content gap analysis and keyword recommendations",
        "Clear roadmap for implementation"
      ]
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text to show on the button',
      initialValue: 'Schedule Your Free Call',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'calendarLink',
      title: 'Calendar Link',
      type: 'url',
      description: 'Link to your scheduling calendar',
      initialValue: 'https://cal.com/contntr/call',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'popupTitle',
      title: 'Popup Title',
      type: 'string',
      description: 'Title in the popup section',
      initialValue: 'Ready to grow your business?',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'popupDescription',
      title: 'Popup Description',
      type: 'text',
      rows: 2,
      description: 'Description in the popup section',
      initialValue: 'Click the button below to schedule a call with our team and discover how we can help you attract premium clients.',
      validation: Rule => Rule.required()
    })
  ],
  preview: {
    select: {
      title: 'heading',
      badge: 'badge'
    },
    prepare(selection) {
      const { title, badge } = selection
      return {
        title: 'CTA Section',
        subtitle: `${badge} - ${title?.slice(0, 50)}...`
      }
    }
  }
})