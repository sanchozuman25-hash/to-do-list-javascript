import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Indica la ruta a tu aplicación Next.js para cargar next.config.js y archivos .env
  dir: './',
})

// Configuración personalizada de Jest
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom', // Simula un navegador
  // Archivo de configuración inicial (lo crearemos en el siguiente paso)
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  
  // Si usas alias de módulos (como @/components/...) Next/Jest suele manejarlos,
  // pero si tienes problemas puedes definirlos aquí manualmente.
}

// createJestConfig se exporta de esta manera para asegurar que next/jest 
// pueda cargar la configuración asíncrona de Next.js
export default createJestConfig(config)