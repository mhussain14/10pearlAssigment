/// <reference types = "cypress" />

class SignUpWithGamil
{
    visite()
    {
        cy.visit('https://www.etsy.com/')
    }
    SignwithGmail()
    {
        const reig = cy.get('body.ui-toolkit.transitional-wide.is-responsive.no-touch.en-GB.USD.PK.bg-white.guest.wt-focus-visible.wt-body-no-scroll:nth-child(2) div.wt-overlay.wt-overlay--has-close-icon.wt-overlay--will-animate:nth-child(2) div.wt-overlay__modal.wt-overlay--animation-done div.wt-grid.wt-grid--block div.wt-grid__item-xs-12 div.wt-bg-white.wt-mb-xs-2 form.wt-position-relative div.wt-display-flex-xs.wt-flex-direction-column-xs:nth-child(9) div.wt-mb-xs-2:nth-child(1) div:nth-child(1) button.wt-btn.wt-btn--secondary.wt-width-full:nth-child(3) > div.wt-spinner.wt-spinner--01', {timeout:15000})
        reig.click()
    }
    filladdnewaccount(newemail)
    {
        const account = cy.contains('Use another accoun')
        account.clear()
        account.type(newemail)
    }
    filpass(password)
    {
        const pass = cy.get('[name="password"]')
        pass.clear()
        pass.type(password)
    }
    buttonNext()
    {
        const next = cy.contains('Next')
        next.click()
    }
    
    fillpassword(password)
    {
        const pass = cy.get('[name="password"]')
        pass.clear()
        pass.type(password)
    }
    sign()
    {
        const sign = cy.get('[name="submit"]')
        sign.click()
    }
}export default SignUpWithGamil