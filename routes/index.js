import SettingsPage from '../components/settingsPage.js'
import MainPage from '../components/mainPage.js'
import LoginPage from '../components/loginPage.js'

//const Main = { template: '<div>Main page</div>' }
//const Settings = { template: '<div><h3>This is settings</h3><br><button>Edit</button></div>' }

const routes = [
    { path: '/', component: LoginPage },
    { path: '/main', component: MainPage },
    { path: '/settings', component: SettingsPage}
];
const router = new VueRouter({
    routes // short for `routes: routes`
});
var vm = new Vue({
    el: '#app',
    router
});