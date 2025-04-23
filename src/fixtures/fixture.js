import {test as fixture} from '@playwright/test'
import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

const test = fixture.extend({
    loginPage: async({page}, use)=>{
        use(new LoginPage(page))
    },
    homePage: async({page}, use)=>{
        use(new HomePage(page))
    }
})
export default test