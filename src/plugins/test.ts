const returnTest = (): any => {
  return 'hello test'
}
export default (context: any, inject: any) => {
  inject('test', returnTest)
}
