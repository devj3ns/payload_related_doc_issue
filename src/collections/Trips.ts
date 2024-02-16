import { CollectionConfig } from "payload/types";

const Trips: CollectionConfig = {
  slug: "trips",
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
    {
      name: "relatedHotels",
      type: "relationship",
      relationTo: "hotels",
      required: true,
    },
  ],
};

export default Trips;
