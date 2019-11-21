<template>    
    <div class="colorpicker">
        <div class="colorpicker-style colorpicker-structure" :data-saturation="saturation" :data-value="value" ref="defaultStyle" data-type="default"></div>
    </div>
</template>

<script>
import { Color, ColorPicker} from 'codemirror-colorpicker'
import 'codemirror-colorpicker/dist/codemirror-colorpicker.css'

export default {
    props: {
        saturation: {
            type: Boolean,
            default: false 
        },
        value: {
            type: Boolean,
            default: false 
        }
    },
    mounted () {

        new ColorPicker({
            position: 'inline',
            type: 'default',
            color: 'blue',
            container: this.$refs.defaultStyle,
            onChange: (c) => {
                console.log(this, c);
            }
        })
    }
}
</script>

<style lang="stylus">
.colorpicker-structure {

    &[data-saturation=true] {
        .control {
            display: none;
        }   

        .color {

            .saturation {
                
                .value {

                    display: none;
                }    
            }    
        }
    }

    &[data-value=true] {
        .control {
            display: none;
        }   

        .color {
            .saturation   {
                background-image: none;                
            }
            &:hover {
                .saturation {
                    margin-left: 0px;    
                }    
            }
        }
    }    

    .control {
        padding: 0px;
        .opacity,
        .empty,
        .color{
            display: none;
        }

    }

    .color {
        overflow: visible;
        .saturation {
            transition: margin-left 0.5s linear;

            .value {
                transition: margin-left 0.5s linear;                
            }
        }

        &:hover {
            .saturation {
                margin-left: 100%;
                background-color: rgba(0, 0, 0, 0.2);                
                border:1px solid #ececec;
                box-sizing: border-box;

                .value {
                    margin-left: 100%;    
                }
            }    
        }


    }

    .information {
        display: none;
    }

    .colorsets {
        display: none;
    }
}
</style>

