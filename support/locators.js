

const locators = {
    
    LOGIN: {
        USER: 'input[data-test="email"]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: ('button', 'Entrar'),

    },

    MENU: {
        HOME: 'a[data-test="menu-home"]',
        SETTINGS:'[data-test="menu-settings"]',
        CONTAS:'[href="/contas"]',
        RESET:'[href="/reset"]',
        MOVIMENTACAO:'a[data-test="menu-movimentacao"]',
        EXTRATO: '[data-test="menu-extrato"]',

    },

    CONTAS: {

        NOME: '[data-test=nome]',
        BTN_SALVAR: 'button[alt="Salvar"]',
        FN_XP_BTN_ALTERAR: nome => `//table//td[contains(.,'${nome_conta}')]/..//i[@class='far fa-edit']`,

    },

    MOVIMENTACAO:{

        DESCRICAO:'[data-test=descricao]',
        VALOR:'[data-test=valor]',
        INTERESSADO:'[data-test=envolvido]',
        CONTA:'[data-test=conta]',
        STATUS: '[data-test= status]',
        BTN_SALVAR:'.btn-primary',

    },

    EXTRATO:{

        LINHAS:'.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(.,'${desc}')]/following-sibling::small[contains(.,'${value}')]`,
        FNX_XP_REMOVER_ELEMENTO: conta=> `//span[contains(., '${conta}')]/../..//i[@class=far fa-trash-alt']`,
    },

    SALDO:{

        FN_XP_SALDO_CONTA: nome => `//td[contains(., '${nome}')]/../td[2]`,


    },

    MESSAGE:'.toast-message',
    FECHARMSG: '.toast-close-button',
    FECHARCONTACRIADS: 'button[class="toast-close-button"]'
}

export default locators;