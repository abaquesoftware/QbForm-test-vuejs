<template>
  <div id="app">
    <qb-form-vuejs ref="MyForm"
      schema='{
          "type": "object",
          "properties": {
            "field": { "type": "string" },
            "colorSwitcher": {
              "type": "boolean",
              "_display": "switch",
              "_frameTopText": "Switch the field color to yellow"
            }
          }
        }
      ' ></qb-form-vuejs>
     <button @click="submit">Submit</button>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

interface IComponent {
  vueComponent: any
}

@Component({
  components: {
  }
})

export default class App extends Vue {

  mounted () {
    const vueElement: any = this.$refs.MyForm as any
    vueElement.vueComponent.setCallback("/colorSwitcher", "onChange", this.changeFieldColor)
  }

  changeFieldColor (elementPath: string[], cbName: string, input: object | null): boolean {
    if (input) {
      const vueElement: any = this.$refs.MyForm as any      
      const newValue = input['newValue' as keyof typeof input]
      if (newValue === 1) {
        vueElement.vueComponent.setProperty('/field','_backgroundColor','yellow')
      } else {
        vueElement.vueComponent.setProperty('/field','_backgroundColor','#fafaf8')
      }
    }
    return true
  }

  submit() {
    const vueElement: any = this.$refs.MyForm as any
    alert( JSON.stringify(vueElement.vueComponent.getProperty("/", "value")) )
  }

}
</script>

<style>
#app {
  border: 2px solid darkblue;
  text-align: center;
  width: 400px;
  padding: 20px;
}
</style>
