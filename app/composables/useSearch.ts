export function useSearch() {
  const { $typesense } = useNuxtApp()

  const COLLECTION = 'dev_intrepid_departure'

  async function search(query: string, options: Record<string, unknown> = {}) {
    return $typesense
      .collections(COLLECTION)
      .documents()
      .search({
        q: query || '*',
        query_by: 'name, primaryCountry, locations, themes, styles',
        per_page: 20,
        ...options,
      })
  }

  return { search }
}