import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //server needs only for fixing hot modulereload in wls2, for normal terminal this actually makes it slower
  // so if not using wls2, delete this server field.
  // server:{
  //   watch: {
  //     usePolling:true
  //   }
  //}

})
