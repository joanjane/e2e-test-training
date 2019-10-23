/// <reference types="Cypress" />

const url = 'http://todomvc.com/examples/vanillajs/';

context('AddToDo', () => {
  describe('The new item input', () => {
    beforeEach(() => {
      cy.visit(url);
    });
    
    it('should add an item on the list when [enter] key is pressed', () => {
      cy.get('.new-todo')
        .type('test 1{enter}');

      cy.get('.todo-list')
        .find('li:nth-child(1) label')
        .should('have.text', 'test 1');
    });

    it('should add an item to the bottom when having multiple items', () => {
      cy.get('.new-todo')
        .type('test 1{enter}')
        .type('test 2{enter}');

      cy.get('.todo-list')
        .find('li:nth-child(1) label')
        .should('have.text', 'test 1');

      cy.get('.todo-list')
        .find('li:nth-child(2) label')
        .should('have.text', 'test 2');
    });
  });

  describe('The toggle button', () => {
    beforeEach(() => {
      cy.visit(url);
    });
    
    it('should mark item as complete', () => {
      cy.get('.new-todo')
        .type('test mark 1{enter}');

      cy.get('.todo-list')
        .find('li:nth-child(1) .toggle')
        .click();

      cy.get('.todo-list')
        .find('li:nth-child(1)')
        .should('have.class', 'completed');
    });
  });
});