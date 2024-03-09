describe('Create User', () => {
  context('Positive Scenario', () => {
    it.only('Create User', () => {
      cy.visit('https://barrigareact.wcaquino.me')
      cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
      cy.contains('Registrar').click()
      cy.url().should('eq', 'https://barrigareact.wcaquino.me/registro')
      cy.randomName().then((name) => {
        cy.get('input[placeholder="Nome"]').type(name)
      })
      cy.randomEmail().then((email) => {
        cy.get('input[placeholder="Email"]').type(email)
      })
      cy.intercept({
        method: 'POST',
        url: '**/usuarios'
      }).as('registerResponse')
      cy.get('input[placeholder="Senha"]').type('Paty123456')
      cy.contains('button', 'Registrar').click()
      cy.wait('@registerResponse').then((response) => {
        console.log(response)
        expect(response.response.statusMessage).to.be.equal("Created")
      })
      cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
      cy.get('.toast-message').contains('Usuário adicionado com sucesso')
    })
  });

  context('Negative Scenarios', () => {
    it('Create User', () => {
      cy.visit('https://barrigareact.wcaquino.me')
      cy.url().should('eq', 'https://barrigareact.wcaquino.me/login')
      cy.contains('Registrar').click()
      cy.url().should('eq', 'https://barrigareact.wcaquino.me/registro')
      cy.get('input[placeholder="Nome"]').type('Patricia')
      cy.get('input[placeholder="Email"]').type('patricie.lope@hotmail.com')
      cy.get('input[placeholder="Senha"]').type('Paty123456')
      cy.intercept({
        method: 'POST',
        url: '**/usuarios'
      }).as('registerResponse')
      cy.contains('button', 'Registrar').click()
      cy.get('@registerResponse').then((response) => {
        console.log(response)
      })
      cy.get('.toast-message').contains('Erro: Error: Request failed with status code 500')
    })
  });
  
})