import { createTypesenseClient } from "~/utils/typesenseClient";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      typesense: createTypesenseClient(),
    },
  };
});
