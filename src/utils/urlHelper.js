const BASE_URL = 'https://sephora-api-frontend-test.herokuapp.com/';

export function getProductsUrl(filter) {
  const { page, category, priceLt, sortFrom } = filter;
  const resourcePath = 'products?';
  const soldOutPath = 'filter[sold_out_eq]=false';
  const pagePath = `&page[number]=${page}`;
  const pageSizePath = '&page[size]=18';
  const catPath = category ? `&filter[category_eq]=${category}` : '';
  const priceLtPath = priceLt ? `&filter[price_lt]=${priceLt}` : '';
  const sortFromPath = sortFrom ? `&sort=${sortFrom}` : '';

  return BASE_URL
    + resourcePath
    + soldOutPath
    + pagePath
    + pageSizePath
    + catPath
    + priceLtPath
    + sortFromPath;
}

export function getProductUrl(id) {
  return BASE_URL + `products/${id}`;
}
