describe('Remove movement', () => {
    context('Positive Scenarios', () => {
        it('Remove movement', () => {
            cy.visit('https://barrigareact.wcaquino.me')
            cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
            cy.get('[data-test="email"]').type('patricie.lope@gmail.com')
            cy.get('input[placeholder="Senha"]').type('Paty123456')
            cy.contains('button', 'Entrar').click()
            cy.get('[data-test="menu-settings"]').click()
            cy.get('[data-test="menu-extrato"] > .fas').click()
            cy.get(':nth-child(1) > .row > .col > [href="#"] > .far').click()
            // cy.get('.toast-success > .toast-message')
            cy.contains("Movimentação removida com sucesso!").parent().should('have.css', 'background-color', 'rgb(81, 163, 81)')
            // .then((a) => {
            //     console.log(a)
            // })
            
            })
        })
    })
