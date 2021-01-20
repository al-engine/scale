import { OrgbValue, Pixels, SetPixel } from '@al-engine/core';

export interface Size {
  width: number;
  height: number;
}

export default function createFramedUpscale(from: Size, to: Size) {
  const ratioWidth = Math.floor(to.width / from.width);
  const ratioHeight = Math.floor(to.height / from.height);
  const ratio = ratioWidth < ratioHeight ? ratioWidth : ratioHeight;
  const offsetX = Math.floor((to.width - from.width * ratio) / 2);
  const offsetY = Math.floor((to.height - from.height * ratio) / 2);
  return function(pixels: Pixels): SetPixel {
    function setPixel(x: number, y: number, color: OrgbValue) {
      const _x = offsetX + x * ratio;
      const _y = offsetY + y * ratio;
      for (let i = 0; i < ratio; i++) {
        for (let j = 0; j < ratio; j++) {
          pixels.setPixel(_x + i, _y + j, color);
        }
      }
    }

    return setPixel;
  };
}
