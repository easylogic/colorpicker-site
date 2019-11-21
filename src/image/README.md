---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Image

Image is a collection of colors.

What color can do is also done in the image, and it can create the image-only state.

So being able to deal with color is like saying that you can handle images.

Let's look at some of the filters that can handle images.

## Filter 

An image filter is a process that produces a completely different image by performing a special operation on one image.

### GrayScale

<image-filter :filter="['grayscale', 100]" filterValue1Text="Adjust" />
Making gray tones, leaving only contrast

### Contrast

<image-filter :filter="['contrast', 50]" :min="-100" :max="100" />

### Saturation 
<image-filter :filter="['saturation', 30]" />

### Brightness
<image-filter :filter="['brightness', 50]" description="명도" /> 

### Noise
<image-filter :filter="['noise', 50]" filterValue1Text="Adjust" :min="1" />


### Tint
<image-filter :filter="['tint', 0.1, 0.1, 0.1]" filterValue1Text="red" filterValue2Text="green" filterValue3Text="blue" :max="1" :min="0" :step="0.01" />

### Gradient 
<image-filter :filter="['gradient', 'black,rgba(255, 255, 30, 0.5)', 40]" filterValue1Type="input" filterValue1Text="Color List"  filterValue2Text="Scale" :min="10" :max="1000" /> 

Please refer to [Gradient](/colorpicker/api.md#gradient-scale)

### Sepia
<image-filter :filter="['sepia', 100]" :min="-100" :max="100" />

::: tip 
https://en.wikipedia.org/wiki/Sepia_(color)
:::

### Negative
<image-filter :filter="['negative', 50]" :min="0" :max="100" />

### Threshold
<image-filter :filter="['threshold', 120, 100]" filterValue1Text="Adjust" :min="0" :max="100" />

::: tip
Thresholding is the simplest method of image segmentation. From a grayscale image, thresholding can be used to create binary images (Shapiro, et al. 2001:83).

https://en.wikipedia.org/wiki/Thresholding_(image_processing)
:::

### Hue 
<image-filter :filter="['hue', 120]" filterValue1Text="Hue Color" :min="0" :max="360" />


### Shade

<image-filter :filter="['shade', 3, 1, 1]" filterValue1Text="Red" filterValue2Text="Green" filterValue3Text="Blue" title="Shade"  :min="0" :max="10" :step="0.1" />

### Invert

<image-filter :filter="['invert']" />

### Sharpen 

<image-filter :filter="['sharpen']" />

### Emboss 

<image-filter :filter="['emboss', 20]" :max="50" :step="0.1" />

### Blur 
<image-filter :filter="['blur', 5]" :min="3" :max="100" />

### Stack Blur 
<image-filter :filter="['stack-blur', 5]" filterValue1Text="Radius" :min="3" :max="100" />

### Motion Blur 

<image-filter :filter="['motion-blur', 20]" />

### Laplacian

<image-filter :filter="['laplacian', 100]" />

### Sobel 

<image-filter :filter="['sobel', 100]" />

::: tip
https://en.wikipedia.org/wiki/Sobel_operator
:::
      
## Histogram

What is the current status of the image?

### Gray Histogram 
<image-histogram :black="true" />

Left is dark, right is bright


### Red Histogram
<image-histogram :red="true" />
### Green Histogram
<image-histogram :green="true" />
### Blue Histogram
<image-histogram :blue="true" />

### All Histogram
<image-histogram :blue="true" :red="true" :green="true" />
      
## Palette 

You can pick the color you use the most in the image.

<image-palette description="pick count" :count="10" /> 

::: tip
Internally, use the [K-means] (https://en.wikipedia.org/wiki/K-means_clustering) algorithm to extract the final color.

This is useful for extracting colors from a pixel image.
:::



<image-palette-item src="/resources/image/palette/daylight.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/butterfly.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/dandelion.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/flower.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/spring.jpg" :count="20" />  

refer:  pixabay.com