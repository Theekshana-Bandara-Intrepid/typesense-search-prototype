import type { Client } from 'typesense'

declare module '#app' {
  interface NuxtApp {
    $typesense: Client
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $typesense: Client
  }
}

export {}