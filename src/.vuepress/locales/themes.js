module.exports = {
    '/': {
        selectText: 'Languages',
        label: 'English',
        nav: [
            {
                text: 'Web Design Tool',
                link: 'https://editor.easylogic.studio'
            },
            {
                text: 'Gradient Editor',
                link: 'https://gradient.easylogic.studio'
            },            
            {
            text: 'Story',
            items: [{
                    text: '1. ColorPicker',
                    link: '/colorpicker/'
                },{
                    text: '2. GradientPicker',
                    link: '/gradientpicker/'
                },
                {
                    text: '3. Color',
                    link: '/color/'
                },
                {
                    text: '4. Image',
                    link: '/image/'
                }
            ]
        }],
        // sidebar: 'auto'
        sidebar: {
            '/colorpicker/': [
                '',
                'api'
            ],
            '/gradientpicker/': [
                '',
                'api'
            ],
            '/color/': [
                '',
                'api'
            ],
            '/image/': [
                '',
                'api'
            ],            
            '/': [
                ''
            ]
        }
    },
    '/ko/': {
        selectText: '언어 선택',
        label: '한국어', 
        nav: [
            {
                text: 'Web Design Tool',
                link: 'https://editor.easylogic.studio'
            },
            {
                text: 'Gradient Editor',
                link: 'https://gradient.easylogic.studio'
            },            
            {
                text: '이야기',
                items: [{
                    text: '1. ColorPicker',
                    link: '/ko/colorpicker/'
                },{
                    text: '2. GradientPicker',
                    link: '/ko/gradientpicker/'
                },
                {
                    text: '3. Color',
                    link: '/ko/color/'
                },
                {
                    text: '4. Image',
                    link: '/ko/image/'
                }
            ]
        }],
        // sidebar: 'auto'
        sidebar: {
            '/ko/colorpicker/': [
                '',
                'api'
            ],
            '/ko/gradientpicker/': [
                '',
                'api'
            ],
            '/ko/color/': [
                '',
                'api'
            ],
            '/ko/image/': [
                '',
                'api'
            ],            
            '/ko/': [
                ''
            ]
        }
    }
}