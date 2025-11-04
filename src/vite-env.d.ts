/// <reference types="vite/client" />

declare module '*.mp4' {
  const src: string;
  export default src;
}

// Opsional: jika Anda masih punya file .mkv
declare module '*.mkv' {
  const src: string;
  export default src;
}

declare module '*.mp3' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}