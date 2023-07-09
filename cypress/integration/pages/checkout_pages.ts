

export class CheckoutPage{
    locfirstName = '#first-name'
    loclastName = '#last-name'
    locpostalCode = '#postal-code'
    continueBTN = '#continue'
    finishBTN = '#finish'

    
    inputfirstName(firstname: string){
        cy.get(this.locfirstName).type(firstname)
    }

    inputlastName(lastname: string){
        cy.get(this.loclastName).type(lastname)
    }

    inputpostalCode(postalcode: string){
        cy.get(this.locpostalCode).type(postalcode)
    }

    ContinueCheckout(){
        cy.get(this.continueBTN).click()
    }

    FinishCheckout(){
        cy.get(this.finishBTN).click()
    }

    assertFinishCheckout(){
        cy.get('.title').should('contain', 'Checkout: Complete!')
    }

    fillForm(firstname: string, lastname: string, postalcode: string){
        this.inputfirstName(firstname)
        this.inputlastName(lastname)
        this.inputpostalCode(postalcode)
        this.ContinueCheckout()
    }
}