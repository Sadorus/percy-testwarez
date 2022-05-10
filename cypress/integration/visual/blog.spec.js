describe('PercyLuczniczQA', () => {
    before(() => {
      cy.visit('/')
    })
  
    it('Loads the Blog Content',() => {
      cy.get('.main').should('exist')
      cy.percySnapshot('Homepage')
    })

    it('Move to the second page',() => {
      cy.get('a.next').click()
      cy.percySnapshot('Blog Page')
    })

    it('Lorem Ipsum Post Content',() => {
      cy.visit('/posts/lorem-ipsum/')
      cy.percySnapshot('Lorem Ipsum Blog Post')
    })

    it('Example Blog Post',() => {
      cy.visit('/posts/cool-post/')
      cy.percySnapshot('Styling')
    })
  })

  