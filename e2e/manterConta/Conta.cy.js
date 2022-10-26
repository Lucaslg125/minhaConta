/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsContas'

require('cypress-xpath');



describe('Testes Funcionais', () => {
  before(() => {

    cy.login('a@a', 'a')
    cy.resetApp()

  })

  it('Criar Conta Movimentação', () => {
   cy.acessarMenuConta()
    cy.inserirConta()
    cy.get(loc.MESSAGE).should('contain', 'Conta inserida com sucesso!')
    cy.get(loc.FECHARMSG).click({ multiple: true })

  })

  it('Editar Conta Movimentação', () => {
   cy.acessarMenuConta()
   

    cy.xpath(loc.CONTAS.FN_XP_BTN_ALTERAR('Conta de teste')).click()
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.CONTAS.NOME).clear()
      .type('Conta alterada')
    cy.get(loc.CONTAS.BTN_SALVAR).click({ force: true })
    cy.get(loc.MESSAGE).should('contain', 'Conta atualizada com sucesso')
    cy.get(loc.FECHARMSG).click({ multiple: true })


  })

  it('Incluir conta com mesmo nome ', () => {
    cy.acessarMenuConta()
    cy.inserirConta()

    cy.get(loc.CONTAS.NOME).clear()
    cy.get(loc.CONTAS.NOME).type('Conta Alterada')
    cy.get(loc.CONTAS.BTN_SALVAR).click({force:true})
    cy.get(loc.MESSAGE).should('contain', 'code 400')
    cy.get(loc.FECHARMSG).click({ multiple: true })


  })

  it('Inserir Movimentação ', () => {
   
    cy.get(loc.MENU.MOVIMENTACAO).click()

    cy.get(loc.MOVIMENTACAO.DESCRICAO).type('Desc')
    cy.get(loc.MOVIMENTACAO.VALOR).type('123')
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type('Inter')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.CONTA, {timeout:70000}).select('Conta Alterada')
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')
    cy.get(loc.EXTRATO.LINHAS).should('have.length', 7)
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO('Desc', '123')).should('exist')

})

  it('Visualizar Saldo', () => {

    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta Alterada')).should('contain', '123,00' )



  })

  it('Remover Movimentação da Conta', () => {

    cy.get(loc.MENU.EXTRATO).click()
    cy.xpath(loc.EXTRATO.FNX_XP_REMOVER_ELEMENTO('Desc')).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')


  })
})