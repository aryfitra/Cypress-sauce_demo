import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"
import { CartPage } from "./pages/cart_pages"
import { globalObject } from "./pages/globalObject"
import { CheckoutPage } from "./pages/checkout_pages"

let loginPage = new LoginPage()
let dashboardPage = new DashboardPage()
let globalObjects = new globalObject ()
let cartPage = new CartPage()
let checkoutPage = new CheckoutPage()

describe('Login function', ()=> {
// test fuction logn & verify navigate to dashboard page
    it('Test valid LOGIN', () => {
        loginPage.login(globalObjects.URL,'standard_user','secret_sauce')
        loginPage.assertLogin() 
    })

    // invalid test func tlogin
    it('Test invalid LOGIN', () => {
        loginPage.login(globalObjects.URL,'standard_user','invalidPass')
        loginPage.assertLoginFail()
    })
})

describe('Function add product', ()=>{
    // validate clickable name product & navigate if clicked
    it('Test navigate click product', () => {
        loginPage.login(globalObjects.URL,'standard_user','secret_sauce')
        loginPage.assertLogin()
        dashboardPage.sauceLabsBackpack() 
    })

    it('Test counter items cart when add product and remove', ()=>{
        loginPage.login(globalObjects.URL,'standard_user','secret_sauce')
        dashboardPage.ACsauceLabsBackpack()
        cy.get(dashboardPage.cartCounter).should('be.visible').and('have.text', '1')
        dashboardPage.clickCart()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
        cy.get(cartPage.elPrice).should('contain', '$29.99')
        cartPage.ContinueShopping()
        dashboardPage.ACsauceLabsFleece()
        dashboardPage.clickCart()
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
        cy.get(cartPage.elPrice).should('contain', '$49.99')
        cy.get(dashboardPage.removeButton_sauceLabsBackpack).click()
        cy.get(dashboardPage.cartCounter).should('be.visible').and('have.text', '1')
    })

    it('Test flow checkout', ()=>{
        loginPage.login(globalObjects.URL,'standard_user','secret_sauce')
        dashboardPage.ACsauceLabsBackpack()
        dashboardPage.clickCart()
        cartPage.CheckOut()
        checkoutPage.fillForm('harry', 'fitra', '14592')
        checkoutPage.FinishCheckout()
        checkoutPage.assertFinishCheckout()
    })
})

