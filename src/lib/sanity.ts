import { createClient } from "@sanity/client"
import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url"

let productionClient = {
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: "production",
	useCdn: true,
	apiVersion: import.meta.env.VITE_SANITY_VERSION,
}

const client = createClient(productionClient)

const builder = createImageUrlBuilder(client)

export function imageUrl(source: SanityImageSource) {
	return builder.image(source)
}

export function getFileUrl(ref: string) {
	const [, id, extension] = ref.split("-");
	return `https://cdn.sanity.io/files/${productionClient?.projectId}/production/${id}.${extension}`;
}