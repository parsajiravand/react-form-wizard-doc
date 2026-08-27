import { source } from "@/lib/source";
import { createFromSource } from "fumadocs-core/search/server";

// Static search index, so search works on a static host with no server.
export const revalidate = false;
export const { staticGET: GET } = createFromSource(source);
