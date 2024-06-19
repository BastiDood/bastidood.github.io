import type { Config } from 'tailwindcss';
import typo from '@tailwindcss/typography';

export default {
    experimental: { optimizeUniversalDefaults: true },
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                brand: '#236ea5',
                hover: '#105587',
                sky: '#0a8ded',
                card: '#edeef5bb',
                prof: '#d8e7e1bb',
                fade: '#ffffff80',
            },
            fontFamily: { sans: 'Fira Sans', mono: 'Fira Code' },
        },
    },
    plugins: [typo],
} satisfies Config;
