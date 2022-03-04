
export type ProductColumn = {
  display_name: string,
  field: string,
  type: string
}

export type ServiceAttribute = {
  display_value: string,
  type: string,
  value?: string,
  unit?: string,
  commit?: boolean,
}

export type ProductData = {
  product_name: string,
  product_id: string
  release_date: string,
  latest: boolean,
  purpose: string,
  service_type: string,
  resource_type: string,
  first_seen: string,
  last_update: string,
  service_attributes: {
    physicalProcessor: ServiceAttribute,
    networkPerformance: ServiceAttribute,
    dedicatedEbsThroughput: ServiceAttribute,
    vcpu: ServiceAttribute,
    memory: ServiceAttribute,
  }
}

export type ProductApiResponse = {
  columns: ProductColumn[],
  data: ProductData[],
}
