const Extension = `${Math.floor(Math.random() * 100000)}`
const User = 'Michael Diaz';

describe('Blazedemo', { testIsolation: false }, () => {
    
    it('Sign up', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#signin2').click()
        cy.wait(1000)
        cy.get('#sign-username').type(User + Extension)
      

        cy.get('#sign-password').type('passWord')
        cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.wait(2000)
    })
    it('Log in', () => {
      cy.get('#login2').click({ force: true });
      cy.wait(2000)
      cy.get('#loginusername').type(User + Extension)
      cy.wait(2000)
      cy.get('#loginpassword').type('passWord')
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      cy.get('#nameofuser').should('have.text', 'Welcome ' + User + Extension);
    })
    it('Log out', () => {
      cy.get('#logout2').click()
      cy.get('#signin2').should('have.text', 'Sign up')


    })
})

