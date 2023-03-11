import React from "react";
import { useSelector } from "react-redux";
import { queryCatalogue } from "../../catalogues/selectFromCatalogue";



function FeaturedImage() {
    const menuState = useSelector((state) => state.menuState);
    const menuStateQuery = queryCatalogue(menuState.menuState, 'subCategories', menuState.subMenuState );
    const featuredImageReference = menuStateQuery.featuredImageSrc;
    return(
        <div id = 'featured-image'> <img src={process.env.PUBLIC_URL + featuredImageReference } alt = 'featured item' /></div>
    )
}
export default FeaturedImage;