# @rut-cl/react-native

![npm version](https://img.shields.io/npm/v/@rut-cl/react-native?style=for-the-badge)
![npm downloads](https://img.shields.io/npm/dm/@rut-cl/react-native?style=for-the-badge)
![bundle size](https://img.shields.io/bundlephobia/minzip/@rut-cl/react-native?style=for-the-badge)
![license](https://img.shields.io/npm/l/@rut-cl/react-native?style=for-the-badge)
![typescript](https://img.shields.io/badge/typescript-supported-blue?style=for-the-badge)
![react-native](https://img.shields.io/badge/react--native->=0.70-61dafb?style=for-the-badge&logo=react)

React Native components and hooks for Chilean RUT validation and formatting, powered by [`rut-cl`](https://github.com/joseduin/rut-cl).

* ✅ Ready-to-use `RutInput` component.
* ✅ `useRut` hook for advanced state management.
* ✅ Automatic formatting while typing.
* ✅ Full TypeScript support.
* ✅ Ultra-lightweight and optimized for mobile.

---

[🇪🇸 Español](./README.md) | 🇺🇸 English

---

## Installation

```bash
npm install @rut-cl/react-native
```
> **Note**: `rut-cl` is a peer dependency and must be installed.

---

## Usage

### `RutInput` Component

A drop-in replacement for the standard `TextInput` that automatically handles formatting and validation.

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
      // ... accepts all TextInput props
    />
  );
};
```

---

### `useRut` Hook

Ideal for when you need full control over state and validation in complex forms.

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
      {error && <Text style={{ color: 'red' }}>{error}</Text>}
      <Text>Valid: {isValid ? 'Yes' : 'No'}</Text>
    </>
  );
};
```

---

### `RutDisplay` Component

Displays a correctly formatted RUT. If the RUT is invalid, it can show a fallback value.

```tsx
import { RutDisplay } from '@rut-cl/react-native';

<RutDisplay 
  value="123456785" 
  fallback="RUT Not available"
  showInvalid={false} // Hides if invalid
/>
```

---

### `useRutFormatter` Hook

Quick utilities for formatting and validating without managing internal state.

```tsx
import { useRutFormatter } from '@rut-cl/react-native';

const { formatRut, validateRut, getVerifier } = useRutFormatter();

const formatted = formatRut('123456785'); // '12.345.678-5'
const isValid = validateRut('12.345.678-5'); // true
```

---

## API Reference

### `RutInput` Props
Extends React Native's `TextInputProps`.

| Prop | Type | Description |
| :--- | :--- | :--- |
| `value` | `string` | The current input value. |
| `onChangeText` | `(value: string) => void` | Called when text changes (returns formatted value). |
| `onChangeRut` | `(data: OnChangeRutParams) => void` | Returns a detailed object with `raw`, `clean`, `formatted`, and `isValid`. |

### `useRut(initialValue, options)`
| Option | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `autoFormat` | `boolean` | `true` | Whether the returned value should be automatically formatted. |

---

## License

MIT © [Jose Duin](https://github.com/joseduin)
