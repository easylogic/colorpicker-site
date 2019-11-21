---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Image API


## Filter 

Filters are used to transform images.

```js
Color.ImageToURL(url, ImageFilter.grayscale(100), (newFilterImageUrl) => {
    console.log(newFilterImageUrl) // return datauri 
})
```

The above function passes the image url as a parameter and returns the image url (newFilterImageUrl) with the grayscale filter applied as datauri.

### Create Filter 

Filters can be combined.

#### single filter 

```js
ImageFilter.grayscale(100)  // single filter 
```

#### multi filter 

```js
ImageFilter.multi( 
    ImageFilter.grayscale(100),
    ImageFilter.sepia(100)
)
```

You can use it simply.


```js
ImageFilter.multi(
    ['grayscale', 100],
    ['sepia', 100]
)

```

### Make Filter 

The Filter consists of simple functions.

```js
ImageFilter.myfilter = function () {
    return function (bitmap) {
        // bitmap.pixels
        // bitmap.width
        // bitmap.height

        // Create a new Bitmap object using a Bitmap object.
        // Or you can transform the old bitmap object and return it again.

        return bitmap    
    }
} 
```

The following sample is a filter that slightly increases the overall brightness of the image.

As the RGB color standard becomes brighter, it is better to add RGB one more.

```js
ImageFilter.brightness = function () {
    return ImageFilter.pack((pixels, i) => {
        pixels[i] += 1;         // red 
        pixels[i + 1] += 1;     // green
        pixels[i + 2] += 1;     // blue 
    })
}
```

::: tip

Handling bitmap objects is complicated, so there are a few utility functions that you can use to easily handle rgb.

:::

### Filter Util 

#### ImageFilter.pack   

Create a Loop to easily control RGB colors.

```js
ImageFilter.pack((pixels, i) => {
    pixels[i] += 1;         // red 
    pixels[i + 1] += 1;     // green
    pixels[i + 2] += 1;     // blue 
})
```

#### ImageFilter.convolution

Higher-order filter functions

```js
// blur
F.convolution([
    1/9, 1/9, 1/9,
    1/9, 1/9, 1/9,
    1/9, 1/9, 1/9
]);
```

::: tip

https://en.wikipedia.org/wiki/Kernel_(image_processing)

:::

#### ImageFilter.multi 

It combines several filter functions into one filter function.

```js
ImageFilter.multi(
    'blur', 
    'grayscale', 
    'sharpen', 
    ['blur', 3], 
    function (bitmap) {  
        return bitmap 
    }
);
```

#### ImageFilter.merge 

It combines array type filters similar to multi to create filter function.

```js
ImageFilter.merge([
    'blur', 
    'grayscale', 
    'sharpen', 
    ['blur', 3], 
    function (bitmap) {  
        return bitmap 
    }
]);
```

#### ImageFilter.counter 

A filter function that creates a run count for a specific filter.

```js
ImageFilter.counter('grayscale', 10)  // filter function to execute grayscale 10 times
```

## Filter List 

### GrayScale

```js
ImageFilter.grayscale(amount)  //  amount is  0..100 
```

### Contrast
```js
ImageFilter.contrast(amount)  //  amount is  -100..100 
```

### Saturation 
```js
ImageFilter.saturation(amount)  //  amount is  0..100 
```

### Brightness
```js
ImageFilter.brightness(amount)  //  amount is  0..100 
```

### Noise
```js
ImageFilter.noise(amount)  //  amount is  1..100 
```

### Gradient
```js
ImageFilter.gradient(colors, scale) // scale is default value 256 
```

Please refer to [Gradient](/colorpicker/api.md#gradient-scale)

### Sepia
```js
ImageFilter.sepia(amount)  //  amount is  -100..100 
```

### Negative
```js
ImageFilter.negative(amount)  //  amount is  0..100 
```

### Threshold
```js
ImageFilter.threshold(scale, amount)  //  scale is 0..255, amount is  -100..100 
```

### Hue 
```js
ImageFilter.hue(amount)  //  amount is  0..360
```

### Shade
```js
ImageFilter.shade(r, g, b)  //  r,g,b is  0..10 , step = 0.1  
```

### Invert
```js
ImageFilter.invert()  
```

### Sharpen 
```js
ImageFilter.sharpen(amount)
```

### Emboss 
```js
ImageFilter.emboss(amount)  //  amount is  0..50, step = 0.1 
```

### Blur 
```js
ImageFilter.blur(radius)  //  radius is  3..100 
```

### Stack Blur 
```js
ImageFilter['stack-blur'](radius)  //  radius is  3..100 
```

::: tip 
https://github.com/flozz/StackBlur
:::

### Motion Blur 
```js
ImageFilter['motion-blur'](amount)  //  amount is  0..100 
```

### Laplacian
```js
ImageFilter.laplacian(amount)  //  amount is  0..100 
```

### Sobel 
```js
ImageFilter.sobel(amount)  //  amount is  0..100 
```
      
## Histogram

A histogram of a specific image can be obtained as an image.

```js
Color.ImageToHistogram(this.imageSrc, (url) => {
    this.filteredImageSrc = url;
})   
```

Basically, only the histogram with the contrast ratio is imaged.

<image-histogram description="왼쪽은 어두운, 오른쪽은 밝은" :black="true" />

R, G, and B regions.

```js
Color.ImageToHistogram(this.imageSrc, (url) => {
    this.filteredImageSrc = url;
}, { red: true, green: false, blue: true })   
```

### Get histogram list

```js
Color.histogram(url, function ( { black, red, green, blue } ) {
    // arr is histogram list 
})
```

## Palette 

You can pick the color you use the most in the image.

```js
Color.ImageToRGB(url, { maxWidth: 100 }, (results) => {
    // Extract color by colorCount

    this.paletteColors = Color.palette(results, colorCount).map(color => {
        const contrast = Color.contrast(color)
        return { color, contrast, textColor: contrast >= 128 ? 'black' : 'white' }
    }).sort((a, b) => { // sort by contrast 
        if (a.contrast === b.contrast) return 0 
        return a.contrast > b.contrast ? 1 : -1; 
    })
}) 
```

<image-palette :count="10" /> 

::: tip
Internally, use the [K-means] (https://en.wikipedia.org/wiki/K-means_clustering) algorithm to extract the final color.

This is useful for extracting colors from a pixel image.
:::