describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('has the correct <h2>', () => {
		cy.contains('h2', 'Actionable advice about how to do the “right” thing… better and with less stress.')
	})

	it('navigates to /start-here', () => {
		cy.get('nav a').contains('Start Here').click();
		cy.url().should('include', '/start-here');
	})

	it('navigates to /about', () => {
		cy.get('nav a').contains('About').click();
		cy.url().should('include', '/about');
	})

	it('navigates to /contact', () => {
		cy.get('nav a').contains('Contact').click();
		cy.url().should('include', '/contact');
	})
})
