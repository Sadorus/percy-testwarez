describe('Percy Demo on Hugo blog', () => {

    it('Loads the Blog Content',() => {
      cy.visit('/')
      cy.get('.main').should('exist')
      cy.percySnapshot('Homepage', { widths: [768, 992, 1200] })
    })

    it('Loads the Blog Content and make a snapshot of navigation',() => {
      cy.visit('/')
      cy.get('.main').should('exist')
      cy.percySnapshot('Navigation', { widths: [768, 992, 1200] , scope: `nav.nav`})
    })

    it('Move to the second page',() => {
      cy.visit('/')
      cy.get('a.next').click()
      cy.percySnapshot('Blog Page', { widths: [768, 992, 1200] , percyCSS: `footer.footer { display: none; }`} )
    })

    it('Lorem Ipsum Post Content',() => {
      cy.visit('/posts/lorem-ipsum/')
      cy.percySnapshot('Lorem Ipsum Blog Post', { widths: [768, 992, 1200], minHeight: 2000 })
    })

    it('Example Blog Post',() => {
      cy.visit('/posts/cool-post/', { widths: [768, 992, 1200]})
      cy.percySnapshot('Styling')
    })
  })

  