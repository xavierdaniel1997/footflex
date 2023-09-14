import React from "react";
// import ProductImages from "../components/ProductImages";
import ProductDetials from "../components/ProductDetials";
import {shoesImage} from "../dummyDatas/bannerBrandImages";

const ProductPage = () => {
  return (
    <div className="mt-28 mx-20">
      <ProductDetials/>
    </div>
  );
};

export default ProductPage;









{/* <div className="mt-28 mx-20 flex">
      {shoesImage.map((shoeDetilas) => {
        const {id, brand, title, imageUrl, description, productcode} =
          shoeDetilas;

        return (
          <div key={id}>
            <div  className="w-1/2">
              <ProductImages imageUrl={imageUrl}/>
            </div>
            <div className="w-1/2">
              {/* <ProductDetials /> */}
      //       </div>
      //     </div>
      //   );
      // })} */}