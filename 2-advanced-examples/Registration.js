/// <reference types = "cypress" />

import SignUpPage from '../2-advanced-examples/PageFactory/SignUpPage'

describe('Sig up', function()
{
    it('New Registration', function()
    {
        const reg = new SignUpPage()
        reg.ClickSing()
        reg.fillemail()
        reg.Register()
        reg.fillFirstName()
        reg.filllastName()
        reg.fillpassword()
        reg.fillAdress()
        reg.fillcity()
        reg.fillstate()
        reg.fillpost()
        reg.submit()
    })

})