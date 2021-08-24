import { shallowMount } from '@vue/test-utils'
import User from '@/components/CloudUser.vue'
jest.mock("../../src/services/user.service",()=>({
    getUserBoard(){
        return {
             then(){}
            
        };
    }
}))



describe('CloudUser.vue', () => {
    let wrapper;
    beforeEach(()=>{
        
        wrapper = shallowMount(User)
    })
    it('renders', () => {
        
        expect(wrapper.exists()).toBe(true);
      })
    
})
