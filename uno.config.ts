import { defineConfig, presetIcons, presetUno } from 'unocss'

export default defineConfig({
	presets: [presetUno(), presetIcons()],
	theme: {
		colors: {
			bg: '#B3DAC5',
			fg: '#353034',
			primary: '#E4C692',
			secondary: '#E3D9C1',
		},
	},
})
