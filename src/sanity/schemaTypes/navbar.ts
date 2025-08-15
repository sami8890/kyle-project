import { Rule as ValidationRule } from '@sanity/types'

const navbar = {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    {
      name: 'logoText',
      title: 'Logo Text',
      type: 'string',
      description: 'The text part of your logo',
      initialValue: 'ContntrGrowth',
      validation: (Rule: ValidationRule) => Rule.required()
    },
    {
      name: 'logoHighlight',
      title: 'Logo Highlight Text',
      type: 'string',
      description: 'The colored part of your logo',
      initialValue: 'Growth',
      validation: (Rule: ValidationRule) => Rule.required()
    },
    {
      name: 'logoImage',
      title: 'Logo Image',
      type: 'image',
      description: 'Upload your logo image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          description: 'Important for SEO and accessibility',
          initialValue: 'ContentGrowth Logo'
        }
      ]
    },
    {
      name: 'links',
      title: 'Navigation Links',
      type: 'array',
      description: 'Add your navigation links here',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (Rule: ValidationRule) => Rule.required()
            },
            {
              name: 'href',
              title: 'Link',
              type: 'string',
              description: 'Can be #anchor or full URL',
              validation: (Rule: ValidationRule) => Rule.required()
            },
            {
              name: 'submenu',
              title: 'Submenu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    { name: 'label', title: 'Label', type: 'string', validation: (Rule: ValidationRule) => Rule.required() },
                    { name: 'href', title: 'Link', type: 'string', validation: (Rule: ValidationRule) => Rule.required() }
                  ]
                }
              ]
            }
          ]
        }
      ],
      initialValue: [
        { label: "Services", href: "#services" },
        { label: "Process", href: "#process" },
        { label: "Framework", href: "#framework" },
        { label: "Results", href: "#results" },
        { label: "Pricing", href: "#pricing" },
        { label: "About", href: "#about" }
      ]
    },
    {
      name: 'ctaButton',
      title: 'CTA Button',
      type: 'object',
      fields: [
        { 
          name: 'text', 
          title: 'Button Text', 
          type: 'string',
          initialValue: 'Get Started',
          validation: (Rule: ValidationRule) => Rule.required()
        },
        { 
          name: 'href', 
          title: 'Button Link', 
          type: 'string',
          initialValue: 'https://cal.com/contntr/',
          validation: (Rule: ValidationRule) => Rule.required()
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'logoText',
      subtitle: 'logoHighlight'
    },
    prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
      return {
        title: `${title ?? ''}${subtitle ? ` (${subtitle})` : ''}`,
        subtitle: 'Navigation Bar Configuration'
      }
    }
  }
}

export default navbar
