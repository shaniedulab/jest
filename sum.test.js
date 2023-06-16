const sum1=require('./sum');
const common=require('./commom');

beforeEach(()=>{
    console.log(common());
})

test("before each", ()=>{
    expect(sum1()).toBe('hllow')
})