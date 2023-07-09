import { globalObject } from "./globalObject"
let globalObjects = new globalObject ()

export class DashboardPage{
    link_sauceLabsBackpack = 'Sauce Labs Backpack'
    addcartBTN_sauceLabsBackpak = '#add-to-cart-sauce-labs-backpack'
    addcartBTN_sauceLabsFleece = '#add-to-cart-sauce-labs-fleece-jacket'
    removeButton_sauceLabsBackpack = '#remove-sauce-labs-backpack'
    removeButton_sauceLabsFleece = '#remove-sauce-labs-fleece-jacket'
    cartIcon = '#shopping_cart_container'
    cartCounter = '.shopping_cart_badge'

    sauceLabsBackpack(){
        cy.contains(this.link_sauceLabsBackpack).click()
        cy.contains('Sauce Labs Backpack').should('be.visible') 
    }

    ACsauceLabsBackpack(){
        cy.get(this.addcartBTN_sauceLabsBackpak).click()
        cy.get(this.addcartBTN_sauceLabsBackpak).should('not.exist')
        cy.get(this.removeButton_sauceLabsBackpack).should('be.visible')
    }

    ACsauceLabsFleece(){
        cy.get(this.addcartBTN_sauceLabsFleece).click()
        cy.get(this.addcartBTN_sauceLabsFleece).should('not.exist')
        cy.get(this.removeButton_sauceLabsFleece).should('be.visible')
    }

    clickCart(){
        cy.get(this.cartIcon).click()
        cy.url().should('eq', globalObjects.URL + 'cart.html')
    }

    vis_cartCounter(){
        cy.get(this.cartCounter).should('be.visible')
    }
    
}