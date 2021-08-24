import { shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'

describe('Login.vue', () => {
    let wrapper;
    beforeEach(()=>{
        const $store = {
            state: {
                auth:{
                    status:{loggedIn:false }  
                }
            },
            commit: jest.fn()
          }
          const $router = []
        wrapper = shallowMount(Login,{
            global: {
                mocks: {
                  $store,
                  $router
                }
              },
           // methods:{ loggedIn : ()=>{} }
        })
    })
    it('renders', () => {
        
        expect(wrapper.exists()).toBe(true);
      })
  
})