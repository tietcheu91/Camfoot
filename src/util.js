// import React from "react";
export function getImageUrl(item) {
    return (
        require('../src/images/' +
      item.name +
      '.jpg'
    ));
  }
