import URLService from "./URLServices";
import { EndPoints, baseUrl } from "../resources/Constants";


export default class URLManager {
  getAllProducts() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GET_ALL_PRODUCTS;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, "GET")
      .then((res: any) => res);
  }
getSingleProduct({ productId }: { productId: any }) {
  let urlService = new URLService();
  let urlPath =
    baseUrl + EndPoints.GET_SINGLE_PRODUCT + `?product_id=${productId}`; // ✅ Use productId, not id
  console.log(urlPath);
  return urlService
    .fetchAsyncData(urlPath, {}, "POST")
    .then((res: any) => res);
}
}
