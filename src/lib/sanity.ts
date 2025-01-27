// import { createClient } from '@sanity/'
// import imageUrlBuilder from '@sanity/image-url'

// export const client = createClient({
//     projectId: 'your-project-id',
//     dataset: 'production',
//     apiVersion: '2021-03-25',
//     useCdn: false,
// })

// const builder = imageUrlBuilder(client)

// interface Source {
//     _ref: string;
//     _type: string;
// }

// export function urlFor(source: Source) {
//     return builder.image(source)
// }

// const previewClient = createClient({
//     projectId: 'lug9tb8w',
//     dataset: 'production',
//     apiVersion: '2021-03-25',
//     useCdn: false,
//     token: 'skWzLhSxrhRBKd0kQWvizsN0mRiBwllDjfPGziOjAjACBNwWfifdXML1qpqrnkNLcRcLBIFJTCcV7FQoPM1fa2kCazqYfOicywktQUhhC6hxZ7fetTDx5sJSiEdIhiJ02eCG8ToXtOZ2tWhcwaRilRPXwIrYJyPXyaNT9lUpnmK5b9T8bUph'
// })

// export const getClient = (usePreview = false) => usePreview ? previewClient : client

