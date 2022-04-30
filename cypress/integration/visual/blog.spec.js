describe('PercyLuczniczQA', function() {
    beforeEach(function() {
      // Load our app before starting each test case
      cy.visit('localhost:1313')
    })
  
    it('Loads the Content', function() {
      cy.get('.main').should('exist')
      cy.percySnapshot()
    })
  })

  