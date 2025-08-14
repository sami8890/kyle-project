// schemastype/frameworkSection.ts
export default {
  name: 'frameworkSection',
  title: 'Our Approach Section',
  type: 'document',
  description: 'Customize the "Our Approach" section that explains your business framework',
  
  fields: [
    // Section Header
    {
      name: 'header',
      title: 'Top Section Content',
      type: 'object',
      description: 'Content at the top of the section',
      fields: [
        {
          name: 'badge',
          title: 'Blue Tag Text',
          type: 'string',
          description: 'Text in the blue badge at the top (e.g., "Our Approach")',
          initialValue: 'Our Approach'
        },
        {
          name: 'mainHeading',
          title: 'Main Title',
          type: 'string',
          description: 'The big heading for this section',
          initialValue: 'The DevAuthority™ Framework'
        },
        {
          name: 'highlightedText',
          title: 'Blue Text in Title',
          type: 'string',
          description: 'The part of the title that appears in blue',
          initialValue: 'DevAuthority™'
        },
        {
          name: 'subheading',
          title: 'Description',
          type: 'text',
          description: 'Short text below the main title',
          initialValue: 'A proven methodology to help software agencies attract premium clients and scale predictably'
        }
      ]
    },
    
    // Middle Section with Three Steps
    {
      name: 'steps',
      title: 'Middle Three Boxes',
      type: 'array',
      description: 'The three boxes with icons in the middle',
      validation: Rule => Rule.length(3).error('Please add exactly 3 items'),
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Choose an icon for this box',
            options: {
              list: [
                {title: 'Code Icon', value: 'Code'},
                {title: 'Layers Icon', value: 'Layers'},
                {title: 'Lightning Icon', value: 'Zap'},
                {title: 'Database Icon', value: 'Database'},
                {title: 'Chart Icon', value: 'LineChart'},
                {title: 'Target Icon', value: 'Target'}
              ]
            },
            initialValue: 'Code'
          },
          {
            name: 'title',
            title: 'Box Title',
            type: 'string',
            description: 'Title text for this box',
            initialValue: 'Technical Excellence'
          }
        ]
      }]
    },
    
    // Bottom Section with Three Features
    {
      name: 'features',
      title: 'Bottom Three Feature Boxes',
      type: 'array',
      description: 'The three feature boxes at the bottom',
      validation: Rule => Rule.length(3).error('Please add exactly 3 features'),
      of: [{
        type: 'object',
        fields: [
          {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Choose an icon for this feature',
            options: {
              list: [
                {title: 'Database Icon', value: 'Database'},
                {title: 'Chart Icon', value: 'LineChart'},
                {title: 'Target Icon', value: 'Target'},
                {title: 'Code Icon', value: 'Code'},
                {title: 'Layers Icon', value: 'Layers'},
                {title: 'Lightning Icon', value: 'Zap'}
              ]
            },
            initialValue: 'Database'
          },
          {
            name: 'title',
            title: 'Feature Title',
            type: 'string',
            description: 'Title for this feature box',
            initialValue: 'Technical SEO & Site Optimization'
          },
          {
            name: 'description',
            title: 'Feature Description',
            type: 'text',
            description: 'Short explanation of this feature',
            initialValue: 'We optimize your site structure, speed, and indexing to improve user experience and conversion rates.'
          },
          {
            name: 'points',
            title: 'Bullet Points',
            type: 'array',
            description: 'List of key benefits (3-5 items)',
            of: [{type: 'string'}],
            initialValue: [
              'Site structure optimization',
              'Performance enhancement',
              'Crawlability improvements',
              'User experience refinement'
            ]
          }
        ]
      }]
    }
  ],
  
  preview: {
    select: {
      title: 'header.mainHeading'
    },
    prepare({title}: {title: string}) {
      return {
        title: 'Our Approach Section',
        subtitle: title
      }
    }
  }
}