class pageSauceDemo{
    elements = {
        userNameInput: () => cy.get('input[id="user-name"]'),
        passwordInput: () => cy.get('input[id="password"]'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3'),
        validatePage: () => cy.url().should('contains', '/inventory.html')
    }

    setTypeName(userName){
        this.elements.userNameInput().type(userName)
    }

    setTypePassword(password){
        this.elements.passwordInput().type(password)
    }

    clickLoginButton(){
        this.elements.loginButton().click()
    }
    validateMessage(){
        this.elements.validatePage()

    }

}




module.exports = new pageSauceDemo()