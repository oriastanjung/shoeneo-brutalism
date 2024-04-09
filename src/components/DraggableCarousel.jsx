
import React from "react";
// import Flickity from "flickity";
import Flickity from "react-flickity-component";
import "flickity/css/flickity.css";


const DraggableCarousel= ({ data }) => {
  return (
    <Flickity
      className="carousel outline-none"
      disableImagesLoaded={true}
      elementType={'div'} // default 'div'
      reloadOnUpdate // default false
      static // default false
      options={{
        draggable: true,
        initialIndex: 0,
        pageDots: false,
        contain: true,
        prevNextButtons: false,
        lazyLoad: true,
      }} // takes flickity options {}
    >
      <div dangerouslySetInnerHTML={{__html : data}}>1</div>
    </Flickity>
  );
};

export default DraggableCarousel;