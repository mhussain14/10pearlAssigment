/// <reference types = "cypress" />
import {Signpage} from '../PageFactory/SignPage'
class SignUpPage
{
    visite()
    {
        cy.visit('http://automationpractice.com/index.php')
    }
    ClickSing()
    {
        const clickonsing = cy.contains('Sign in')
        clickonsing.click()
    }
    fillemail(email)
    {
        const emails = cy.get('input[id = email_create]')
        emails.clear()
        emails.type(email)
    }
    Register()
    {
        const reig = cy.get('button[id = SubmitCreate]')
        reig.click()
    }
    fillFirstName(firsttname)
    {
        const last = cy.get('input[id = customer_firstname]')
        last.clear()
        last.type(firsttname)
    }
    filllastName(lastname)
    {
        const first = cy.get('input[id = customer_lastname]')
        first.clear()
        first.type(lastname)
    }
    fillpassword(password)
    {
        const pass = cy.get('input[id = passwd]')
        pass.clear()
        pass.type(password)

    }
    fillAdress(address)
    {
    const adress = cy.get('input[id = address1]')
    adress.clear()
    adress.type(address)

    }
    fillmobile(mobiles)
    {
        const mobile = cy.get('input[id = phone_mobile]')
        mobile.clear()
        mobile.type(mobiles)
    }
    fillcity(city)
    {
        const citys = cy.get('input[id = city]')
        citys.clear()
        citys.type(city)
    }
    fillstate(states)
    {
        const state = cy.get('input[id = id_state]')
        state.click()
        state.select(states)
    }
    fillpost(postcodes)
    {
        const postcode = cy.get('input[id = postcode]')
        postcode.clear()
        postcode.type(postcodes)
    }

    submit()
    {
        const submit = cy.get('button[id = submitAccount]')
        submit.click()

    }
    
}
export default SignUpPage