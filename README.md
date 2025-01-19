# BolsApp

Esta aplicación utiliza la [API de la CMF Chile](https://api.cmfchile.cl/index.html) para proporcionar información financiera actualizada y relevante.  
El objetivo principal es facilitar el acceso a datos económicos y financieros ofrecidos por la Comisión para el Mercado Financiero (CMF) de Chile.

![Frame 121075599](https://github.com/user-attachments/assets/e6dc57ce-67e1-44da-b48a-4ed4aa1a1d2b)

## Características principales

- **Consulta de indicadores económicos:** Permite obtener información sobre el valor actual de indicadores clave como la UF, el dólar, el euro, el IPC, entre otros.
- **Visualización dinámica:** Los datos se presentan de manera clara y organizada, facilitando su interpretación.
- **Icono de tiempo:** Según la ubicación del usuario y el tiempo, se coloca un icono de sol o luna.

![Frame 121075600](https://github.com/user-attachments/assets/81fc9f52-39bf-489d-b21e-da5d0f834e53)

## Tecnologías utilizadas

- **Frontend:** [React Native / Redux / Material].
- **API:** [API de la CMF Chile](https://api.cmfchile.cl/index.html).

## Instalación

1. **Clona el repositorio:**

```bash
git clone https://github.com/joseduin/bolsApp.git
```

2. **Configurar entorno:** crea el archivo .env, puedes guiarte de env.example

```bash
 BASE_URL=https://api.cmfchile.cl/api-sbifv3/recursos_api
 API_KEY={{YOUR_API_KEY}}
```

   Debes colocar tu API_KEY generada en la [API de la CMF Chile](https://api.cmfchile.cl/index.html)

3. **Instalar dependencias:**

```bash
  npm i
```

4. **Correr el proyecto:**

```bash
  npm run start
```
