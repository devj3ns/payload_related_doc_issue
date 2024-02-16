import { CollectionConfig } from "payload/types";

const Hotels: CollectionConfig = {
  slug: "hotels",
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "slug",
      type: "text",
      index: true,
      required: true,
      localized: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      localized: true,
    },
  ],
};

export default Hotels;
