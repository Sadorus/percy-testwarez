describe('PercyLuczniczQA', () => {
    before(() => {
      cy.visit('/')
    })
  
    it('Loads the Blog Content',() => {
      cy.get('.main').should('exist')
      cy.percySnapshot('Homepage', { widths: [768, 992, 1200] })
    })

    it('Loads the Blog Content and make a snapshot of navigation',() => {
      cy.get('.main').should('exist')
      cy.percySnapshot('Navigation', { widths: [768, 992, 1200] }, {percyCSS: 'nav.nav'})
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

  