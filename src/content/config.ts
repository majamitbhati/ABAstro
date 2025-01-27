import {z, defineCollection, reference} from "astro:content"
import Price from "../components/Price.astro";


const shopsCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: reference ( "zprice" ),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
        }),
});


const foodCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: z.number().optional().default(23000),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
        }),
});




const anchorCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: z.number().optional().default(33000),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
        }),
});




const officeCollection = defineCollection({
    schema: ({image}) =>
        z.object({
            category: z.string(),
            date: z.string(),
               // .transform(str => format(new Date(str), "MMMM d, yyyy")),
            featured: z.boolean().default(false),
            image: image(),
            title: z.string(),
            floor: z.string(),
            size: z.number(),
            price: z.number().optional().default(8200),
            atrium: z.boolean(),
            corner: z.boolean(),
            status: z.string(),
            byowner: z.boolean(),
            discount: z.number(),
            brokerage: z.boolean(),
            plc: z.string(),
            name: z.string(),
            contactno: z.string(),
            giftvisit: z.string(),
            giftbuy: z.string()
        }),
});

const priceCollection = defineCollection ({ type: "data",
    schema: z.object({
        typeid: z.string(),
        desc: z.string(),
        type: z.string(),
        priceNow: z.number()

    }),
});




export const collections = {
    shops: shopsCollection,
    foods: foodCollection,
    anchors: anchorCollection,
    offices: officeCollection,
    zprice: priceCollection
}