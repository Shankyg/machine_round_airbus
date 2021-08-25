import { shallowMount } from '@vue/test-utils'
import Profile from '@/components/Profile.vue'

describe('Profile.vue', () => {
    let wrapper;
    beforeEach(()=>{
        const $store = {
            state: {
                auth:{
                    user:{
                        name:"test",
                        email:"test@test.com",
                        id:"1",
                        role:"admin",
                        accessToken:"qwertyuiopasdfghjklzxcvbnm"
                    }  
                }
            },
            commit: jest.fn()
          }
          const $router = []
        wrapper = shallowMount(Profile,{
            global: {
                mocks: {
                  $store,
                  $router
                }
              },
            //methods:{ currentUser : ()=>{} }
        })
    })
    it('renders', () => {
        
        expect(wrapper.exists()).toBe(true);
      })
  
})