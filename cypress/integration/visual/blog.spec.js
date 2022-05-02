describe('PercyLuczniczQA', function() {
    before(function() {
      // Load our app before starting each test case
      cy.visit('/')
    })
  
    it('Loads the Blog Content', function() {
      cy.get('.main').should('exist')
      cy.percySnapshot('Homepage')
    })

    it('Move to the second page', function() {
      cy.get('a.next').click()
      cy.percySnapshot('Blog Page')
    })

    it('Lorem Ipsum Post Content', function() {
      cy.visit('/posts/lorem-ipsum/')
      cy.percySnapshot('Lorem Ipsum Blog Post')
    })

    it('Example Blog Post', function() {
      cy.visit('/posts/cool-post/')
      cy.percySnapshot('Styling')
    })
  })

  