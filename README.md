# Al engine
## Scale

This is module for scaling for Al engine.

```nashorn js
  const from = {
    width: 100,
    height: 100,
  };
  const to = {
    width: 200,
    height: 200,
  };
  const scale = createFramedUpscale(from, to);
  const setPixel = scale(pixels);

  setPixel(0, 0, 1);
``` 
After this code calling `setPixel` will call functions from original `pixels` but twice in size, as 200x200 is twice as 100x100. 