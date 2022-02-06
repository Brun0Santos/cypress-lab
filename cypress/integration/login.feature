Feature: Login feature

    Feature this feature is required for a user to login

    Scenario: Sucess login
    Given que um usuário acessa a home page para login
    When ele informa o usuário "standard_user"
    And a senha "secret_sauce"
    And clica no botão de login
    Then o usuário é logado


    