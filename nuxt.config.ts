// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Import automatically from env
  runtimeConfig: {
    public: {
      typesenseHost: "",
      typesensePort: "",
      typesenseProtocol: "",
      typesenseSearchOnlyKey: "",
    },
    extends: "./.nuxt/tsconfig.json",
    include: ["types/**/*.d.ts"],
  },
});
