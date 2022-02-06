describe('Login test', function(){

    it('Sucess Login', ()=>{
        cy.visit('/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('#login-button').click()
        cy.url().should('contains', '/inventory.html')
    })
})