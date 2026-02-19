# @rut-cl/react-native

![npm version](https://img.shields.io/npm/v/@rut-cl/react-native?style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dm/@rut-cl/react-native?style=for-the-badge)
![bundle size](https://img.shields.io/bundlephobia/minzip/@rut-cl/react-native?style=for-the-badge)
![license](https://img.shields.io/npm/l/@rut-cl/react-native?style=for-the-badge)
![typescript](https://img.shields.io/badge/typescript-supported-blue?style=for-the-badge)
![react-native](https://img.shields.io/badge/react--native->=0.70-61dafb?style=for-the-badge&logo=react)

Componentes y hooks de React Native para la validación y formateo de RUT chileno, potenciado por [`rut-cl`](https://github.com/joseduin/rut-cl).

* ✅ Componente `RutInput` listo para usar.
* ✅ Hook `useRut` para manejo de estado avanzado.
* ✅ Formateo automático mientras se escribe.
* ✅ Soporte completo para TypeScript.
* ✅ Ultra liviano y optimizado para móviles.

---

🇪🇸 Español | [🇺🇸 English](./README.en.md)

---

## Instalación

```bash
npm install @rut-cl/react-native
```
> **Nota**: `rut-cl` es una dependencia necesaria y debe estar instalada.

---

## Uso

### Componente `RutInput`

Un reemplazo para el `TextInput` estándar que maneja automáticamente el formato y la validación.

```tsx
import React, { useState } from 'react';
import { RutInput } from '@rut-cl/react-native';

const MyComponent = () => {
  const [rut, setRut] = useState('');

  return (
    <RutInput
      value={rut}
      onChangeText={setRut}
      onChangeRut={(data) => {
        console.log(data.isValid); // true/false
        console.log(data.clean);   // '123456785'
      }}
      placeholder="12.345.678-5"
      // ... acepta todas las props de TextInput
    />
  );
};
```

---

### Hook `useRut`

Ideal para cuando necesitas un control total sobre el estado y la validación en formularios complejos.

```tsx
import { useRut } from '@rut-cl/react-native';
import { TextInput, Text } from 'react-native';

const MyForm = () => {
  const { 
    rawValue, 
    formattedValue, 
    cleanValue, 
    isValid, 
    error, 
    setRawValue 
  } = useRut('');

  return (
    <>
      <TextInput 
        value={formattedValue} 
        onChangeText={setRawValue} 
      />
      {error && <Text color="red">{error}</Text>}
      <Text>Válido: {isValid ? 'Sí' : 'No'}</Text>
    </>
  );
};
```

---

### Componente `RutDisplay`

Muestra un RUT formateado correctamente. Si el RUT es inválido, puede mostrar un valor de respaldo.

```tsx
import { RutDisplay } from '@rut-cl/react-native';

<RutDisplay 
  value="123456785" 
  fallback="RUT No disponible"
  showInvalid={false} // Oculta si es inválido
/>
```

---

### Hook `useRutFormatter`

Utilidades rápidas para formatear y validar sin manejar estado interno.

```tsx
import { useRutFormatter } from '@rut-cl/react-native';

const { formatRut, validateRut, getVerifier } = useRutFormatter();

const formatted = formatRut('123456785'); // '12.345.678-5'
const isValid = validateRut('12.345.678-5'); // true
```

---

## Referencia de API

### `RutInput` Props
Extiende de `TextInputProps` de React Native.

| Prop | Tipo | Descripción |
| :--- | :--- | :--- |
| `value` | `string` | El valor actual del input. |
| `onChangeText` | `(value: string) => void` | Se llama cuando el texto cambia (devuelve valor formateado). |
| `onChangeRut` | `(data: OnChangeRutParams) => void` | Devuelve un objeto detallado con `raw`, `clean`, `formatted` e `isValid`. |

### `useRut(initialValue, options)`
| Opción | Tipo | Defecto | Descripción |
| :--- | :--- | :--- | :--- |
| `autoFormat` | `boolean` | `true` | Indica si el valor devuelto debe formatearse automáticamente. |

---

## Licencia

MIT © [Jose Duin](https://github.com/joseduin)
