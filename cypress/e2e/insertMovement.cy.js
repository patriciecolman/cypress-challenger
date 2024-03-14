describe('Insert movement', () => {
    context('Positive Scenarios', () => {
        it('Insert movement', () => {
            cy.visit('https://barrigareact.wcaquino.me')
            cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
            cy.get('[data-test="email"]').type('patricie.lope@gmail.com')
            cy.get('input[placeholder="Senha"]').type('Paty123456')
            cy.contains('button', 'Entrar').click()
            cy.get('[data-test="menu-settings"]').click()
            cy.get('.nav-link.dropdown-item').contains("Contas").click()
            cy.randomName().then((name) => {
                cy.get('[data-test="nome"]').type(name)
            })
            
            cy.get('.btn').click()
            cy.get('.toast-close-button').parent().should('have.css', 'background-color', 'rgb(81, 163, 81)')
            cy.get('[data-test="menu-movimentacao"] > .fas').click()
            cy.get('[data-test="data-transacao"]').type("2024-03-14")
            
            

            






            // cy.get('[data-test="menu-movimentacao"]').click()
            
        })
    })
})