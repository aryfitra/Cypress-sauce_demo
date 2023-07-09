export class CartPage {
    elPrice = '.inventory_item_price' 
    coButton = '#checkout'
    csButton = '#continue-shopping'

    ContinueShopping(){
        cy.get(this.csButton).click()
    }

    CheckOut(){
        cy.get(this.coButton).click()
    }
}
