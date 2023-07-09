import { JsxEmit } from "typescript"

export class LoginPage{
    // pre data biar rapih, nnti dipanggil di func
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'

    // store element
    navigate(url: string){
        cy.visit(url)
    }
    inputUsername(username: string){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){
        cy.get(this.btn_login).click()
    }
    assertLogin(){
        cy.get('.title').should('be.visible')
        // cy.get('.peek').should('be.visible') 
        cy.contains('Products').should('contain','Products')
    }
    assertLoginFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
    
    //login step 
    login(url : string,username : string,password : string){
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
}