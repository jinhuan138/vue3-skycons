## Installation

### NPM

```sh
npm install --save vue3-skycons
```

## Examples

### Using Component

<details>
<summary>Vue 3</summary>

```vue
<template>
   <skycon condition="rain" size="128" color="orangered" paused/>
</template>
<script setup>
import Skycon from "vue3-skycons";
</script>
```

</details>

<details>

<summary>Vue 2</summary>

```vue
<template>
    <skycon condition="rain" size="128" color="orangered" paused/>
</template>

<script>
import Skycon from "vue3-skycons";

export default {
  components: {
    Skycon
  }
}
</script>
```

</details>

## vue3-skycons Attributes

| **Name** | **Description**             | **Type**               | **Default** |
| -------- | -----------------------     | ---------------------- | ----------- |
| condition| Weather condition           | `string`               | —           | 
| size     | Icon size                   | `string`/`number`      | 64          |
| color    | Icon color                  | `string`               | black       |
| paused   | Start with paused animation | `boolean`              | false       |
| speed    | The animation speed         | `string`/`number`      | 1           |

### Event example

```vue
<template>
  <skycon condition="snow" size="128" paused @load="onLoad" />
</template>

<script setup>
import Skycon from "vue3-skycons";

const onLoad = (player) => {
      console.log("loaded");
      setInterval(() => {
        if (player.paused) {
          player.play();
        } else {
          player.pause();
        }
      }, 1000);
    }
</scrip>
```

### Animation Speed

The `speed` attributes is a decimal number to control the animation speed. It is a multiplyer to the original speed. `1` means the normal speed. `0.5` means half the normal speed. `2` means twice as fast as the normal speed.

```vue
<template>
  <skycon condition="wind" size="128" speed="1" />
  <skycon condition="wind" size="128" speed="3" />
  <skycon condition="wind" size="128" speed="0.5" />
</template>

<script setup>
import Skycon from "vue3-skycons";
</script>
```
