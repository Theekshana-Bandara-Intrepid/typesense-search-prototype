import Typesense from "typesense";
import { useRuntimeConfig } from "#imports";

export function createTypesenseClient() {
  const config = useRuntimeConfig();

  return new Typesense.Client({
    nodes: [
      {
        host: config.public.typesenseHost,
        port: Number(config.public.typesensePort),
        protocol: config.public.typesenseProtocol,
      },
    ],
    apiKey: config.public.typesenseSearchOnlyKey,
  });
}
