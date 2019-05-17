import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
  mounted() {
    // console.log($fn)
    $fn.test('23')
  }

  render() {
    return <div test="asd">tsx - ok</div>
  }
}

function test(a: string) {
  return a
}
