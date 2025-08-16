import type { Rule } from 'sanity';





interface PricingSection {
  name: string;
  title: string;
  type: string;
  fields: unknown[]; 
  preview?: {
    select: { title: string; subtitle: string };
    prepare: (selection: { title?: string; subtitle?: string }) => { title: string; subtitle: string };
  };
}

// Helper types for preview functions
interface TierPreviewSelection {
  title?: string;
  subtitle?: string;
  recommended?: boolean;
}

interface FeaturePreviewSelection {
  title?: string;
  included?: boolean;
}

const pricingSection: PricingSection = {
  name: 'pricingSection',
  title: 'Pricing Section',
  type: 'document',
  fields: [
    {
      name: 'sectionTitle',
      title: 'Main Heading',
      type: 'string',
      description: 'Big title shown at the top of the pricing section',
      initialValue: 'Pricing & ROI',
    },
    {
      name: 'sectionSubtitle',
      title: 'Subtitle',
      type: 'text',
      description: 'Short description shown under the main heading',
      initialValue: 'Affordable premium SEO for software development agencies',
    },
    {
      name: 'badgeText',
      title: 'Top Badge Text',
      type: 'string',
      description: 'Small text shown above the title',
      initialValue: 'Investment & Returns',
    },
    {
      name: 'tiers',
      title: 'Pricing Plans',
      type: 'array',
      description: 'Add your pricing plans here',
      of: [
        {
          type: 'object',
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
              recommended: 'recommended',
            },
            prepare(selection: TierPreviewSelection) {
              const { title, subtitle, recommended } = selection;
              return {
                title: `${title || 'Untitled'} ${recommended ? '(Recommended)' : ''}`,
                subtitle: `Price: ${subtitle || 'Not set'}`,
              };
            },
          },
          fields: [
            {
              name: 'name',
              title: 'Plan Name',
              type: 'string',
              description: 'e.g., Starter, Pro, Enterprise',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'string',
              description: 'e.g., $99/month or $1000/year',
              validation: (rule: Rule) => rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              description: 'Short description about the plan',
            },
            {
              name: 'recommended',
              title: 'Mark as Recommended?',
              type: 'boolean',
              description: 'Should this plan stand out visually?',
              initialValue: false,
            },
            {
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Feature',
                      type: 'string',
                      validation: (rule: Rule) => rule.required(),
                    },
                    {
                      name: 'included',
                      title: 'Included?',
                      type: 'boolean',
                      initialValue: true,
                    },
                    {
                      name: 'note',
                      title: 'Note',
                      type: 'string',
                      description: 'Optional extra details',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      included: 'included',
                    },
                    prepare(selection: FeaturePreviewSelection) {
                      const { title, included } = selection;
                      return {
                        title: title || 'Untitled feature',
                        subtitle: included ? '✅ Included' : '❌ Not included',
                      };
                    },
                  },
                },
              ],
            },
            {
              name: 'primaryButton',
              title: 'Primary Button',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'Get Started',
                },
                {
                  name: 'href',
                  title: 'Button Link',
                  type: 'string',
                  initialValue: '#contact',
                },
              ],
            },
            {
              name: 'secondaryButton',
              title: 'Secondary Button',
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Button Text',
                  type: 'string',
                  initialValue: 'Learn More',
                },
                {
                  name: 'href',
                  title: 'Button Link',
                  type: 'string',
                  initialValue: '#learn-more',
                },
              ],
            },
            {
              name: 'buttonText',
              title: 'Button Text (fallback)',
              type: 'string',
              description: 'Used if no buttons are defined',
              initialValue: 'Learn More',
            },
            {
              name: 'buttonClass',
              title: 'Button CSS Classes',
              type: 'string',
              description: 'Additional Tailwind classes for custom styling',
            },
          ],
        },
      ],
      initialValue: [
        {
          name: 'Starter',
          price: '$999/mo',
          description: 'Perfect for new agencies',
          features: [
            { name: 'Keyword research', included: true },
            { name: 'On-page optimization', included: true },
            { name: 'Monthly reporting', included: true },
          ],
          secondaryButton: { text: 'Learn More', href: '#starter' },
        },
      ],
    },
    {
      name: 'guarantee',
      title: 'Guarantee',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: '30% Growth Guarantee',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue:
            "If we don't increase your traffic by 30% in 6 months, we'll work for free until we do.",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'sectionTitle',
      subtitle: 'sectionSubtitle',
    },
    prepare(selection: { title?: string; subtitle?: string }) {
      const { title, subtitle } = selection;
      return {
        title: title || 'Pricing Section',
        subtitle: subtitle || 'No subtitle',
      };
    },
  },
};

export default pricingSection;