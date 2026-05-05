import { createTypesenseClient } from "#imports";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      typesense: createTypesenseClient(),
    },
  };
});
