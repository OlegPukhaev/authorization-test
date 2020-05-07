export default class RestoService {
  _apiBase = "http://localhost:3000";

  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, recieved ${res.status}`);
    }

    return await res.json();
  }

  async getProductCategories() {
    return await this.getResourse("/caregories/");
  }
  async getProductList() {
    return await this.getResourse("/products/");
  }
  async getProductByCatId(catId) {
    return await this.getResourse(`/products/?catId=${catId}`);
  }
}
