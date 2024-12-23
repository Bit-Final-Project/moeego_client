import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "175.45.194.160",  // 배포 서버의 실제 IP 주소
    port: 80,  // 포트 설정 (80은 기본 HTTP 포트)
    // proxy: { }  // Vite에서의 /api 프록시 설정을 제거
  },
  optimizeDeps: {
    include: ["jwt-decode"],  // jwt-decode 모듈을 번들링
  },
});
