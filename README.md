# Órbita Web — Angular SPA producción rápida

Versión sin SSR para salir hoy a producción.

## Instalar

```bash
npm install
```

## Desarrollo

```bash
npm start
```

## Build producción

```bash
npm run build
```

## Deploy en Cloudflare Pages / Vercel

Build command:

```bash
npm run build
```

Output directory:

```bash
dist/orbita-web/browser
```

## Configuración

Edita:

```ts
src/environments/environment.ts
src/environments/environment.prod.ts
```

Cambia:

```ts
siteUrl
calendlyUrl
contactEmail
```

## Importante para SPA

En Cloudflare Pages agrega un archivo de redirect si luego usas rutas internas.
Por ahora esta versión usa una sola ruta `/`, por lo que puedes publicar sin SSR.
