import { When, Given, Then, And } from 'cypress-cucumber-preprocessor/steps';
const pageSauceDemo = require('../../pages/pageSauceDemo')


Given('que um usuário acessa a home page para login', ()=>{
    cy.visit('/')
})


When(/^ele informa o usuário "([^"]*)"$/, (userName) => {
    pageSauceDemo.setTypeName(userName  )
});


And(/^a senha "([^"]*)"$/, (password) => {
    pageSauceDemo.setTypePassword(password)
});


And(/^clica no botão de login$/, () => {
    pageSauceDemo.clickLoginButton()
});


Then(/^o usuário é logado$/, () => {
    pageSauceDemo.validateMessage()

});
