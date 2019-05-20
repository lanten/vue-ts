import { Component, Vue } from 'vue-property-decorator'
@Component
export default class Demo extends Vue {
  mounted() {
    console.log('demo is mounted')
  }

  render() {
    return <div class="demo">demo is ok</div>
  }
}
