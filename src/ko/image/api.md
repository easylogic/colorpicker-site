---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Image API

Image 에서 봤던 효과를 실제로 사용할 수 있는 API 입니다. 

## Filter 

필터는 image 를 변환하는 과정에 쓰입니다. 

```js
Color.ImageToURL(url, ImageFilter.grayscale(100), (newFilterImageUrl) => {
    console.log(newFilterImageUrl) // return datauri 
})
```

위 함수는 특정 이미지 URL 을 매개변수로 넘기고 grayscale 필터를 적용한  이미지 url (newFilterImageUrl) 을 datauri 형태로 반환합니다. 


### Filter 생성 

필터들은 몇가지 방법으로 재조합 할 수 있습니다. 

```js
ImageFilter.grayscale(100)  // 싱글 필터 
```

이렇게 단독으로 쓸 수 있고 여러가지를 조합 할 수 있습니다. 

```js
ImageFilter.multi( 
    ImageFilter.grayscale(100),
    ImageFilter.sepia(100)
)
```

좀 더 줄여서 사용할 수 있습니다. 

```js
ImageFilter.multi(
    ['grayscale', 100],
    ['sepia', 100]
)

```

### Filter 재작성 하기 

Filter 는 단순한 함수로 이루어져 있습니다. 

```js

ImageFilter.myfilter = function () {
    return function (bitmap) {
        // bitmap.pixels
        // bitmap.width
        // bitmap.height

        // Bitmap 객체를 사용해서 새로운 Bitmap 객체를 만들어내면 됩니다. 
        // 아니면 이전 bitmap 객체를 변형하여 다시 리턴해도 됩니다. 

        return bitmap    
    }
} 

```

간단한 샘플을 하나 볼까요?  아래 샘플은 이미지의 전체 밝기를 조금 올려주는 필터입니다. 

RGB 색 기준으로 많아질 수록 밝아 지기 때문에 RGB 를 1씩 더 해보도록 합니다. 

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

bitmap 객체를 직접 다루는건 복잡하기 때문에 쉽게 rgb 를 핸들링 할 수 있도록 몇가지 유틸리티 함수를 제공합니다. 

:::

### Filter Util 

#### ImageFilter.pack   

RGB 색상을 쉽게 컨트롤 하기 위해서 Loop 를 생성합니다. 

```js
ImageFilter.pack((pixels, i) => {
    pixels[i] += 1;         // red 
    pixels[i + 1] += 1;     // green
    pixels[i + 2] += 1;     // blue 
})
```

#### ImageFilter.convolution

고차원 필터 함수 

```js
// blur
F.convolution([
    1/9, 1/9, 1/9,
    1/9, 1/9, 1/9,
    1/9, 1/9, 1/9
]);
```

::: tip

http://dev-momo.tistory.com/entry/Javascript-Image-Filter-convolve

:::

#### ImageFilter.multi 

여러 개의 filter 함수를 합쳐서 하나의 필터 함수로 만들어줍니다. 

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

multi 와 비슷하게  배열형태의 필터를 하나로 합쳐서 필터 함수를 만들어줍니다. 

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

특정 필터의 실행횟수를 만들어내는 필터 함수 입니다. 

```js
ImageFilter.counter('grayscale', 10)  // grayscale 10 번 실행하는 필터 함수 
```

## Filter List 

기본 적으로 어떤 필터들이 있는지 한 번 보시죠. 

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
 
참고 [Gradient](/ko/color/api.md#gradient-scale)

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
참조 https://github.com/flozz/StackBlur
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

특정 이미지의 Histogram 을 이미지로 얻어올 수 있다. 

```js
Color.ImageToHistogram(this.imageSrc, (url) => {
    this.filteredImageSrc = url;
})   
```

기본적으로 명암 비율을 가진 histogram 만 이미지화 한다. 

<image-histogram description="왼쪽은 어두운, 오른쪽은 밝은" :black="true" />

R, G , B 영역에 대해서 얻어올 수도 있다. 

```js
Color.ImageToHistogram(this.imageSrc, (url) => {
    this.filteredImageSrc = url;
}, { red: true, green: false, blue: true })   
```

### Histogram 리스트 얻어오기 

```js
Color.histogram(url, function ( { black, red, green, blue } ) {
    // arr is histogram list 
})
```

## Palette 

이미지에서 가장 많이 사용하는 색을 고를 수 있습니다. 

```js
Color.ImageToRGB(url, { maxWidth: 100 }, (results) => {
    // colorCount 만큼의 색상 추출 
    this.paletteColors = Color.palette(results, colorCount).map(color => {
        const contrast = Color.contrast(color)
        return { color, contrast, textColor: contrast >= 128 ? 'black' : 'white' }
    }).sort((a, b) => { // 밝기로 정렬 
        if (a.contrast === b.contrast) return 0 
        return a.contrast > b.contrast ? 1 : -1; 
    })
}) 
```


<image-palette description="가장 많이 쓰는 컬러를 뽑아보자." :count="10" /> 

::: tip
내부적으로 [K-means](http://norman3.github.io/prml/docs/chapter09/1.html) 알고리즘을 사용하여 최종 색상을 뽑습니다. 

픽셀로 이루어진 이미지에서 색을 뽑아 낼 때 유용하게 사용할 수 있습니다. 
:::