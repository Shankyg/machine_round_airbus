import { shallowMount } from '@vue/test-utils'
import Register from '@/components/Register.vue'

describe('Register.vue', () => {
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
        wrapper = shallowMount(Register,{
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