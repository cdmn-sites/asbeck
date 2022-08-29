import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
import {extractorSvelte} from '@unocss/core'
import presetIcons from '@unocss/preset-icons'
import replace from '@rollup/plugin-replace';

const config = {
	plugins: [
		sveltekit(),
		replace({
      'API_URL': process.env.API_URL || 'http://localhost:3000',
		}),
    Unocss({
      extractors: [extractorSvelte],
      presets: [
        presetUno(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block'
          }
        })
      ]
    })]
};

export default config;
