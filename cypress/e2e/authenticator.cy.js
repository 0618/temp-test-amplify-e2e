describe('Authenticator:', function() {
  // Step 1: setup the application state
  beforeEach(function() {
    cy.visit('/');
  });
  
  describe('Sign In:', () => {
    it('allows a user to signin', () => {
      // Step 2: Take an action (Sign in)
      cy.get(selectors.usernameInput).type("asdf2022-10-15");
      cy.get(selectors.signInPasswordInput).type("asdfasdf");
      cy.get(selectors.signInButton).contains('Sign in').click();

      cy.wait(30000);

      // Step 3: Make an assertion (Check for sign-out text)
        cy.get(selectors.signOutButton).contains('Sign out');
    });
  });

});
export const selectors = { 
  // Auth component classes
  usernameInput: '[name="username"]',
  signInPasswordInput: '[name="password"]',
  signInButton: '[data-variation="primary"]',
  signOutButton: 'button'
}