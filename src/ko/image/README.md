---
home: false
# layout: false
#actionText: Get Started →
#actionLink: /guide/
---

# Image

Color 를 알아가다보니  결국은 Image 로 와 버렸습니다.  Image 는 Color의 모음이죠. 

Color 가 할 수 있는 일들은 이미지에서도 할 수 있고 이미지만의 톡득한 상태를 만들어 낼 수 있습니다. 

그래서 색을 다룰 수 있다는 것은 곧 이미지를 다룰 수 있다는 말과 같다. 

이미지를 다룰 수 있는 몇가지 중에  먼저 필터에 대해서 알아보자. 


## Filter 

이미지 필터란  하나의 이미지에 특수한 연산을 해서 전혀 다른 이미지를 만들어 내는 것을 말한다. 

### GrayScale

<image-filter :filter="['grayscale', 100]" filterValue1Text="Adjust" />
회색톤으로 만들기, 명암만 남기기 
### Contrast

<image-filter :filter="['contrast', 50]" :min="-100" :max="100" />

대비/강조
### Saturation 
<image-filter :filter="['saturation', 30]" />
채도

### Brightness
<image-filter :filter="['brightness', 50]" description="명도" /> 
명도

### Noise
<image-filter :filter="['noise', 50]" filterValue1Text="Adjust" :min="1" />
노이즈

### Tint
<image-filter :filter="['tint', 0.1, 0.1, 0.1]" filterValue1Text="red" filterValue2Text="green" filterValue3Text="blue" :max="1" :min="0" :step="0.01" />
틴트   

### Gradient 
<image-filter :filter="['gradient', 'black,rgba(255, 255, 30, 0.5)', 40]" filterValue1Type="input" filterValue1Text="Color List"  filterValue2Text="Scale" :min="10" :max="1000" /> 

Gradient 형식으로 필터링 하기 

참고 [Gradient](/ko/color/api.md#gradient-scale)

### Sepia
<image-filter :filter="['sepia', 100]" :min="-100" :max="100" />
짙은 갈색의 수채화 물감.

### Negative
<image-filter :filter="['negative', 50]" :min="0" :max="100" />

### Threshold
<image-filter :filter="['threshold', 120, 100]" filterValue1Text="Adjust" :min="0" :max="100" />
특정 임계치를 갖는 색만 표시

### Hue 
<image-filter :filter="['hue', 120]" filterValue1Text="Hue Color" :min="0" :max="360" />

색조

### Shade

<image-filter :filter="['shade', 3, 1, 1]" filterValue1Text="Red" filterValue2Text="Green" filterValue3Text="Blue" title="Shade"  :min="0" :max="10" :step="0.1" />

그늘 

### Invert

<image-filter :filter="['invert']" />

색 뒤집기 

### Sharpen 

<image-filter :filter="['sharpen']" />

거칠게 표시 

### Emboss 

<image-filter :filter="['emboss', 20]" :max="50" :step="0.1" />

엠보싱 효과

### Blur 
<image-filter :filter="['blur', 5]" :min="3" :max="100" />

흐리게 만들기, StackBlur 사용 

### Stack Blur 
<image-filter :filter="['stack-blur', 5]" filterValue1Text="Radius" :min="3" :max="100" />

흐리게 만들기

### Motion Blur 

<image-filter :filter="['motion-blur', 20]" />

움직이는 것 처럼 보이게 하기  

### Laplacian

<image-filter :filter="['laplacian', 100]" />

윤곽선 표시 하기

### Sobel 

<image-filter :filter="['sobel', 100]" />

윤곽선 표시 하기
      
## Histogram

이미지의 현재 상태는 어떻게 보일까? 

### 밝기 Histogram 
<image-histogram description="왼쪽은 어두운, 오른쪽은 밝은" :black="true" />

### Red Histogram
<image-histogram description="왼쪽은 어두운, 오른쪽은 밝은" :red="true" />
### Green Histogram
<image-histogram description="왼쪽은 어두운, 오른쪽은 밝은" :green="true" />
### Blue Histogram
<image-histogram description="파란색 계통은 거의 없는" :blue="true" />

### All Histogram
<image-histogram description="파란색 계통은 거의 없는" :blue="true" :red="true" :green="true" />
      
## Palette 

이미지에서 가장 많이 사용하는 색을 고를 수 있습니다. 

<image-palette description="가장 많이 쓰는 컬러를 뽑아보자." :count="10" /> 

::: tip
내부적으로 [K-means](http://norman3.github.io/prml/docs/chapter09/1.html) 알고리즘을 사용하여 최종 색상을 뽑습니다. 

픽셀로 이루어진 이미지에서 색을 뽑아 낼 때 유용하게 사용할 수 있습니다. 
:::

이미지 출처 : pixabay.com

<image-palette-item src="/resources/image/palette/daylight.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/butterfly.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/dandelion.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/flower.jpg" :count="20" />  

<image-palette-item src="/resources/image/palette/spring.jpg" :count="20" />  