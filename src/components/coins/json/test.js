/**
 * Created by 340097 on 2017/3/13.
 */
var nei = {} // prices => {prices: 123}
var wai = {
  'p': 123,
  d: {
    p: 213,
    a:
      {
        p: 123,
        c: {p: 123}
      }
  },
  e: [
    {p: 123}
    ]
}
var zhong = {prices: 'p'};
function trun(zhong, nei, wai) {
  for (let i in wai) {
      console.log(i)
  }
}
trun()
