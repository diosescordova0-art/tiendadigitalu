# TechStore - Tienda de Electrónicos

Una página web profesional y moderna para una tienda de electrónicos, desarrollada con HTML5, CSS3 y JavaScript vanilla.

## 🚀 Características

- **Diseño Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Interfaz Moderna**: Diseño limpio y profesional con gradientes y animaciones
- **Carrito de Compras**: Funcionalidad completa de carrito con persistencia local
- **Navegación Suave**: Scroll suave entre secciones
- **Animaciones**: Efectos visuales atractivos y transiciones fluidas
- **Newsletter**: Sistema de suscripción con validación de email
- **SEO Optimizado**: Estructura semántica HTML5

## 📁 Estructura del Proyecto

```
TechStore/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── script.js       # Funcionalidad JavaScript
├── img/
│   ├── hero-electronics.jpg
│   ├── smartphone.jpg
│   ├── laptop.jpg
│   ├── headphones.jpg
│   └── tablet.jpg
└── README.md           # Documentación
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Flexbox y Grid Layout
  - Variables CSS
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript ES6+**:
  - LocalStorage para persistencia del carrito
  - Intersection Observer API para animaciones
  - Event delegation
  - Funciones asíncronas

## 🎨 Características de Diseño

### Paleta de Colores
- **Primario**: Gradiente azul-púrpura (#667eea → #764ba2)
- **Secundario**: Dorado (#ffd700)
- **Neutros**: Grises (#2d3748, #718096, #a0aec0)
- **Acentos**: Verde (#48bb78), Rojo (#f56565)

### Tipografía
- **Fuente Principal**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

### Componentes
- **Header**: Navegación fija con logo y carrito
- **Hero**: Sección principal con call-to-action
- **Productos**: Grid responsive de productos
- **Características**: Servicios destacados
- **Newsletter**: Suscripción por email
- **Footer**: Enlaces y información de contacto

## 🚀 Instalación y Uso

1. **Clonar o descargar** el proyecto
2. **Abrir** `index.html` en un navegador web
3. **Personalizar** las imágenes en la carpeta `img/`
4. **Modificar** los productos en `js/script.js`

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a internet (para Google Fonts y Font Awesome)

## 📱 Responsive Design

La página está optimizada para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

### Breakpoints
```css
@media (max-width: 768px) { /* Mobile */ }
@media (max-width: 480px) { /* Small Mobile */ }
```

## 🛒 Funcionalidades del Carrito

- ✅ Agregar productos al carrito
- ✅ Actualizar cantidades
- ✅ Eliminar productos
- ✅ Persistencia en LocalStorage
- ✅ Cálculo automático del total
- ✅ Sidebar deslizable
- ✅ Animaciones de feedback

## 🎯 Funcionalidades JavaScript

### Navegación
- Menú móvil hamburguesa
- Scroll suave entre secciones
- Navegación sticky

### Carrito de Compras
- Gestión de estado con LocalStorage
- Animaciones de agregado
- Validación de datos

### Interactividad
- Animaciones on-scroll
- Notificaciones toast
- Búsqueda (preparada para implementar)
- Filtros de productos

### Performance
- Lazy loading de imágenes
- Debounced scroll events
- Optimización de animaciones

## 🖼️ Imágenes Requeridas

Para que la página funcione correctamente, necesitas reemplazar los archivos de texto en la carpeta `img/` con imágenes reales:

1. **hero-electronics.jpg** (800x600px): Colección de productos electrónicos
2. **smartphone.jpg** (400x300px): Smartphone moderno
3. **laptop.jpg** (400x300px): Laptop gaming
4. **headphones.jpg** (400x300px): Auriculares inalámbricos
5. **tablet.jpg** (400x300px): Tablet profesional

### Recomendaciones para Imágenes
- Formato: JPG o PNG
- Calidad: Alta resolución
- Estilo: Fondo neutro, iluminación profesional
- Consistencia: Mismo estilo visual en todas las imágenes

## 🔧 Personalización

### Cambiar Productos
Edita el objeto `products` en `js/script.js`:

```javascript
const products = {
    producto_id: {
        id: 'producto_id',
        name: 'Nombre del Producto',
        price: 999.99,
        image: 'img/imagen.jpg',
        description: 'Descripción del producto'
    }
};
```

### Modificar Colores
Cambia las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ffd700;
}
```

### Agregar Nuevas Secciones
1. Añade el HTML en `index.html`
2. Estiliza en `css/styles.css`
3. Agrega funcionalidad en `js/script.js`

## 📈 Optimizaciones Implementadas

- **CSS**: Uso de variables, flexbox, grid
- **JavaScript**: Event delegation, debouncing
- **Performance**: Lazy loading, animaciones optimizadas
- **SEO**: Estructura semántica, meta tags
- **Accesibilidad**: Navegación por teclado, contraste adecuado

## 🌟 Próximas Mejoras

- [ ] Integración con backend
- [ ] Sistema de pagos
- [ ] Gestión de usuarios
- [ ] Panel de administración
- [ ] Búsqueda avanzada
- [ ] Filtros de productos
- [ ] Wishlist/Favoritos
- [ ] Reviews y calificaciones

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ para TechStore

---

**Nota**: Recuerda reemplazar las imágenes placeholder con imágenes reales de productos para una mejor experiencia visual.

