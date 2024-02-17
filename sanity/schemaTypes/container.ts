export default {
  name: 'container',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'assetNumber',
      type: 'string',
      title: 'Asset Number',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your container',
      options: {
        source: 'assetNumber',
      },
    },
    {
      name: 'assetNumberImage',
      type: 'image',
      title: 'Asset Number Image',
    },
    {
      name: 'sealNumberImage',
      type: 'image',
      title: 'Seal Number Image',
    },
    {
      name: 'freightBillImage',
      type: 'image',
      title: 'Freight Bill Image',
    },
  ],
}
