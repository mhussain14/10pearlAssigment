
import Loginwithgooglepage from '../2-advanced-examples/PageFactory/Loginwithgooglepage'

describe ('Sign In with gmail', function()
{
    
    it('Sign up with google', function()
    {
        const google = new Loginwithgooglepage()
        google.visite()
        google.SignwithGmail()
        google.filladdnewaccount()
        google.SignwithGmail('raza.pcr23@gmail.com')
        google.buttonNext()
        google.fillpassword('Fincon@12345')
        google.sign()
    })
})